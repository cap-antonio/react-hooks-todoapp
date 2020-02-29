 import React from 'react'
import './TodoListItem.css'

export const TodoListItem = ({label, important, done, onDelete, onToggleImportant, onToggleDone}) => {
    let doneStyle = 'TodoListItem'
    if (done === true) {
        doneStyle += ' done'
    }
    if(important === true) {
        doneStyle += ' important'
    } 
    return (
        <div className={doneStyle}  >
            <span className="TodoListItemLabel" onClick = {onToggleDone}>
                {label}
            </span>
                <button type="button" className="btn btn-outline-success btn-sm float-right" onClick = {onToggleImportant} >
                    <i className="fa fa-exclamation"/>
                </button>
                <button type="button" className="btn btn-outline-danger btn-sm float-right" onClick = {onDelete}>
                    <i className="fa fa-trash-o" />
                </button>
        </div>
    )
}