export const signUp= (newUser) =>{
    return (dispatch ,getState,{getFirebase,getFirestore}) =>{
        console.log(newUser);
        const firebase= getFirebase();
        const firestore= getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
    ).then((res) => {
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
// export const signin=()=>{

// }
// export const signout=()=>{

// }