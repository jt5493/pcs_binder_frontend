import React from 'react';
import { Redirect } from "react-router-dom";

const Binder = (props) => {



   
    let binder = props.binders.find(b => b.id === props.match.params.id)


    return (
        <div>

            {binder ? binder.attributes.title : null}
        </div>
    )

}

export default Binder

