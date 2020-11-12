import React from 'react';

import { Route, Link } from "react-router-dom";

const DocumentList = (props) => {
    

    return (
        <div>
            <h2>Documents:</h2>
            {props.documents && props.documents.map(document =>
                <li key={document.id}>{document.title}: {document.doc_path}</li>
            )}
            
        </div>
    )



}

export default DocumentList