import React from 'react';
import { connect } from 'react-redux'
import { Route, Switch } from "react-router-dom";
import DocumentForm from "../components/DocumentForm";
import DocumentList from "../components/DocumentList";

class DocumentsContainer extends React.Component {



    render() {
        return (
            <div>
                <DocumentForm binder={this.props.binder}/>
                <DocumentList documents={this.props.binder && this.props.binder.attributes.documents}/>
            </div>
        )
    }


}
export default connect()(DocumentsContainer)