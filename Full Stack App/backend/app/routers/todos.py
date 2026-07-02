from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from .. import models, schemas, auth
from ..database import get_db

router = APIRouter(prefix="/api/todos", tags=["todos"])


@router.get("", response_model=list[schemas.TodoOut])
def list_todos(
    db: Session = Depends(get_db),
    current_user: models.User = Depends(auth.get_current_user),
):
    return (
        db.query(models.Todo)
        .filter(models.Todo.owner_id == current_user.id)
        .order_by(models.Todo.created_at.desc())
        .all()
    )


@router.post("", response_model=schemas.TodoOut, status_code=201)
def create_todo(
    payload: schemas.TodoCreate,
    db: Session = Depends(get_db),
    current_user: models.User = Depends(auth.get_current_user),
):
    todo = models.Todo(title=payload.title, owner_id=current_user.id)
    db.add(todo)
    db.commit()
    db.refresh(todo)
    return todo


@router.patch("/{todo_id}", response_model=schemas.TodoOut)
def update_todo(
    todo_id: int,
    payload: schemas.TodoUpdate,
    db: Session = Depends(get_db),
    current_user: models.User = Depends(auth.get_current_user),
):
    todo = (
        db.query(models.Todo)
        .filter(models.Todo.id == todo_id, models.Todo.owner_id == current_user.id)
        .first()
    )
    if not todo:
        raise HTTPException(status_code=404, detail="Todo not found")

    if payload.title is not None:
        todo.title = payload.title
    if payload.done is not None:
        todo.done = payload.done

    db.commit()
    db.refresh(todo)
    return todo


@router.delete("/{todo_id}", status_code=204)
def delete_todo(
    todo_id: int,
    db: Session = Depends(get_db),
    current_user: models.User = Depends(auth.get_current_user),
):
    todo = (
        db.query(models.Todo)
        .filter(models.Todo.id == todo_id, models.Todo.owner_id == current_user.id)
        .first()
    )
    if not todo:
        raise HTTPException(status_code=404, detail="Todo not found")

    db.delete(todo)
    db.commit()
    return None
