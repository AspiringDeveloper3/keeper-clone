import React, { useState } from "react";
import Zoom from "@material-ui/core/Zoom";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

function CreateArea(props) {
  const [isWritingNote, setIsWriting] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function displayTitle() {
    setIsWriting(true);
  }

  return (
    <div>
      <form className="create-note">
        <input
          style={{ display: isWritingNote ? "" : "none" }}
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onClick={displayTitle}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isWritingNote ? "3" : "1"}
        />
        <Zoom in={isWritingNote}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
