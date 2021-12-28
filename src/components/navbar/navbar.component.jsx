

import React, { useEffect } from "react";
import AppLogo from "../appLogo/applogo.component";
import { NavLink} from "./navbar.styles";
import './navbar.styles.scss'


const Navbar = ()=>{

    const handleScroll = ()=>{
        window.scrollY > 20 ?
        document.querySelector('.navContainer').classList.add('navContainer_scrolled'):
        document.querySelector('.navContainer').classList.remove('navContainer_scrolled')        
    }

    useEffect(()=>{
        window.addEventListener('scroll', handleScroll)
    })

    const scrollToRecomended = (e)=>{
        e.preventDefault()
        window.scrollTo({
            top: window.innerHeight-100,
            behavior:'smooth'
        })
    }

return(
        <div className="navContainer">
            <div className="applogo">
                <AppLogo></AppLogo>
            </div>
            <div className="navlinks">
                <NavLink to={'/'}> Home </NavLink>
                <NavLink to={'/'} onClick={scrollToRecomended}> Recommended </NavLink>
                <NavLink to={'/'}> Must Visit </NavLink>
                <NavLink to={'/'}> Gallary </NavLink>
                <NavLink to={'/'}> About </NavLink>
            </div>
        </div>
    )
}



export default Navbar