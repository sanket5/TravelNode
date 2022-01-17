

import React, { useEffect, useState } from "react";
import AppLogo from "../appLogo/applogo.component";
import { NavLink} from "./navbar.styles";
import './navbar.styles.scss'


const Navbar = ()=>{
    const [showNav, setShowNav] = useState(false);
    const isMobile = window.innerWidth>600 ? false:true

    const handleScroll = ()=>{
        window.scrollY > 20 ?
        document.querySelector('.navContainer').classList.add('navContainer_scrolled'):
        document.querySelector('.navContainer').classList.remove('navContainer_scrolled')        
    }

    useEffect(()=>{
        window.addEventListener('scroll', handleScroll)
    },[showNav])

    const scrollToRecomended = (e)=>{
        e.preventDefault()
        window.scrollTo({
            top: window.innerHeight-100,
            behavior:'smooth'
        })
    }

    const toggleNav = ()=> setShowNav(!showNav)

return(
        <div className="navContainer">
            <div className="applogo">
                <AppLogo></AppLogo>
            </div>
            <i className={showNav?"fa fa-times fa-3x":"fa fa-bars fa-3x"} aria-hidden="true" onClick={()=> setShowNav(!showNav)} ></i>
            <div className={(!showNav && isMobile)?"navlinks_hide":"navlinks"}>
                <NavLink to={'/'} onClick={()=>{ toggleNav() }}> Home </NavLink>
                <NavLink to={'/'} onClick={(e)=>{ scrollToRecomended(e); toggleNav(); }}> Recommended </NavLink>
                <NavLink to={'/'} onClick={()=>{ toggleNav() }}> Must Visit </NavLink>
                <NavLink to={'/'} onClick={()=>{ toggleNav() }}> Gallary </NavLink>
                <NavLink to={'/'} onClick={()=>{ toggleNav() }}> About </NavLink>
            </div>
        </div>
    )
}



export default Navbar