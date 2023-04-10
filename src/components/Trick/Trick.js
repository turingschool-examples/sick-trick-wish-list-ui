import "./Trick.css"


const Trick = ({stance, name, obstacle, tutorial, id}) => {
  return (
    <div className="trick">
      <p>{stance}</p>
      <p>{name}</p>
      <p>{obstacle}</p>
      <p>{tutorial}</p>
    </div>
  )
}

export default Trick