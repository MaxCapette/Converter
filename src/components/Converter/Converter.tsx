import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Converter.scss';

import Header from '../Header/Header';
import Toggler from '../Toggler/Toggler';
import Currencies from '../Currencies/Currencies';
import Amount from '../Amount/Amount';
import Footer from '../Footer/Footer';
import currenciesData from '../../data/currencies';
import { ICurrency } from '../../@types/converter';

function Converter() {
  const [isCurrenciesVisible, setIsCurrenciesVisible] = useState(true);
  const [nbClicks, setNbClicks] = useState(0);
  const [amount, setAmount] = useState(1);
  const [currencies, setCurrencies] = useState([]);
  const [currency, setCurrency] = useState<null | ICurrency>(null);
  const [total, setTotal] = useState(0);
  const [currentTheme, setCurrentTheme] = useState();

  useEffect(
    // la callback avec le code a executer
    () => {
      // eslint-disable-next-line
      console.log('changement de titre');
      if (currency) {
        document.title = `convert to ${currency.description}`;
      }
      // si currency.description n'a pas changé ça sert à rien de jouer la callback
    },
    // le tableau qui dit quand executer la callback
    // avec le tableau contenant currency on précise que la callback est executée que si currency change
    [currency]
  );

  useEffect(() => {
    const asynRequest = async () => {
      // appel avec axios et async await
      try {
        const result = await axios.get('https://api.exchangerate.host/symbols');
        setCurrencies(Object.values(result.data.symbols));
      } catch (e) {
        // eslint-disable-next-line
        console.log('ERREUR de requete');
      }
    };

    asynRequest();
  }, []);

  useEffect(() => {
    const getResultFromAPI = async () => {
      if (currency) {
        const result = await axios.get(
          `https://api.exchangerate.host/convert?from=EUR&to=${currency?.code}&amount=${amount}`
        );
        // on met dans le state le result pour que Amount puisse s'en servir
        setTotal(result.data.result);
      }
    };
    getResultFromAPI();
  }, [amount, currency]);

  return (
    <div className="converter">
      <Header amount={amount} setAmount={setAmount} />
      <Toggler
        isCurrenciesVisible={isCurrenciesVisible}
        setIsCurrenciesVisible={setIsCurrenciesVisible}
      />
      {isCurrenciesVisible && (
        <Currencies list={currencies} setCurrency={setCurrency} />
      )}
      <Amount result={total} currentCurrency={currency} />
      <Footer nbClicks={nbClicks} setNbClicks={setNbClicks} />
    </div>
  );
}

export default Converter;
