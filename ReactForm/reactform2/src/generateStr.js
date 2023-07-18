import React, { useState } from 'react';
import './App.css'

const GenerateStr = (props) => {
    const [editing, setEditing] = useState(false);
    const [value, setValue] = useState(props.initialValue);

    const handleClick = () => {
        setEditing(true);
    };

    const handleSave = () => {
        setEditing(false);
        props.onSave(value);
    };

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    return (
        <div>
            <div class="grid-container"  >

                <div class='grid-item'><label htmlFor={`label-${props.label}`}>{props.label}:</label> </div>
                {editing ? (
                    <>
                        <div class='grid-item'>
                            <input

                                className='inputf'
                                type="text"
                                id={`t-${props.label}`}
                                name={`t-${props.label}`}
                                value={value}
                                onChange={handleChange}
                            />
                        </div>
                        <div class='grid-item'>
                            <button className='button' type="button" onClick={handleSave}>
                                OK
                            </button>
                        </div>
                    </>

                ) : (
                    <p id={`p-${props.label}`} onClick={handleClick}>
                        {value}
                    </p>
                )}
                <br />
            </div>
        </div>
    );
};

export default GenerateStr;
