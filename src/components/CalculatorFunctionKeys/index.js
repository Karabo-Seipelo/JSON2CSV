
import React from 'react';
import PropTypes from 'prop-types';

const CalculatorFunctionKeys = ({clear, clearText, toggle, percentage}) => {

    return (
        <div className="function-keys">
            <button data-clear onClick={() => clear(clearText)}>{clearText}</button>
            <button data-toggle onClick={() => toggle()}>&plusmn;</button>
            <button data-percentage onClick={() => percentage()}>%</button>
        </div>
    )
}

CalculatorFunctionKeys.propTypes = {
    clear: PropTypes.func,
    clearText: PropTypes.string,
    toggle: PropTypes.func,
    percentage: PropTypes.func
}

export default CalculatorFunctionKeys;