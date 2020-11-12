export const addDoc = (document, binderId) => {
    
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/binders/${binderId}/documents`,{
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(document)
        })
        .then(res => res.json())
        
        .then(binder => dispatch({type: 'ADD_DOC', payload: binder}))
    }
}