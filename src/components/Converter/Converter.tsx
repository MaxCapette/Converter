import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Converter.scss';

import Header from '../Header/Header';
import Toggler from '../Toggler/Toggler';
import Currencies from '../Currencies/Currencies';
import Amount from '../Amount/Amount';
import Footer from '../Footer/Footer';
import currenciesData from '../../data/currencies';

function Converter() {
  const [isCurrenciesVisible, setIsCurrenciesVisible] = useState(true);
  const [nbClicks, setNbClicks] = useState(0);
  const [amount, setAmount] = useState(1);
  const [currencies, setCurrencies] = useState([]);
  const [currency, setCurrency] = useState(currenciesData[1]);
  const [currentTheme, setCurrentTheme] = useState();

  useEffect(
    // la callback executée àpres la premier rendu uniquement
    () => {
      axios
        .get('https://api.exchangerate.host/symbols')
        .then((result) => {
          setCurrencies(Object.values(result.data.symbols));
        })
        .catch((error) => {
          // JS passe ici si le traitement long (axios.get) s'est MAL passé

          console.log('ERREUR de requete');
          // ici on peut afficher une erreur dans notre composant
        });
    },
    // tableau vide pour executer la callback uniquement après le premier rendu
    []
  );

  useEffect(() => {
    document.title = currency.description;
  }, [currency]);

  const makeConversion = () => {
    if (currency) {
      return amount * currency.rate;
    }
    return 0;
  };

  return (
    <div className="Converter">
      <Header amount={amount} setAmount={setAmount} />
      <Toggler
        isCurrenciesVisible={isCurrenciesVisible}
        setIsCurrenciesVisible={setIsCurrenciesVisible}
      />
      {isCurrenciesVisible && (
        <Currencies currencies={currencies} setCurrency={setCurrency} />
      )}
      <Amount result={makeConversion()} currency={currency} />
      <Footer nbClicks={nbClicks} setNbClicks={setNbClicks} />
    </div>
  );
}

export default Converter;
