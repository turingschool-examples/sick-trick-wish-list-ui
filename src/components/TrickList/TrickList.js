import './TrickList.css';
import TrickCard from '../TrickCard/TrickCard';

const TrickList = ({ savedTricks, isLoading }) => {
    if(savedTricks) {
      const tricks = savedTricks.map(trick => {
        const {id, name, obstacle, stance, tutorial } = trick;
        return (
          <article className='trick-list-container' key={id}>
            <TrickCard name={name} obstacle={obstacle} stance={stance} tutorial={tutorial} />
          </article>
        );
      }); 
  
    return (
      <>
        {tricks}
      </>
    )  
    }
};

export default TrickList;