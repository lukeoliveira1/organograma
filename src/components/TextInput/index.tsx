import React from 'react'

import './TextInput.css'

interface TextInputProps {
    changeInputValue: (value : string) => void;
    placeholder: string; 
    label: string;
    value: string;
    required?: boolean;
}

export const TextInput = ({ changeInputValue, placeholder, label, value, required = false } : TextInputProps) => {

    const changedPlaceholder = `${placeholder}...`

    const handleInput = (event : React.ChangeEvent<HTMLInputElement>) => {
        changeInputValue(event.target.value)
    }

    return(
        <div className="campo-texto">
            <label> {label} </label>
            <input 
              value={value}
              onChange={handleInput}
              required={required}
              type="text" 
              placeholder={changedPlaceholder}
            />
        </div>
    )
}
