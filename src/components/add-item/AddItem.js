import React, { useState } from 'react'
import './AddItem.css'

export const AddItem = ({addTodo, onLabelChange}) => {
    const [label, setLabel] = useState("")
    const [placeholder, setPlaceholder] = useState("what I need to do?")

    onLabelChange = (e) => {
        setLabel(e.target.value)
    }
    const submitHandler = (e) => {
        e.preventDefault()
        if (label.trim().length === 0) {
            setLabel("")
            setPlaceholder("THE FIELD CAN NOT BE EMPTY!")
        } else {
        addTodo(label)
        setLabel("")
        setPlaceholder("what I need to do?")
        }
    }
    return (
        <form className="input-group mb-3 add-item-input" onSubmit = {submitHandler} >
            <input type="text" className="form-control" 
                placeholder={placeholder} aria-label="what I need to do?" 
                aria-describedby="basic-addon2" 
                autoFocus={true}
                value={label}
                onChange = {onLabelChange} 
                required = {true} />
            <button type="button" className="btn btn-info" onClick={submitHandler}>
                    add task
            </button>
        </form>
    )
}