import * as React from "react";


type InputProps = {
    value?: string,
    onChange?: (value: string, event: React.ChangeEvent) => void,
    placeholder?: string,
    decorator?: React.ReactNode,
}

export const Input = (props: InputProps) => {
    return (
        <div>Input field</div>
    )
};
