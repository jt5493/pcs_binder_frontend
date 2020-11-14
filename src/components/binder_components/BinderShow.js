import React from 'react';
import DocumentsContainer from "../../containers/DocumentsContainer";
import LinksContainer from "../../containers/LinksContainer";
import NotesContainer from "../../containers/NotesContainer";

const Binder = (props) => {



   
    let binder = props.binders ? props.binders.find(b => b.id === props.match.params.id) : null

    
    return (
        <div>
            <h1>{binder ? binder.attributes.title : binder.title}</h1>
            <DocumentsContainer binder={binder ? binder : null} /> <br/>
            <LinksContainer binder={binder ? binder : null}/><br/>
            <NotesContainer binder={binder ? binder : null}/><br/>
        </div>
    )

}

export default Binder

