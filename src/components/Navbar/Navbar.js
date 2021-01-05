import React from 'react'
import './Navbar.css'

const Navbar =() =>{
    const NavbarSelect =() =>{
        
    }
    return(
        <nav className="NavbarAll">
            <h3 className="nav-logo">It'S ME</h3>
            <ul className="nav-select">
                {NavbarSelect.map((item,index) =>{
                    return <li> <a className={}></a></li>
                }
                )}
            </ul>
        </nav>
    )
}
export default Navbar


