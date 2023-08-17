// on importe la feuille de style propre au composant
// chaque composant doit etre indépendant donc il possede son propre style

import './Header.scss';

interface HeaderProps {
  amount: number;
}

function Header({ amount }: HeaderProps) {
  return (
    <header className="Header">
      <h1 className="Header_title">Converter</h1>
      <span>{amount}€</span>
    </header>
  );
}

export default Header;
