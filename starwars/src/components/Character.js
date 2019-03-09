import React from "react";

export default function Character(props) {
  return (
    <div className="character">
      <h2>{props.character.name}</h2>
      <p>{props.character.gender}</p>
    </div>
  )
}
