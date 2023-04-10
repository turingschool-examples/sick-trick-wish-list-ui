import React from "react";
import { formatData } from "../../utils/utils";
import "./Trick.css";

export const Trick = ({trick}) => {
  return (
    <div className="trick">
      <p className="trick-name">{trick.stance} {trick.name}</p>
      <p className="trick-obstacle">Obstacle: {trick.obstacle}</p>
      <p>Link to Tutorial</p>
      <a className="link" href={trick.tutorial}>{trick.tutorial}</a>
    </div>
  );
}