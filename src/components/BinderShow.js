import React from 'react';
import { Redirect } from "react-router-dom";
import DocumentsContainer from "../containers/DocumentsContainer";
import LinksContainer from "../containers/LinksContainer";
import NotesContainer from "../containers/NotesContainer";

const Binder = (props) => {



   
    let binder = props.binders.find(b => b.id === props.match.params.id)


    return (
        <div>
            <h1>{binder ? binder.attributes.title : null}</h1>
            <DocumentsContainer />
            <LinksContainer />
            <NotesContainer />
        </div>
    )

}

export default Binder

