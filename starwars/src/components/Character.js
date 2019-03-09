import React from "react";

export default function Character(props) {
  return (
    <div className="character">
      <h2>{props.character.name}</h2>
      <p><strong>Gender:</strong> {props.character.gender}</p>
      <p><strong>Height:</strong> {props.character.height}</p>
    </div>
  )
}
