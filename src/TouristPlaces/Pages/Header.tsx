import styled from "styled-components"
import { NavBar } from "../Components/NavBar"

export const Headers = ()=>{
    return (
        <>
            <HeaderSection>
                <HeaderContainer>
                    <Logo src="assets/asset 1.png" alt="logo"/>
                    <NavBar />
                </HeaderContainer>
            </HeaderSection>
        </>
    )
}

const HeaderSection = styled.header`
    width : 100%;
    position: fixed;
    top: 0;
    z-index: 99;
    left: 0%;
    padding : 10px 0;
    background-color : #eeeeee;
`

const HeaderContainer = styled.div`
    width : 1200px;
    margin : auto;
    display : flex;
    justify-content : space-between;
    align-items : center;
    @media (max-width : 1024px) {
        width : 90%;
        margin : auto;
    }
`

const Logo = styled.img`
    width : 5%;
    @media (max-width : 550px) {
        width : 15%;
    }
`