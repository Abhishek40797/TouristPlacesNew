import React from "react";
import styled from "styled-components";
import { BigText } from "../Components/Bigtext";
import { ButtonComponent1 } from "../Components/Button";

export const About = ()=>{
    return (
        <>
            <Container>
                <BigTextSection>
                <BigText
                    heading="About Us"
                    paragraph = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis eius in exercitationem iusto animi, eum dicta eos reprehenderit rem veniam nemo atque, voluptatem adipisci expedita quia porro molestiae quo dolorem numquam modi, explicabo recusandae accusamus?"
                />
                </BigTextSection>

                <BigImages src="assets/asset 19.jpg" />
            </Container>
            
            <SeeMore>
                <ButtonComponent1 bg="#00BFFF" textColor="#FFF" label="See More" padding="10px 80px" />
            </SeeMore>
        </>
    )
}

const Container = styled.div`
    width : 1200px;
    margin : 50px auto;
    display : flex;
    align-items : center;
    justify-content : space-between;
    @media (max-width : 1024px) {
        width : 90%;
        margin : 50px auto 20px auto;
    }
    @media (max-width : 550px) {       
        flex-direction : column;
    }
`

export const BigTextSection = styled.div`
    width : 45%;
    @media (max-width : 700px) {
        order : 2;
        width : 100%;
        text-align : center;
    }
`

const BigImages = styled.img`
    width: 500px;
    object-fit: cover;
    border-radius: 5px;
    @media (max-width : 1200px) {
        width : 470px;
    }
    @media (max-width : 950px) {
        width : 400px;
    }
    @media (max-width : 850px) {
        width : 350px;
        margin-top : -50px;
    }    
    @media (max-width : 700px)  {
        width : 350px;
        margin : auto;
    } 
`

const SeeMore = styled.div`
    width : 1200px;
    margin : 50px auto;
    text-align : center;
    @media (max-width : 1024px) {
        width : 90%;
        margin : 0px auto;
    }
`