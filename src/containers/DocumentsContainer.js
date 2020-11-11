import React from 'react';
import { connect } from 'react-redux'
import { Route, Switch } from "react-router-dom";

class DocumentsContainer extends React.Component {



    render() {
        return (
            <div>
                documents
            </div>
        )
    }


}
export default connect()(DocumentsContainer)