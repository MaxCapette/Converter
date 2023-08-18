import './Footer.scss';

interface ICounterProps {
  nbClicks: number;
  setNbClicks: React.Dispatch<React.SetStateAction<number>>;
}
function Footer({ nbClicks, setNbClicks }: ICounterProps) {
  const handleClick = () => {
    setNbClicks(nbClicks + 1);
  };

  return (
    <div className="footer">
      <input
        type="text"
        onChange={(event) => {
          const newValue = Number(event.target.value);
          if (!Number.isNaN(newValue)) {
            setNbClicks(newValue);
          }
        }}
        value={nbClicks}
      />
      <div>{nbClicks} ❤️</div>
      <button type="button" onClick={handleClick}>
        +1
      </button>
    </div>
  );
}

export default Footer;
