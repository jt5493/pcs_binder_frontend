import React from 'react';
import { connect } from 'react-redux'
import { addBinder } from "../../actions/binder_actions/addBinder";
import { withRouter } from 'react-router-dom';

class BinderForm extends React.Component {

    state = {title: ''}

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
            //  use the name attribute given to the input to assign a new value to the key that name equals
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault()
        
        this.props.addBinder(this.state)
        this.setState({title: ''})
        this.props.history.push('/binders')
    }


    render() {
        return(
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <label>Binder Title: </label>
                    <input type='text' placeholder='Binder Title' name="title" value={this.state.title} onChange={this.handleOnChange}/>
                    <input type="submit" className="btn btn-success" />
                </form>
            </div>
        )
    }
}

export default withRouter(connect(null, {addBinder})(BinderForm))
