export default function binderReducer(state = {binders: []}, action) {
    debugger
    switch (action.type) {
        case 'FETCH_BINDERS': 
            return {
                binders: action.payload.data
            }
        case 'ADD_ACCOUNT':
            return {...state, binders: [...state.binders, action.payload]}    
            
    
        default:
            return state
    }

    
    


}