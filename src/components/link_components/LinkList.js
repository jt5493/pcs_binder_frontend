import React from 'react';
import { connect } from 'react-redux';
import { deleteLink } from "../../actions/link_actions/deleteLink";

const LinkList = (props) => {

    const handleOnClick = (link) => {
        props.deleteLink(link.id, link.binder_id)
    }
    

    return (
        <div>
            <h2>Links:</h2>
            {props.links && props.links.map(link =>
                <li key={link.id}>
                    {link.title}: {link.url}
                    <br/>
                    <button type="button" className="btn btn-danger" onClick={() => handleOnClick(link)}>
                        Delete
                    </button>
                </li>
            )}
            
        </div>
    )



}

export default connect(null, {deleteLink})(LinkList)