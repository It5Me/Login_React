import React ,{useState}from 'react';
import './Signin.css'
import {signin} from '../../../store/actions/authAction'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux';
const Signin =(props) =>{
    const [email,setEmail]= useState('');
    const [password,setPassword]= useState('');


    const handleSubmit = (e) =>{
        e.preventDefault();
        // console.log(email,password)
        props.signin({email,password});
    }
    const handleChange = (e) =>{
        let field = e.target.id;
        switch(field){
            case 'email':
                setEmail(e.target.value);
                return;
            case 'password':
                setPassword(e.target.value);
                return;
            default:
                return;
        }
    }
    if (props.auth.uid) return <Redirect to="/"/>
    return(
        <div className="Signin">
            <form onSubmit={handleSubmit}>
            <h1 className="signin-topic">Sign In</h1>
            <ul className="signin-column">
            <li>
                <input  id ="email"className="Email" type="text" placeholder="Email" onChange={handleChange}></input>
            </li> 
            <li>
                <input id="password" className="password" type="password" placeholder="Password" onChange={handleChange}></input>
                {props.authError ?<p className="error-msg">{props.authError}</p> : null}
            </li>
            <li>
                <button  className="button-signin" type="submit">Sign In</button>
            </li>
            </ul>
            </form>
        </div>
    );
}
const mapStateToProps = (state) =>{
    return{
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        signin : (cred) => dispatch(signin(cred))
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(Signin)