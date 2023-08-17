import logo from '../../assets/logo.svg';

import './Converter.scss';

import Header from '../Header/Header';
import Currencies from '../Currencies/Currencies';
import Amount from '../Amount/Amount';

function Converter() {
  return (
    <div className="Converter">
      <Header />
      <Currencies />
      <Amount />
    </div>
  );
}

export default Converter;
