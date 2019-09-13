// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import './app.scss';
import { readFile } from 'fs';

const App = () => {
    const [ inputFormat, setInputFormat ] = useState();
    const [ outputFormat, setOutputFormat ] = useState();
    const [ errorMessage, setErrorMessage ] = useState();

    const onChangeHandler = (event) => {
        setInputFormat(event.target.value);
    }

    const onConvertHandler = () => {
        if (isValidJson(inputFormat)) {
            let output = JSON.parse(inputFormat);
            setOutputFormat(json2csv(output));
        } else if (inputFormat === undefined | inputFormat === null) {
            setErrorMessage('Please enter json value');
        } else {
            setErrorMessage('Please enter valid json');
        }
    }

    const onUploadHandler = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.addEventListener("loadend", (event) => {
            setInputFormat(event.target.result);
        });

        reader.readAsText(file);
    }


    const onClearHandler = () => {
        setInputFormat("");
        setOutputFormat("");
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

           if (!keys) {
               keys += `${Object.keys(json[i]).map(value => `"${value}"`).toString()}\r\n`;
           }

           lines += `${Object.values(json[i]).map(value => `"${value}"`).toString()}\r\n`;
       }

       return `${lines}`;
    }


    return (
        <div className="container">
            <div className="error">
                {errorMessage}
            </div>
            <div className="input-format">
                <textarea onChange={(event) => {
                    onChangeHandler(event)
                }} value={inputFormat}></textarea>
            </div>
            <div className="controls">
                <div>
                    <button onClick={onConvertHandler}>Convert</button>
                    </div>
                <div>
                <button onClick={onClearHandler}>Clear</button>
                </div>
                <div>
                <input type="file" onChange={onUploadHandler} name="Upload" />
                </div>
            </div>
            <div className="input-format">
            <textarea value={outputFormat}></textarea>
            </div>
        </div>
    );
};


export default App;
;