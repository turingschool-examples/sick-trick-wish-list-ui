import Trick from "../Trick/Trick"

const TrickContainer = ({tricks}) => {
  const allTricks = tricks.map((trick) => {
    return <Trick
    stance={trick.stance}
    name={trick.name}
    obstacle={trick.obstacle}
    tutorial={trick.tutorial}
    key={trick.id}
    id={trick.id}
    />
  })

  return (
    <div className="trick-container">{allTricks}</div>
  )
}

export default TrickContainer