import React from 'react';
import { connect } from 'react-redux'
import { Route, Switch } from "react-router-dom";
import NoteForm from "../components/NoteForm";
import NoteList from "../components/NoteList";

class NotesContainer extends React.Component {



    render() {
        return (
            <div>
                <NoteForm binder={this.props.binder}/>
                <NoteList notes={this.props.binder && this.props.binder.attributes.notes}/>
            </div>
        )
    }


}
export default connect()(NotesContainer)