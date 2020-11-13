import React from 'react';
import { connect } from 'react-redux'
import { addLink } from "../../actions/link_actions/addLink";

class LinkForm extends React.Component {

    state = {title: '', url: ''}

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
            // (video 6): use the name attribute given to the input to assign a new value to the key that name equals
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault()
        
        this.props.addLink(this.state, this.props.binder.id)
        
        this.setState({title: '', url: ''})
    }


    render() {
        return(
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <label>Link Title: </label>
                    <input type='text' placeholder='Link Title' name="title" value={this.state.title} onChange={this.handleOnChange}/><br/>
                    <label>URL:</label>
                    <input type='text' placeholder='Paste URL' name="url" value={this.state.url} onChange={this.handleOnChange}/><br/>
                    <input type="submit" className="btn btn-success" value="Submit"/>
                </form>
            </div>
        )
    }
}

export default connect(null, {addLink})(LinkForm)