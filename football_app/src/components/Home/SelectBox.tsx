import React, { useState } from 'react';
import styles from './Select.module.css';

interface Option {
    name: string
    code?: string
    flag?: string
  }

interface SelectProps {
    placeholder?: string;
    options: Option[];
    selected: Option | null;
    onChange: (selection: Option) => void;
};

export const SelectBox: React.FC<SelectProps> = ({ placeholder, selected, options, onChange }) => {
    const [showOptions, setShowOptions] = useState(false);

    return (
        <div className={styles['select-component']}>
        <div onClick={() => setShowOptions(!showOptions)} className={styles['select']}>
            <span>{selected ? selected.name : placeholder}</span>
            <span>v</span>
        </div>
        {showOptions && (
            <div className={styles['options']}>
                {options.map(option => (
                    <div onClick={() => {
                        onChange(option);
                        setShowOptions(false);
                    }} key={option.name} className={styles['option']} >
                        <span>{option.name}</span>
                    </div>
                ))}
            </div>
        )}
    </div>
    );
};