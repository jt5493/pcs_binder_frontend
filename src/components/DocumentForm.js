import React from 'react';
import { connect } from 'react-redux'
import { addBinder } from "../actions/addBinder";

class DocumentForm extends React.Component {

    state = {title: ''}

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
            // (video 6): use the name attribute given to the input to assign a new value to the key that name equals
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault()
        
        this.props.addBinder(this.state)
        this.setState({title: ''})
    }


    render() {
        return(
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <label>Document Title: </label>
                    <input type='text' placeholder='Document Title' name="title" value={this.state.title} onChange={this.handleOnChange}/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default connect()(DocumentForm)