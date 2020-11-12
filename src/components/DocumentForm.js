import React from 'react';
import { connect } from 'react-redux'
import { addDoc } from "../actions/addDoc";

class DocumentForm extends React.Component {

    state = {title: '', doc_path: ''}

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
            // (video 6): use the name attribute given to the input to assign a new value to the key that name equals
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault()
        
        this.props.addDoc(this.state, this.props.binder.id)
        
        this.setState({title: '', doc_path: ''})
    }


    render() {
        return(
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <label>Document Title: </label>
                    <input type='text' placeholder='Document Title' name="title" value={this.state.title} onChange={this.handleOnChange}/><br/>
                    <label>Document Path:</label>
                    <input type='text' placeholder='Paste Document Path' name="doc_path" value={this.state.doc_path} onChange={this.handleOnChange}/><br/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default connect(null, {addDoc})(DocumentForm)