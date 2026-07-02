import { useEffect, useState } from "react";
import api from "../api.js";
import TodoItem from "../components/TodoItem.jsx";

export default function Dashboard({ onLogout }) {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadTodos = async () => {
    try {
      const res = await api.get("/todos");
      setTodos(res.data);
    } catch (err) {
      setError("Could not load tasks");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTodos();
  }, []);

  const handleAdd = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    const res = await api.post("/todos", { title });
    setTodos([res.data, ...todos]);
    setTitle("");
  };

  const handleToggle = async (todo) => {
    const res = await api.patch(`/todos/${todo.id}`, { done: !todo.done });
    setTodos(todos.map((t) => (t.id === todo.id ? res.data : t)));
  };

  const handleDelete = async (todo) => {
    await api.delete(`/todos/${todo.id}`);
    setTodos(todos.filter((t) => t.id !== todo.id));
  };

  return (
    <div className="min-h-screen bg-paper px-4 py-10">
      <div className="mx-auto max-w-xl">
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-display text-2xl font-semibold text-ink">Your tasks</h1>
          <button onClick={onLogout} className="text-sm text-ink/50 hover:text-ink transition">
            Sign out
          </button>
        </div>

        <form onSubmit={handleAdd} className="flex gap-2 mb-6">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Add a task…"
            className="flex-1 rounded-lg border border-ink/15 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <button
            type="submit"
            className="rounded-lg bg-accent text-white font-medium px-4 py-2 hover:opacity-90 transition"
          >
            Add
          </button>
        </form>

        {loading && <p className="text-sm text-ink/50">Loading…</p>}
        {error && <p className="text-sm text-red-600">{error}</p>}

        {!loading && todos.length === 0 && (
          <p className="text-sm text-ink/50 bg-accentSoft rounded-lg px-4 py-6 text-center">
            No tasks yet. Add your first one above.
          </p>
        )}

        <ul className="space-y-2">
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} onToggle={handleToggle} onDelete={handleDelete} />
          ))}
        </ul>
      </div>
    </div>
  );
}
