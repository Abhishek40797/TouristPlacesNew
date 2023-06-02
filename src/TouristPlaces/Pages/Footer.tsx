import React from "react";
import styled from "styled-components";
import { Link } from "../Components/Links";

export const Footer = ()=>{
    return (
        <>
            <FooterSection>
                <FooterContainer>

                    <FooterContents>
                        <Logo src="assets/asset 1.png" alt="" />
                        <Para>Copyright @LOVE To Fly 2023 All Rights Reserved</Para>
                    </FooterContents>

                    <FooterContents>
                        <H5>Menu</H5>
                        <Link linkname="/" name="Home" />
                        <Link linkname="/" name="Destination" />
                        <Link linkname="/" name="Resevations" />
                        <Link linkname="/" name="Blogs" />
                        <Link linkname="/" name="About us" />
                        <Link linkname="/" name="Contact us" />
                    </FooterContents>

                    <FooterContents>
                        <H5>Information</H5>
                        <Link linkname="/" name="Home" />
                        <Link linkname="/" name="Destination" />
                        <Link linkname="/" name="Resevations" />
                        <Link linkname="/" name="Blogs" />
                    </FooterContents>

                    <FooterContents>
                        <H5>Contact Info</H5>
                        <P>+12362231232323</P>
                        <P>abhishek40797@gmail.com</P>
                        <P>123, Modal Town, Ambala city</P>
                    </FooterContents>

                    <FooterContents>
                        <H5>Search</H5>
                        <Input type="text" placeholder="search" />                        
                        <H6>Follow us on</H6>
                        <MediaIcons>
                            <I className="fa-brands fa-youtube"></I>
                            <I className="fa-brands fa-instagram"></I>
                            <I className="fa-brands fa-facebook"></I>
                        </MediaIcons>
                    </FooterContents>

                </FooterContainer>
            </FooterSection>
        </>
    )
}

const FooterSection = styled.footer`
    background-color : #00BFFF;
    padding-block: 50px;
    margin-top : 80px;
`

const FooterContainer = styled.div`
    width : 1200px;
    margin : auto;
    display : flex;
    align-items : center;
    justify-content : space-between;
    @media (max-width : 1050px) {
        width : 90%;
        gap : 10px;
    }
    @media (max-width : 630px) {
        width : 100%;
        margin : auto;
        flex-direction: column;
        gap: 40px;
        text-align: center;
        align-items: center;
    }
`

export const FooterContents = styled.div`
    display : flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    align-self: flex-start;
    color : #FFF;
    .nav-links {
        color : #FFF;
        text-decoration : none;
        font-size : 13px;
    }
    @media (max-width : 1050px) {
        &:first-child {
            display : none;
        }
    }
    @media (max-width : 630px) {
        width : 50%;
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
        align-items: stretch;
        align-self: center;
    }
`
const Logo = styled.img`
    width : 30%;
`

const Para = styled.p`
    font-weight : 400;
    font-size : 15px;
    @media (max-width : 950px) {
        font-size : 12px;
    }
    @media (max-width : 850px) {
        font-size : 10px;
    }
`

const P = styled.p`
    font-weight: 500;
    font-size: 13px;
    line-height: 20px;
`

const Input = styled.input`
    margin-top: -5px;
    border: none;
    padding: 10px;
    border-radius: 6px;
    outline: none;
`

const H5 = styled.h5`
    font-size : 25px;
`

const H6 = styled.h6`
    font-size : 15px;
`

const I = styled.i`
    font-size : 17px;
    padding-right : 10px;
`

const MediaIcons = styled.div`
    display : flex;
    @media (max-width : 630px) {
        justify-content : center;
    }
`