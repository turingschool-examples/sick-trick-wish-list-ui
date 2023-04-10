import { useState } from "react";
import "./Form.css";

const Form = ({ addTrick }) => {
  const [stance, setStance] = useState("");
  const [name, setName] = useState("");
  const [obstacle, setObstacle] = useState("");
  const [tutorial, setTutorial] = useState("");

  const submitTrick = (event) => {
    event.preventDefault();
    const newTrick = {
      stance,
      name,
      obstacle,
      tutorial,
    };
    addTrick(newTrick);
    clearInputs();
  };

  const clearInputs = () => {
    setStance("");
    setName("");
    setObstacle("");
    setTutorial("");
  };

  return (
    <form className="form">
      <label className="label">
        <select name="Choose Your Stance">
          <option value="" disabled selected>
            Choose Your Stance
          </option>
          <option value="Regular">Regular</option>
          <option value="Switch">Switch</option>
          onChange={(event) => setStance(event.target.value)}
        </select>
      </label>
      <input
        className="input"
        type="text"
        placeholder="Name of Trick"
        name="trick"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <label className="label">
        <select name="Choose Your Obstacle">
          <option value="" disabled selected>
            Choose Your Obstacle
          </option>
          <option value="Flatground">Flatground</option>
          <option value="Ledge">Ledge</option>
          <option value="Rail">Rail</option>
          <option value="Stairs">Stairs</option>
          <option value="Pool">Pool</option>
          onChange={(event) => setObstacle(event.target.value)}
        </select>
      </label>
      <input
        className="input"
        type="text"
        placeholder="Link to Tutorial"
        name="tutorial"
        value={tutorial}
        onChange={(event) => setTutorial(event.target.value)}
      />
      <button onClick={submitTrick} className="button">Send It!!</button>
    </form>
  );
};

export default Form;
