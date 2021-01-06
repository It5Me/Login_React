import React from 'react';
import './Signin.css'
const Signin =() =>{
    return(
        <div className="Signin">
            <form>
            <h1 className="signin-topic">Sign In</h1>
            <ul className="signin-column">
            <li>
                <input className="Email" type="text" placeholder="Email"></input>
            </li> 
            <li>
                <input  className="password" type="password" placeholder="Password"></input>
            </li>
            <li>
                <button  className="button-signin" type="submit">Sign In</button>
            </li>
            </ul>
            </form>
        </div>
    );
}
export default Signin