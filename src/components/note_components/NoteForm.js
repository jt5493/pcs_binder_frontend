import React from 'react';
import { connect } from 'react-redux'
import { addNote } from "../../actions/note_actions/addNote";

class NoteForm extends React.Component {

    state = {title: '', content: ''}

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
            // (video 6): use the name attribute given to the input to assign a new value to the key that name equals
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault()
        
        this.props.addNote(this.state, this.props.binder.id)
        
        this.setState({title: '', content: ''})
    }


    render() {
        return(
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <label>Note Title: </label>
                    <input type='text' placeholder='Note Title' name="title" value={this.state.title} onChange={this.handleOnChange}/><br/>
                    <label>Note Content:</label>
                    <input type='text' placeholder='Note Content' name="content" value={this.state.content} onChange={this.handleOnChange}/><br/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default connect(null, {addNote})(NoteForm)