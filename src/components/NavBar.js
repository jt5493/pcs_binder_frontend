import React from 'react';
import { Route, Link } from "react-router-dom";
import { Redirect } from "react-router-dom";


const NavBar = (props) => {


    return (
        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                    <header  className="navbar-brand" >PCS Binder</header>
                </div>
                <ul className="nav navbar-nav">
                    
                    <li><Link to={'/binders'}>All Binders</Link></li>
                    <li><Link to={'/binders/new'}>Create Binder</Link></li>
                </ul>
            </div>
        </nav>
    )

}

export default NavBar
