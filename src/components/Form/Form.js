import './Form.css';
import { useState } from 'react';

function Form({ addTrick }) {
  const [stance, setStance] = useState('');
  const [name, setName] = useState('');
  const [obstacle, setObstacle] = useState('');
  const [tutorial, setTutorial] = useState('');

  function handleClick(event) {
    event.preventDefault();
    const newTrick = {
      id: Date.now(),
      stance,
      name,
      obstacle,
      tutorial,
    };
    clearForm();
  }

  function clearForm() {
    setStance('choose-stance');
    setName('');
    setObstacle('choose-obstacle');
    setTutorial('');
  }

  return (
    <form>
      <label htmlFor="stance">
        <select
          name="stance"
          id="stance"
          onChange={(event) => setStance(event.target.value)}
        >
          <option value="choose-stance">Choose your Stance</option>
          <option value="regular">Regular</option>
          <option value="switch">Switch</option>
        </select>
      </label>
      <label htmlFor="name">
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          placeholder="Name of Trick"
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      <label htmlFor="obstacle">
        <select
          name="obstacle"
          id="obstacle"
          onChange={(event) => setObstacle(event.target.value)}
        >
          <option value="choose-obstacle">Choose your Obstacle</option>
          <option value="flatground">Flatground</option>
          <option value="ledge">Ledge</option>
          <option value="rail">Rail</option>
          <option value="stairs">Stairs</option>
          <option value="pool">Pool</option>
        </select>
      </label>
      <label htmlFor="tutorial">
        <input
          type="text"
          name="tutorial"
          id="tutorial"
          value={tutorial}
          placeholder="Link to Tutorial"
          onChange={(event) => setTutorial(event.target.value)}
        />
      </label>
      <button onClick={(event) => handleClick(event)}>Send it!</button>
    </form>
  );
}

export default Form;
