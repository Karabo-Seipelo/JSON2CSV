// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

const CalculatorDisplay = ({children}) => <div className="calculator_display">{children}</div>;

CalculatorDisplay.propTypes = {
    children: PropTypes.oneOfType([ 
        PropTypes.number,
        PropTypes.string
    ])
}

export default CalculatorDisplay;