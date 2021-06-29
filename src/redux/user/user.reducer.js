const INITAIALSTATE = {
    currentUser : null
}
const userReducer = (state=INITAIALSTATE, action)=> {
    switch (action.type){
        case 'SET_CURRENT_USER':
            return{
                ...state,
                currentUser : action.payload
            }
        default:
            return state
    }
}

export default userReducer