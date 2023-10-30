import './Card.css';

function Card({ stance, name, obstacle, tutorial, id }) {
    return (
        <div className="card">
            <p>{stance} {name}</p>
            <p>Obstacle: {obstacle}</p>
            <p>Link to Tutorial:</p>
            <p><a href="{tutorial}">{tutorial}</a></p>
        </div>
    )
}

export default Card;