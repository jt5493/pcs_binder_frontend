export default function binderReducer(state = {binders: []}, action) {
   
    switch (action.type) {
        case 'FETCH_BINDERS': 
            return {
                binders: action.payload.data
            }
        case 'ADD_BINDER':
            return {...state, binders: [...state.binders, action.payload]}  
            
        case 'ADD_DOC':
            let binders = state.binders.map(binder => {
                if (binder.id === action.payload.data.id) {
                   return action.payload.data
                } else {
                    return binder
                }
            })
            return {...state, binders: binders}
    
        default:
            return state
    }

    
    


}