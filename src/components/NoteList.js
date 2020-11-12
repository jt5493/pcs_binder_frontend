import React from 'react';
import Binder from "../components/BinderShow";
import { Route, Link } from "react-router-dom";

const NoteList = (props) => {
    

    return (
        <div>
            <h2>Notes:</h2>
            {props.notes && props.notes.map(note =>
                <li key={note.id}>{note.title}: {note.content}</li>
            )}
            
        </div>
    )



}

export default NoteList