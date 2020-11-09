export function fetchBinders() {
    
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/binders')
        .then(r => r.json())
        .then(binders => dispatch({
            type: 'FETCH_BINDERS',
            payload: binders
        }))
    }

}