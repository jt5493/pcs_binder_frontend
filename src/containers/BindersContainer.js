import React from 'react';
import { connect } from 'react-redux'
import {fetchBinders}from '../actions/fetchBinders'
import BinderForm from '../components/BinderForm'
import BinderList from '../components/BinderList'

class BindersContainers extends React.Component {

    componentDidMount() {
        this.props.fetchBinders()
    }

    render() {
        return(
            <div>
                
                <BinderList binders={this.props.binders} />
                <BinderForm />
            </div>
        )
    }






}
const mapStateToProps = (state) => {
    return {
        binders: state.binders
    }
}

export default connect(mapStateToProps, {fetchBinders})(BindersContainers)