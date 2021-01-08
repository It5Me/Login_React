import React from 'react'
import './Home.css'
import {connect} from 'react-redux'

const Home = (props) =>{
    return(
        
        <div className="Home">
            <h1>{props.auth.uid ? "Welcom" : "You must log in to see this page" }</h1>
        </div>
    )
    
}
const mapStateToProps = (state) =>{
    console.log(state)
    return{
        auth: state.firebase.auth,
    }
}
// const mapDispatchToProps = (dispatch) =>{
//     return {
//         signin : (cred) => dispatch(signin(cred))
//     };
// }

export default connect(mapStateToProps,null)(Home)
