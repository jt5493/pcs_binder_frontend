import React from 'react';
import { connect } from 'react-redux'
import {fetchBinders}from '../actions/binder_actions/fetchBinders'
import BinderForm from '../components/binder_components/BinderForm'
import BinderList from '../components/binder_components/BinderList'
import { Route, Switch } from "react-router-dom";
import BinderShow from '../components/binder_components/BinderShow'

class BindersContainers extends React.Component {

    componentDidMount() {
        this.props.fetchBinders()
    }

    render() {
        return(
            <div>
                
                <Switch>
                    <Route path='/binders/new' component={BinderForm}/>
                    <Route path='/binders/:id' render={(routerProps) => <BinderShow {...routerProps} binders={this.props.binders}/>}/>
                    
                    <Route exact path='/binders' render={(routerProps) => <BinderList {...routerProps} binders={this.props.binders} />}/>
                </Switch>
            </div>
        )
    }
    // switch makes so you go to the first path the matches the params






}
const mapStateToProps = (state) => {
    
    return {
        binders: state.binders
    }
}

export default connect(mapStateToProps, {fetchBinders})(BindersContainers)