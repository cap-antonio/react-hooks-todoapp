import React, { useState } from 'react'
import './Searcher.css'

export const Searcher = ({setSearchValue}) => {
    const onSearchValueChange = (e) => {
        setSearchValue(e.target.value)
    }
    return (
        <div className="input-group mb-3 search-input">
            <input type="text" className="form-control" placeholder="type to search" 
                aria-label="type to search" aria-describedby="basic-addon2" 
                onChange = {onSearchValueChange} />
        </div>

    )
}
