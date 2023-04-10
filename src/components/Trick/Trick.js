import "./Trick.css"


const Trick = ({stance, name, obstacle, tutorial, id}) => {
  return (
    <div className="trick">
      <p>{stance}: {name}</p>
      <p>{obstacle}</p>
      <a href={tutorial}>{tutorial}</a>
    </div>
  )
}

export default Trick