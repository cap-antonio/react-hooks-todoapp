import React from 'react'
import './Appheader.css'

export const AppHeader = ({todo, done}) => {
    return (
        <div className="app-header d-flex">
            <h1>do it!</h1>
            <h2> {todo 
                    ? `${todo} more to do`
                    : `nothing to do`}
                , {done
                    ? `${done} done`
                    : `nothing done`}
                </h2>
        </div>
    )
}