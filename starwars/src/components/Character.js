import React from "react";

export default function Character(props) {
  return (
    <div className="character">
      <h2>Name: {props.character.name}</h2>
      <p>Gender: {props.character.gender}</p>
      <p>Height: {props.character.height}</p>
    </div>
  )
}
