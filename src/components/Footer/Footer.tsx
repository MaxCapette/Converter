import React, { useState } from 'react';

function Footer() {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
  };
  return (
    <div>
      <div>{counter}</div>
      <button type="button" onClick={handleClick}>
        +1
      </button>
    </div>
  );
}

export default Footer;
