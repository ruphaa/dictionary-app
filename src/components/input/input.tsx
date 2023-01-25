import React, { useState, useEffect } from "react";
import { getWordDefinition } from "../../services/service";
import styles from "./input.module.css";


type InputProps = {
    value?: string,
    onChange?: (value: string) => void,
    placeholder?: string,
    decorator?: React.ReactNode,
}

export const Input = ({value: valueProp, onChange: onChangeProp, placeholder, decorator}: InputProps) => {
    const [ value, setValue ] = useState(valueProp);
    useEffect(() => {
        const getDefinition = value ? setTimeout(() => {
            getWordDefinition(value)
        }, 2000) : undefined;
        console.log('Definition', getDefinition)
    }, [value]);
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
        onChangeProp?.(event.target.value);
    }
    return (
        <div className={styles.inputContainer}>
            <input type="text" value={value} onChange={onChange} placeholder={placeholder}/>
            <h1>{value}</h1>
        </div>
    )
};
