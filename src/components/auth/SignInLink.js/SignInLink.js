import {NavLink} from 'react-router-dom'
import './SignInLink.css'
const SignInLink =()=>{
    return(
        <ul className="signup-container">
            <li className="signup-element">
                <NavLink to="/signup">Sign up</NavLink>
            </li>
            <li className="signin-element">
                <NavLink to="/signin">Sign in</NavLink>
            </li>
        </ul>
    );
}
export default SignInLink