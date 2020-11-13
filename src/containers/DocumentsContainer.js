import React from 'react';
import { connect } from 'react-redux'
import { Route, Switch } from "react-router-dom";
import DocumentForm from "../components/doc_components/DocumentForm";
import DocumentList from "../components/doc_components/DocumentList";

class DocumentsContainer extends React.Component {



    render() {
        return (
            <div>
                
                <DocumentList documents={this.props.binder && this.props.binder.attributes.documents}/><br/>
                <DocumentForm binder={this.props.binder}/>
            </div>
        )
    }


}
export default connect()(DocumentsContainer)