import React from 'react';
import PropTypes from 'prop-types';

const CalculatorDigitKeys = ({inputDigit, inputDot}) => {
    const numberKeys = [ 7, 8, 9, 4, 5, 6, 1, 2, 3 ];
    return (
        <div className="digit-keys">
            {numberKeys.map((keyCode, index) => (
                <button data-digit onClick={() => inputDigit(keyCode)} key={index}>{keyCode}</button>
            ))}
            <button data-zero className="span-2" onClick={() => inputDigit(0)}>0</button>
            <button data-dot onClick={() => {
                inputDot();
            }}>.</button>
        </div>
    )
};

CalculatorDigitKeys.propTypes = {
    inputDigit: PropTypes.func,
    inputDot: PropTypes.func
}

export default CalculatorDigitKeys;