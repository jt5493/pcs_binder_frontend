import React from 'react';
import { connect } from 'react-redux';
import { deleteDoc } from "../../actions/doc_actions/deleteDoc";


const DocumentList = (props) => {
    
    const handleOnClick = (document) => {
        props.deleteDoc(document.id, document.binder_id)
    }


    return (
        <div>
            <h2>Documents:</h2>
            {props.documents && props.documents.map(document =>
                <li key={document.id}>
                    {document.title}: {document.doc_path}
                    <br/>
                    <button type="button" class="btn btn-danger" onClick={() => handleOnClick(document)}>
                        Delete
                    </button>
                </li>
            )}
            
        </div>
    )



}

export default connect(null, {deleteDoc})(DocumentList)