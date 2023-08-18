// on importe la feuille de style propre au composant
// chaque composant doit etre indépendant donc il possede son propre style

import './Header.scss';

interface IHeaderProps {
  amount: number;
}

function Header({ amount }: IHeaderProps) {
  return (
    <header className="Header">
      <h1 className="Header-title">Converter</h1>
      {/* <input
        type="text"
        onChange={(event) => {
          const newValue = Number(event.target.value);
          if (!Number.isNaN(newValue)) {
            setInput(newValue);
          }
        }}
        value={amount}
      /> */}
      <span>{amount}€</span>
    </header>
  );
}

export default Header;
