import React from "react";
import styled from "styled-components";
import { BigText } from "../Components/Bigtext";
import { Button } from "../StyledComponents/Styled";

export const Hero = ()=>{
    return (
        <>
            <HeroContainer>
                <BigTextSection>

                    <BigText
                        heading="Let Starts Your Beautiful Journey With Us"
                        paragraph = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis eius in exercitationem iusto animi, eum dicta eos reprehenderit rem veniam nemo atque, voluptatem adipisci expedita quia porro molestiae quo dolorem numquam modi, explicabo recusandae accusamus?"
                    />

                    <HeroButtons>
                        <Button bg="#00BFFF" text="#FFF"><i className="fa-sharp fa-solid fa-plane"></i> Plane a Trip</Button>
                        <Button bg="transparent" text="#000"><i className="fa-solid fa-magnifying-glass"></i> Plane a Trip</Button>
                    </HeroButtons>
                    
                </BigTextSection>

                <BigImages src="assets/asset 2.png" />
            </HeroContainer>
        </>
    )
}

const HeroContainer = styled.div`
    width : 1200px;
    margin : auto;
    display : flex;
    align-items : center;
    justify-content : space-between;
    @media (max-width : 1024px) {
        width : 90%;
        margin : auto;
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

const HeroButtons = styled.div`
    display : flex;
    gap : 20px;
    @media (max-width : 550px) {
        padding-block : 20px;
        justify-content : center;
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
    }    
    @media (max-width : 700px)  {
        width : 300px;
        margin : auto;
    } 
`