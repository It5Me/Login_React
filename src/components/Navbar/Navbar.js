import React from 'react'
import './Navbar.css'

const Navbar =() =>{
    const NavbarLogin =[
        {
            title:'SIGN IN',
            url: '/signin',
            className: 'nav-login-signin'
        },
        {
            title: 'SIGN UP',
            url: '/signup',
            className: 'nav-login-signup'
        }
    ];
    return(  
        <nav className="NavbarAll">
            <h3 className="nav-logo">It'S ME</h3>
            <ul className="nav-login">
                {NavbarLogin.map((item,index) =>{
                    return <li className="nav-login-sign"><a className={item.className} href={item.url}>{item.title}</a></li>
                }
                )}
            </ul>
            {/* <ul className="nav-items">
                {Navbaritems.map((item,index)=>{
                    return <li className="nav-items-each"<a classNAme{}></a>
                })}

            </ul> */}
            
        </nav>
    )
}
export default Navbar;


