import { NavLink } from "react-router-dom";
import { useAuth } from "./Security";
import './header.css'

export const Header = () =>{
    const navStyle= ({isActive}) => {

        return {
            fontWeight:isActive ? 'bold' : 'normal',
            textDecoration : isActive ? 'none' : 'underline'
        }



    }

    const auth =useAuth()


    return (

        <>
        <nav className="navbar">

            <NavLink to='/' style={navStyle}>Home</NavLink>
            <NavLink to='/about' style={navStyle}>About</NavLink>
            <NavLink to='/products' style={navStyle}>Product</NavLink>
            <NavLink to='profile' style={navStyle}>Profile</NavLink>
            {
                !auth.user && (
                    <NavLink style={navStyle} to='/login'>
                        Login
                    </NavLink>
                )
            }
        </nav>
        </>
    )
}