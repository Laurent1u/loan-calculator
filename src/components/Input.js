import React from 'react'

const Input = ({ label, type, identifier, updateStateFunction }) => {
    const inputHandler = e => {
        const {name, value} = e.target

        updateStateFunction({
            [name]: value
        })
    }

    return (
        <div>
            <label htmlFor={identifier}>{label}</label>
            <input type={type} name={identifier} id={identifier} onChange={inputHandler} />
        </div>
    )
}

export default Input