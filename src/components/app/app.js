// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import './app.scss';

const App = () => {
    const [ inputFormat, setInputFormat ] = useState();
    const [ outputFormat, setOutputFormat ] = useState();

    const onChangeHandler = (event) => {
        setInputFormat(event.target.value);
    }

    const onClickHandler = () => {
        if (isValidJson(inputFormat)) {
            let output = JSON.parse(inputFormat);
            setOutputFormat(json2csv(output));
        }
    }

    const isValidJson  = (json) => {
        try {
            JSON.parse(json);
            return true
        } catch (e) {
            return false;
        }
    }

    const json2csv = (json) => {
       let i = 0;
       let keys = "";
       let lines = "";

       for(; i < json.length; i++) {

           if(!keys) {
               keys += `${Object.keys(json[i]).toString()}\r\n`;
           }

           lines += `${Object.values(json[i]).toString()}\r\n`;
       }

       return `${keys}${lines}`;
    }

    return (
        <div className="container">
            <div className="input-format">
                <textarea onChange={(event) => {
                    onChangeHandler(event, )
                }}></textarea>
            </div>
            <div className="controls">
                <button onClick={onClickHandler}>Convert</button>
            </div>
            <div className="input-format">
            <textarea value={outputFormat}></textarea>
            </div>
        </div>
    );
};


export default App;
;