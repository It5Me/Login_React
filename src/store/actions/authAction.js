export const signup= (newUser) =>{
    return (dispatch ,getState,{getFirebase,getFirestore}) =>{
        console.log(newUser);
        const firebase= getFirebase();
        const firestore= getFirestore();
        console.log(firebase,firestore)
        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
    ).then((res) => {
        console.log(res)
        return firestore.collection('users').doc(res.user.uid).set({
            firstName:newUser.firstName,
            lastName: newUser.lastName
        })
    }).then(()=>{
        dispatch({type:'signup_success'})
    }).catch((error)=>{
        dispatch({type:'signup_failed',error})
    })
    
    }
}
export const signin=(cred)=>{
    return (dispatch,getState,{getFirebase}) =>{
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            cred.email,
            cred.password
        ).then (() => dispatch({type:'signin_success'}))
        .catch((error) => dispatch({type:'signin_failed',error}))
    }
}
export const signout=()=>{
    return (dispatch,getState,{getFirebase}) =>{
        const firebase = getFirebase();
        
        firebase.auth().signOut()
        .then (() => dispatch({type:'signout_success'}))
        .catch((error) => dispatch({type:'signout_failed',error}))
    }
}