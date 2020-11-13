import React from 'react';
import { connect } from 'react-redux'
import { Route, Switch } from "react-router-dom";
import NoteForm from "../components/note_components/NoteForm";
import NoteList from "../components/note_components/NoteList";

class NotesContainer extends React.Component {



    render() {
        return (
            <div>
                
                <NoteList notes={this.props.binder && this.props.binder.attributes.notes}/><br/>
                <NoteForm binder={this.props.binder}/>
            </div>
        )
    }


}
export default connect()(NotesContainer)