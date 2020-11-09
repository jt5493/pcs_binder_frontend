import React from 'react';
import { connect } from 'react-redux'
import { addBinder } from "../actions/addBinder";

class BinderForm extends React.Component {

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
    }


    render() {
        return(
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <label>Binder Title: </label>
                    <input type='text' placeholder='Binder Title' name="title" value={this.state.title} onChange={this.handleOnChange}/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default connect(null, {addBinder})(BinderForm)