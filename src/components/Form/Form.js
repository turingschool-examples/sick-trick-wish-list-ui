import { useState } from "react"

const Form = ({addTrick}) => {
  
  const [stance, setStance] = useState('')
  const [name, setName] = useState('')
  const [obstacle, setObstacle] = useState('')
  const [tutorial, setTutorial] = useState('')

  const sumbitTrick = (event) => {
    event.preventDefault()
    const newTrick = {
      stance,
      name,
      obstacle,
      tutorial
    }
    addTrick(newTrick)
    clearInputs()
  }

  const clearInputs = () => {
    setStance('')
    setName('')
    setObstacle('')
    setTutorial('')
  }



  return (

  )
}