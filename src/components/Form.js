import React, { useState } from 'react';

const Form = (props) => {
    const handleSubmitForm = e => {
        e.preventDefault();
        props.submitFunction();
    }

    return (
        <form onSubmit={handleSubmitForm}>
            {props.children}
        </form>
    )
}

export default Form;