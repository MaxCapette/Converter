function Theme() {
  const handleClick = () => {
    console.log();
  };
  return (
    <button type="button" onClick={handleClick} className="theme">
      Theme
    </button>
  );
}
export default Theme;
