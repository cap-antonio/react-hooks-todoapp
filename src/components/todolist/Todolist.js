import React from 'react'
import './TodoList.css'
import { TodoListItem } from '../todolist-item/TodoListItem'

export const Todolist = ({todos, onDelete, onToggleImportant, onToggleDone}) => {
    const element = todos.map((item) => {
        const {id, ...itemProps} = item
        return (
            <li key = {id} className = "list-group-item">
                <TodoListItem {...itemProps} onDelete = {() => onDelete(id)} 
                    onToggleImportant = {() => onToggleImportant(id)} 
                    onToggleDone = {() => onToggleDone(id)} />
            </li>
        )
    })
    return (
        <ul className = "list-group todo-list">
            {element}
        </ul>
    )
}