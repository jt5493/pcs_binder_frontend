import React from 'react';
import { connect } from 'react-redux'
import { Route, Switch } from "react-router-dom";
import LinkForm from "../components/link_components/LinkForm";
import LinkList from "../components/link_components/LinkList";

class LinksContainer extends React.Component {



    render() {
        return (
            <div>
                
                <LinkList links={this.props.binder && this.props.binder.attributes.links}/><br/>
                <LinkForm binder={this.props.binder}/>
            </div>
        )
    }


}
export default connect()(LinksContainer)