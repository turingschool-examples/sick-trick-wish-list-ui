import "./Trick.css"


const Trick = ({stance, name, obstacle, tutorial, id}) => {
  return (
    <div className="trick">
      <p>{stance}: {name}</p>
      <p>{obstacle}</p>
      <p>{tutorial}</p>
    </div>
  )
}

export default Trick