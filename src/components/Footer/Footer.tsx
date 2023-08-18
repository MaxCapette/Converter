interface ICounterProps {
  nbClicks: number;
  setNbClicks: React.Dispatch<React.SetStateAction<number>>;
}
function Footer({ nbClicks, setNbClicks }: ICounterProps) {
  const handleClick = () => {
    setNbClicks(nbClicks + 1);
  };
  return (
    <div>
      <div>{nbClicks}</div>
      <button type="button" onClick={handleClick}>
        +1
      </button>
    </div>
  );
}

export default Footer;
