export const deleteDoc = (documentId, binderId) => {
    
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/binders/${binderId}/documents/${documentId}`,{
            
            method: 'DELETE'
        })
        .then(res => res.json())
        
        .then(binder => dispatch({type: 'DELETE_RESOURCE', payload: binder}))
    }
}