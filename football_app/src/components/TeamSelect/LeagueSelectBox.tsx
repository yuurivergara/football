import React, { useState } from 'react';
import styles from './Select.module.css';

interface Option1 {
    leaguename: string
    id?: BigInteger,
  }

interface SelectProps {
    placeholder?: string;
    options: Option1[];
    selected: Option1 | null;
    onChange: (selection: Option1) => void;
};

export const LeagueSelectBox: React.FC<SelectProps> = ({ placeholder, selected, options, onChange }) => {
    const [showOptions, setShowOptions] = useState(false);

    return (
        <div className={styles['select-component']}>
        <div onClick={() => setShowOptions(!showOptions)} className={styles['select']}>
            <span>{selected ? selected.leaguename : placeholder}</span>
            <span>v</span>
        </div>
        {showOptions && (
            <div className={styles['options']}>
            {options.map(option => (
                <div onClick={() => {
                    onChange(option);
                    setShowOptions(false);
                }} key={option.leaguename} className={styles['option']} >
                    <span>{option.leaguename}</span>
                </div>
            ))}
        </div>
        )}
    </div>
    );
};