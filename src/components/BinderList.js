import React from 'react';

const BinderList = (props) => {
    

    return (
        <div>
            {props.binders.map(binder => <li key={binder.id}>{binder.attributes.title}</li>)}
            
        </div>
    )



}

export default BinderList