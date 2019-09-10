// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import CalculatorDisplay from '../CalculatorDisplay/index';
import CalculatorOperationKey from '../CalculatorOperationKey/index';
import CalculatorFunctionKeys from '../CalculatorFunctionKeys/index';
import CalculatorDigitKeys from '../CalculatorDigitKeys/index';
import './app.scss';

const App = () => {

    const [ displayValue, setDisplayValue] = useState('0');
    const [ withOperation, setWithOperation ] = useState(false);
    const [ operand, setOperand ] = useState();
    const [ value, setValue] = useState();
    const [ clearText, setClearText] = useState(displayValue !== '0' ? 'C' : 'AC');
    const operatorKeys = [
        {
            code: 47,
            display: '/'
        },
        {
            code: 42,
            display: '*'
        },
        {
            code: 45,
            display: '-'
        },
        {
            code: 43,
            display: '+'
        },
        {
            code: 61,
            display: '='
        }
    ];
    const operations = {
        '/': (previousValue, nextValue) => previousValue / nextValue,
        '*': (previousValue, nextValue) => previousValue * nextValue,
        '+': (previousValue, nextValue) => previousValue + nextValue,
        '-': (previousValue, nextValue) => previousValue - nextValue,
        '=': (previousValue, nextValue) => nextValue,
    }

    const inputDigit = (digit) => {

        if(withOperation) {
            setDisplayValue(digit.toString());
            setWithOperation(false);
        } else if (displayValue.length < 8){
            const display = displayValue === '0' ? digit.toString() : displayValue.concat(digit);
            setDisplayValue(display);
        }
    }

    const inputDot = () => {
        if (!(/\./).test(displayValue)) {
            setDisplayValue(displayValue + '.');
            setWithOperation(false);
        }
    }

    const percentage = () => {
        const currentValue = parseInt(displayValue);

        if (currentValue === 0) return;

        const fixedDigit = displayValue.replace(/^-?\d*\.?/, '');
        const newValue = parseFloat(displayValue) / 100;

        setDisplayValue(newValue.toFixed(fixedDigit.length + 2));
    }

    const toggle = () => {
        const newValue = parseFloat(displayValue) * -1;
        setDisplayValue(newValue.toString());
    }

    const performOperation = (nextOperator) => {
        const inputValue = parseFloat(displayValue);

        if (value === undefined || value === null) {

            setValue(inputValue);

        } else if (operand) {

            const currentValue = value || 0;
            const newValue = operations[operand](currentValue, inputValue);

            setValue(newValue);
            setDisplayValue(newValue);
        }

        setWithOperation(true);
        setOperand(nextOperator);
    }

    const clearDisplay = () => {
        setDisplayValue('0')
    }

    const clearAll = () => {
        setWithOperation(false);
    }

    const clear = (mode) => {
        switch (mode) {
            case 'C':
                clearDisplay();
                break;
            default:
                clearAll();
        }
    }

    useEffect(() => {
        const display = displayValue !== '0' ? 'C' : 'AC';
        setClearText(display);

    },[displayValue]);

    return (
        <div className="calculator">
            <CalculatorDisplay>{displayValue}</CalculatorDisplay>
            <div className="calculator_keypad">
                <div className="calculator_input_keys">
                    <CalculatorFunctionKeys clear={clear} clearText={clearText} toggle={toggle} percentage={percentage}/>
                    <CalculatorDigitKeys inputDigit={inputDigit} inputDot={inputDot} />
                </div>
                <CalculatorOperationKey operators={operatorKeys} func={performOperation} />
            </div>
        </div>
    );
};


export default App;
