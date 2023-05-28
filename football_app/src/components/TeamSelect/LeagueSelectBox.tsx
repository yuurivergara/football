import React, { useState } from 'react';
import styles from './Select.module.css';

interface Option1 {
    league: { id: number, name: string, type:string, logo:string}, 

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
            <span>{selected ? selected.league.name : placeholder}</span>
            <span>v</span>
        </div>
        {showOptions && (
            <div className={styles['options']}>
            {options.map(option => (
                <div onClick={() => {
                    onChange(option);
                    setShowOptions(false);
                }} key={option.league.logo} className={styles['option']} >
                    <span>{option.league.name}</span>
                </div>
            ))}
        </div>
        )}
    </div>
    );
};