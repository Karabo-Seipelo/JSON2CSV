
// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

const CalculatorOperationKey = ({operators, func}) => {
    const operatorKeysDisplay = (display, operation, index) => {
        return (<button data-operand onClick={() => {
            func(operation)
        }} key={index}>{String.fromCharCode(display)}</button>)
    }

    return (
        <div className="calculator_operator-keys">
            {operators.map((operatorKey, index) => (
                operatorKeysDisplay(operatorKey.code, operatorKey.display, index)
            ))}
        </div>
    )
}

CalculatorOperationKey.propTypes = {
    operators: PropTypes.arrayOf(
        PropTypes.shape({
            code: PropTypes.number,
            display: PropTypes.string
        })
    ),
    func: PropTypes.func
}

export default CalculatorOperationKey;