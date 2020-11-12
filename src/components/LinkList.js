import React from 'react';
import Binder from "../components/BinderShow";
import { Route, Link } from "react-router-dom";

const LinkList = (props) => {
    

    return (
        <div>
            <h2>Links:</h2>
            {props.links && props.links.map(link =>
                <li key={link.id}>{link.title}: {link.url}</li>
            )}
            
        </div>
    )



}

export default LinkList