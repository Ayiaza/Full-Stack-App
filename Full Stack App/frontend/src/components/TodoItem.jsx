export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className="flex items-center justify-between gap-3 rounded-lg border border-ink/10 bg-white px-4 py-3">
      <label className="flex items-center gap-3 flex-1 cursor-pointer">
        <input
          type="checkbox"
          checked={todo.done}
          onChange={() => onToggle(todo)}
          className="h-4 w-4 accent-accent"
        />
        <span className={todo.done ? "line-through text-ink/40" : "text-ink"}>{todo.title}</span>
      </label>
      <button
        onClick={() => onDelete(todo)}
        className="text-sm text-ink/40 hover:text-red-600 transition"
        aria-label={`Delete ${todo.title}`}
      >
        Delete
      </button>
    </li>
  );
}
