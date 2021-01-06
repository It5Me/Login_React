const initstate={
    authError : null
}


const authReducer = (state=initstate,action)=>{
    switch (action.type){
        case 'signup_success':
            // object
            return  {
                ...state,
                authError: null
            }
        case 'signup_failed':
            console.log('signupfailed')
            return{
                ...state,
                authError:action.error.message
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
                authError:action.error.message
            }
        case 'signout_success':
            return{
                ...state,
                authError: null
            }
        case 'signout_failed':
            return{
                ...state,
                authError:action.error.message
            }
        
        default:
            return state;
            

    }
}
export default authReducer;