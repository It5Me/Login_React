import React from 'react'
import {connect} from 'react-redux';
import SignInLink from '../auth/SignInLink.js/SignInLink';
import SignOutLink from '../auth/SignOutLink/SignOutLink';
import './Navbar.css'

const Navbar =(props) =>{
    const {auth}= props
    return(  
        <nav className="NavbarAll">
            <h3 className="nav-logo">It'S ME</h3>
            {auth.uid ? <SignOutLink/> : <SignInLink/>}
        </nav>
    )
}
const mapStateToProps = state => {
    return{
        auth: state.firebase.auth,
        authError: state.auth.authError
    };
}
export default connect(mapStateToProps,null)(Navbar);


