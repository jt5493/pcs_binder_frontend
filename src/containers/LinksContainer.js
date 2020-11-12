import React from 'react';
import { connect } from 'react-redux'
import { Route, Switch } from "react-router-dom";
import LinkForm from "../components/LinkForm";
import LinkList from "../components/LinkList";

class LinksContainer extends React.Component {



    render() {
        return (
            <div>
                <LinkForm binder={this.props.binder}/>
                <LinkList links={this.props.binder && this.props.binder.attributes.links}/>
            </div>
        )
    }


}
export default connect()(LinksContainer)