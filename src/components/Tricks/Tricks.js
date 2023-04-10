import React from "react";
import "./Tricks.css";

export const Tricks = ({sickTricks}) => {
  const allTricks = sickTricks.map(trick => <Trick trick={trick}/>)
  return (
    <div className="tricks">

    </div>
  );
}