import React from 'react';

const Calculator = (props) => {
    return (
        <div id="calculator">
            <header>
                <h1>Loan Calculator</h1>
            </header>
            {props.children}
        </div>
    );
}

export default Calculator;