export const deleteLink = (linkId, binderId) => {
    
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/binders/${binderId}/links/${linkId}`,{
            
            method: 'DELETE'
        })
        .then(res => res.json())
        
        .then(binder => dispatch({type: 'DELETE_RESOURCE', payload: binder}))
    }
}