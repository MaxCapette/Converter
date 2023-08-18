import { useState } from 'react';

interface ICounterProps {
  nbClicks: number;
  setNbClicks: React.Dispatch<React.SetStateAction<number>>;
}
function Footer({ nbClicks, setNbClicks }: ICounterProps) {
  const [input, setInput] = useState('');
  const handleClick = () => {
    setNbClicks(nbClicks + 1);
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };
  return (
    <div>
      <input type="number" onChange={handleChange} value={input} />
      <div>{nbClicks}</div>
      <button type="button" onClick={handleClick}>
        +1
      </button>
    </div>
  );
}

export default Footer;
