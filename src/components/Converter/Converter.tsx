import logo from '../../assets/logo.svg';

import './Converter.scss';

function Converter() {
  return (
    <div className="Converter">
      <header className="Converter-header">
        <img src={logo} className="Converter-logo" alt="logo" />

        <p>
          Edit <code>src/components/Converter/Converter.tsx</code> and save to
          reload.
        </p>

        <a
          className="Converter-link"
          href="https://react.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Converter;
