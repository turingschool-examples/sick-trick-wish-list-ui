import './TrickCard.css';

const TrickCard = ({name, obstacle, stance, tutorial}) => {
  return (
    <>
      <h2>{name}</h2>
      <p>{obstacle}</p>
      <p>{stance}</p>
      <a href={tutorial}>{tutorial}</a>
    </>
  );
};

export default TrickCard;