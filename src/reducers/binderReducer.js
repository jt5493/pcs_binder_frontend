export default function binderReducer(state = {binders: []}, action) {
   
    switch (action.type) {
        case 'FETCH_BINDERS': 
            return {
                binders: action.payload.data
            }
        case 'ADD_BINDER':
            return {...state, binders: [...state.binders, action.payload]}    
            
    
        default:
            return state
    }

    
    


}