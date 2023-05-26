import React, { useState } from 'react';
import styles from './Select.module.css';

interface Option2 {
    ano: string
  }

interface SelectProps {
    placeholder?: string;
    temp: Option2[];
    selected: Option2 | null;
    onChange: (selection: Option2) => void;
};

export const TempSelectBox: React.FC<SelectProps> = ({ placeholder, selected, temp, onChange }) => {
    const [showOptions, setShowOptions] = useState(false);

    return (
        <div className={styles['select-component']}>
        <div onClick={() => setShowOptions(!showOptions)} className={styles['select']}>
            <span>{selected ? selected.ano : placeholder}</span>
            <span>v</span>
        </div>
        {showOptions && (
            <div className={styles['options']}>
            {temp.map(option => (
                <div onClick={() => {
                    onChange(option);
                    setShowOptions(false);
                }} key={option.ano} className={styles['option']} >
                    <span>{option.ano}</span>
                </div>
            ))}
        </div>
        )}
    </div>
    );
};