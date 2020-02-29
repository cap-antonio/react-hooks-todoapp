import React from 'react'

export const ItemStatusFilter = ({filterOption, setFilterOption}) => {
    const buttons = [
        {name: "all", label: "all"},
        {name: "active", label: "active"},
        {name: "done", label: "done"}
    ]
    const buttonsGroup = buttons.map(({name, label}) => {
        const isActive = filterOption === name
        const classes = isActive ? "btn-info" : "btn-outline-secondary" 
        return (
            <button 
                type = "button"
                className = {`btn ${classes}`}
                key = {name}
                onClick = {() => {setFilterOption(name)}}
            >{label}</button>
        )
    })

    return (
        <div className = "btn-group input-group mb-3">
            {buttonsGroup}
        </div>
    )
}