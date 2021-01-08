import './SignOutLink.css'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {signout} from '../../../store/actions/authAction'
const SignOutLink =(props)=>{
    const handleClick = (e) =>{
        e.preventDefault();
        
        props.signout();
    }

    return(
        <ul className="signout-container">
            <li className="signout-element">
                <button onClick={handleClick}>Signout</button>
            </li>
        </ul>
    );
}
const mapDispatchToProps = (dispatch) =>{
    return {
        signout:() => dispatch(signout())
    };
}
export default connect(null,mapDispatchToProps)(SignOutLink);