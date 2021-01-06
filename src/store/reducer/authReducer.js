const initstate={
    authError : null
}


const authReducer = (state=initstate,actions)=>{
    switch (actions.type){
        case 'signup_success':
            // object
            return  {
                ...state,
                authError: null
            }
        case 'signup_failed':
            return{
                ...state,
                authError:action.err.message
            }
        case 'signin_success':
            // object
            return  {
                ...state,
                authError: null
            }
        case 'signin_failed':
            return{
                ...state,
                authError:action.err.message
            }
        case 'signout_success':
            return{
                ...state,
                authError: null
            }
        case 'signout_failed':
            return{
                ...state,
                authError:action.err.message
            }
        
        default:
            return state;
            

    }
}
export default authReducer;