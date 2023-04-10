import React from "react";
import { Trick } from "../Trick/Trick";
import "./Tricks.css";

export const Tricks = ({allTricks}) => {
  // console.log('sick', allTricks)
  const tricks = allTricks.map(trick => <Trick key={trick.name} trick={trick}/>)
  return (
    <div className="tricks">
      {tricks}
    </div>
  );
}