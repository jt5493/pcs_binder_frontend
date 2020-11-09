import React from 'react';

const BinderList = (props) => {
    

    return (
        <div>
            {props.binders.map(binder => <h2 key={binder.id}>{binder.attributes.title}</h2>)}
            
        </div>
    )



}

export default BinderList