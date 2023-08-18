// on importe la feuille de style propre au composant
// chaque composant doit etre indépendant donc il possede son propre style
import React, { useState } from 'react';
import './Header.scss';

interface IHeaderProps {
  amount: number;
  setNbInput: React.Dispatch<React.SetStateAction<number>>;
}

function Header({ amount, setNbInput }: IHeaderProps) {
  const [inputError, setInputError] = useState(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const newValue = Number(value);
    if (!Number.isNaN(newValue) || value === '') {
      setInputError(false);
      setNbInput(newValue);
    } else {
      setInputError(true);
    }
  };
  return (
    <header className="Header">
      <h1 className="Header-title">Converter</h1>
      <input
        type="text"
        className={inputError ? 'error' : ''}
        onChange={handleChange}
        value={amount}
        placeholder="Enter the amount"
      />
      {inputError && (
        <div className="error-message">Please enter a valid number.</div>
      )}
    </header>
  );
}

export default Header;
