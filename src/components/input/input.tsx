import React, { useState } from "react";
import styles from "./input.module.css";

type InputProps = {
    value?: string,
    onChange?: (value: string) => void,
    onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void,
    placeholder?: string,
    decorator?: React.ReactNode,
    error?: boolean,
    errorMessage?: string,
}

export const Input = ({value: valueProp, onChange: onChangeProp, placeholder, decorator, onKeyDown: onKeyDownProp, error, errorMessage }: InputProps) => {
    const [ value, setValue ] = useState(valueProp);
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
        onChangeProp?.(event.target.value);
    }

    return (
        <>
        <div className={`${styles.inputContainer} ${error ? styles.inputError : ""}`}>
            <input 
                type="text" 
                value={value} 
                onChange={onChange} 
                placeholder={placeholder} 
                onKeyDown={(event) => onKeyDownProp?.(event)}
            />
            {
                decorator 
                ? <span className={styles.decorator}>{decorator}</span>
                : null
            }
        </div>
        {
            errorMessage ? <span className={styles.error}>{errorMessage}</span> : null
        }
        </>
    )
};
