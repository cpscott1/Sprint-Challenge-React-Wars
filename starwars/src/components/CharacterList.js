import React from "react";

import Character from './Character';

export default function CharacterList(props) {
  return (
    <div className="character-list">
      {props.starwarsChars.map(character => {
        return (
          <Character character={character} />
        )
      })}
    </div>
  )
}
