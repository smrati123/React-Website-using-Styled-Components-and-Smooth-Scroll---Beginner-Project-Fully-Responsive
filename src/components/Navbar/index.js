import React,{useState,useEffect} from 'react';
import {Nav,NavbarContainer,NavLogo,MobileIcon,
    NavMenu,NavItem,NavLinlks,NavBtn,NavBtnLink} from './NavbarElements';
import {FaBars} from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';

const Navbar = ({toggle}) => {
    const[scrollNav,setScrollNav] = useState(false)

    const changeNav = () =>{
        if(window.scrollY>=80){
            setScrollNav(true)
        } else{
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll',changeNav)
    },[]);

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
       <>
       <IconContext.Provider value={{color:'#fff'}}>
           <Nav scrollNav={scrollNav}>
               <NavbarContainer>
                   <NavLogo to='/' onClick={toggleHome}> Website  </NavLogo> 
                   <MobileIcon onClick ={toggle}>
                       <FaBars/>
                   </MobileIcon>
                   <NavMenu>
                       <NavItem>
                           <NavLinlks to= "about">About</NavLinlks>
                       </NavItem>
                       <NavItem>
                           <NavLinlks to= "discover">Discover</NavLinlks>
                       </NavItem>
                       <NavItem>
                           <NavLinlks to= "services">Services</NavLinlks>
                       </NavItem>
                       <NavItem>
                           <NavLinlks to= "signup">Sign Up</NavLinlks>
                       </NavItem>
                   </NavMenu> 
                    <NavBtn>
                        <NavBtnLink to = "/signIn">Sign In</NavBtnLink>
                    </NavBtn>               
               </NavbarContainer>
           </Nav>
        </IconContext.Provider>
       </>
    )
}

export default Navbar
