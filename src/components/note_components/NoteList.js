import React from 'react';
import { deleteNote } from "../../actions/note_actions/deleteNote";
import { connect } from 'react-redux';

const NoteList = (props) => {

    const handleOnClick = (note) => {
        props.deleteNote(note.id, note.binder_id)
    }
    

    return (
        <div>
            <h2>Notes:</h2>
            {props.notes && props.notes.map(note =>
                <li key={note.id}>
                    {note.title}: {note.content}
                    <br/>
                    <button type="button" class="btn btn-danger" onClick={() => handleOnClick(note)}>
                        Delete
                    </button>
                </li>
            )}
            
        </div>
    )



}

export default connect(null, {deleteNote})(NoteList)