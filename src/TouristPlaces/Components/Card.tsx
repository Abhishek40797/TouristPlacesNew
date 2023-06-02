import React from "react";
import styled from "styled-components";
import { ButtonComponent1 } from "./Button";
import { CardFooterComponent } from "./CardFooter";

interface ICard {
    image : string,
    name : string,
    location : string,
    footer : boolean
}

export const CardComponent = (props:ICard)=>{
    const {image,name,location,footer} = props;
    return (
        <>
            <Card>
                <CardImage src={image} alt="" />
                <CardBody>
                    <H4>{name}</H4>
                    <H5><I color="#00BFFF" className="fa-solid fa-location-dot"></I> {location}</H5>
                    <PriceReview>
                        <H6><span>$300.00</span> per day</H6>
                        <p><I color="yellow" className="fa-solid fa-star"></I> (5.0) Reviews</p>
                    </PriceReview>
                    <ButtonComponent1 
                        bg="#00BFFF" 
                        textColor="#FFF"
                        label={footer?"Details":"Book a Trip"}
                        padding = "10px 30px"
                        />
                    { footer ? <CardFooterComponent /> : "" }
                </CardBody>
            </Card>
        </>
    )
}

export const Card = styled.div`
    width: 23%;
    background-color: #FFF;
    transition: 0.2s all;
    font-size: 12px;
    @media (max-width : 1250px) {
        width: 27%;
    }
    @media (max-width : 1200px) {
        width: 29%;
    }
    @media (max-width : 1050px) {
        width: 30%;
    }
    @media (max-width : 950px) {
        width: 40%;
    }
    @media (max-width : 850px) {
        width : 45%;
    }
    @media (max-width : 630px) {
        width : 47%;
    }
    @media (max-width : 550px) {
        width : 100%;
    }
`;

export const CardImage = styled.img`
    width: 100%;
    border-radius: 3px;
    object-fit: cover;
    height: 200px;
`;

export const CardBody = styled.div`
    padding : 10px 20px;
`;

const PriceReview = styled.div`
    padding-block : 10px;
    display : flex;
    justify-content : space-between;
`

const H4 = styled.h4 `
    font-size: 20px;
    cursor: pointer;
    color : #00BFFF;
`

const H5 = styled.h5`
    padding : 5px;
    font-size: 15px;    
    font-weight : 400;
`

const H6 = styled.h6`
    font-size: 12px;    
    span {
        color : #00BFFF;
    }
`

export const I = styled.i<{color:string}>`
    color : ${({color})=>color};
`