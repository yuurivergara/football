import React, { useState } from 'react';
import styles from './Select.module.css';




interface SelectProps {
    placeholder?: string;
    temp: number[];
    selected: number | null;
    onChange: (selection: number) => void;
    enable: string,
    
};

export const TempSelectBox: React.FC<SelectProps> = ({ placeholder, selected, temp, onChange,  enable}) => {
    const [showOptions, setShowOptions] = useState(false);
    

    return (
        <div className={styles['select-component']} style={{display:`${enable}`}}>
        <div onClick={() => setShowOptions(!showOptions)} className={styles['select']}>
            <span>{selected ? selected.toString(): placeholder}</span>
            <span>v</span>
        </div>
        {showOptions && (
            <div className={styles['options']}>
            {temp.map(option => (
                <div onClick={() => {
                    onChange(option);
                    setShowOptions(false);
                    
                }} key={option} className={styles['option']} >
                    <span>{option}</span>
                </div>
            ))}
        </div>
        )}
    </div>
    );
};