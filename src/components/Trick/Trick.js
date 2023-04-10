import "./Trick.css"


const Trick = ({stance, name, obstacle, tutorial, id}) => {
  return (
    <div className="trick">
      <p>{stance}: {name}</p>
      <p>Obstacle: {obstacle}</p>
      <p>Link to Tutorial</p>
      <a href={tutorial}>{tutorial}</a>
    </div>
  )
}

export default Trick