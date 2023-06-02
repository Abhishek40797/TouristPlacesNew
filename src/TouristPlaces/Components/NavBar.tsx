import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../StyledComponents/Styled";

export const NavBar = ()=>{

    const navigate = useNavigate()

    return (
        <>
            <Nav>
                <NavLink to="/" className="nav-item">Home</NavLink>
                <NavLink to="/Destinations" className="nav-item">Destination</NavLink>
                <NavLink to="/Reservations" className="nav-item">Reservations</NavLink>
                <NavLink to="/Blogs" className="nav-item">Blogs</NavLink>
                <NavLink to="/About" className="nav-item">About us</NavLink>
                <NavLink to="/Contact" className="nav-item">Contact us</NavLink>
            </Nav>
            <NavButtons>
                <Button bg="transparent" text="#00BFFF" onClick={()=>{navigate("/login")}}>Login</Button>
                <Button bg="#00BFFF" text="#FFF"  onClick={()=>{navigate("/signup")}}>Sign up</Button>
                <MenuIcon className="fa-solid fa-bars" />
            </NavButtons>
        </>
    )
}

const Nav = styled.nav`
    display : flex;
    gap : 40px;
    .nav-item {
        text-decoration : none;
        color : #000;
    }
    @media (max-width : 1250px) {
        position: absolute;
        top: 0%;
        right: -130%;
        width: 400px;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        padding-top: 100px;
        transition: all .55s ease;
        background-color: #eee;
        .nav-item {
            display: block;
            margin: 20px;
            align-self : flex-start;
            padding: 0px 25px;
            transition: all .50s ease;
        }
        .nav-links.open {
            right : 0%;
        }
    }
`

const NavButtons = styled.div`
    display : flex;
    gap : 10px;
    align-items : center;
`

const MenuIcon = styled.i`
    font-size : 20px;
    cursor : pointer;
    display : none;
    @media (max-width : 1250px) {
        display : block;
        z-index : 100;
    }
`