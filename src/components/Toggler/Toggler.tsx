interface ITogglerProps {
  isCurrenciesVisible: boolean;
  setIsCurrenciesVisible: React.Dispatch<React.SetStateAction<boolean>>;
}
function Toggler({
  isCurrenciesVisible,
  setIsCurrenciesVisible,
}: ITogglerProps) {
  const handleClick = () => {
    setIsCurrenciesVisible(!isCurrenciesVisible);
  };
  return (
    <button className="toggler" type="button" onClick={handleClick}>
      {isCurrenciesVisible ? 'Hide' : 'Show'} currencies
    </button>
  );
}
export default Toggler;
