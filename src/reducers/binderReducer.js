export default function binderReducer(state = {binders: []}, action) {

    switch (action.type) {
        case 'FETCH_BINDERS': 
            return {
                binders: action.payload.data
            }
            
            
    
        default:
            return state
    }

    
    


}