export const addNote = (note, binderId) => {
    
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/binders/${binderId}/notes`,{
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(note)
        })
        .then(res => res.json())
        
        .then(binder => dispatch({type: 'ADD_RESOURCE', payload: binder}))
    }
}