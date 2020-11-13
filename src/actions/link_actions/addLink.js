export const addLink = (link, binderId) => {
    
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/binders/${binderId}/links`,{
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(link)
        })
        .then(res => res.json())
        
        .then(binder => dispatch({type: 'ADD_RESOURCE', payload: binder}))
    }
}