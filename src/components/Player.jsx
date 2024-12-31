import { useState } from "react"

export default function Player( {initialName, symbol}) {
  const [ playerNAme, setPlayerName ] = useState(initialName);
  const [ isEditing, setIsEditing ] = useState(false);

  function handleEdit() {
    setIsEditing(isEditing => !isEditing);
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerNAme}</span>;
  let btnCaption = "Edit";

  if (isEditing) {
    editablePlayerName = <input type="text" required value={playerNAme} onChange={handleChange} />;
    btnCaption = "Save";
  }

  return <li>
      <span className="player">
      {editablePlayerName}
      <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
  </li>
  }