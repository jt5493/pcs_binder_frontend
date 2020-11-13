import React from 'react';
import Binder from "../binder_components/BinderShow";
import { Route, Link } from "react-router-dom";

const BinderList = (props) => {
    

    return (
        <div>
            {props.binders.map(binder => 
            <h2 key={binder.id}>
                <Link to={`/binders/${binder.id}`}>{binder.attributes.title}</Link>
            </h2>)}
            
        </div>
    )



}

export default BinderList

// {binder.title || binder.attributes.title}