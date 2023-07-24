import './TrickCard.css';

const TrickCard = ({name, obstacle, stance, tutorial}) => {
  return (
    <div className='card-container'>
      <h2>{name}</h2>
      <p>{obstacle}</p>
      <p>{stance}</p>
      <a href={tutorial}>{tutorial}</a>
    </div>
  );
};

export default TrickCard;