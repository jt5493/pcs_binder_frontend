import React from 'react';
import { connect } from 'react-redux'
import { Route, Switch } from "react-router-dom";

class NotesContainer extends React.Component {



    render() {
        return (
            <div>
                notes
            </div>
        )
    }


}
export default connect()(NotesContainer)