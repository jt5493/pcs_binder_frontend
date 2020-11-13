// data will be the state that is sent over from the form

export const addBinder = (data) => {
    
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/binders',{
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        
        .then(binder => dispatch({type: 'ADD_BINDER', payload: binder}))
    }
}