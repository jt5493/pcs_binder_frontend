import React from 'react';
import { Link } from "react-router-dom";

const BinderList = (props) => {
    

    return (
        <div>
            {props.binders.map(binder => 
            <h2 key={binder.data ? binder.data.id : binder.id}>
                <Link to={`/binders/${binder.id}`}>{binder.data ? binder.data.attributes.title : binder.attributes.title }</Link>
            </h2>)}
            
        </div>
    )


    
}

export default BinderList

