import React from "react";
import styled from "styled-components";
import { ButtonComponent1 } from "./Button";

interface IFeedCard {
    src : string,
    name : string
}

export const FeedbackCardComponent = ({src,name}:IFeedCard)=>{
    return (
        <>
            <FeedbackCard>
                <FeedbackCardTopSection>
                    <CardHeader>
                        <Img src={src} alt="" />
                        <Heading className="feedback-text">
                            <H6>{name}</H6>
                            <P2><i className="fa-solid fa-star"></i> (5.0) Reviews</P2>  
                        </Heading>
                    </CardHeader>
                    <P2>10/2/2023</P2>
                </FeedbackCardTopSection>

                <P1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id minima suscipit quo commodi eligendi aliquam perferendis, labore voluptates corrupti laboriosam ad laborum, quia dicta veritatis delectus? Sunt fugit sapiente sed in voluptates ex, ad explicabo, temporibus magnam dolores labore eum sint unde maiores officiis facere amet laborum totam perferendis?</P1>

                <div>
                    <ButtonComponent1 bg="#00BFFF" textColor="#FFF" label="See More" padding="10px 30px" />
                </div>
            </FeedbackCard>
        </>
    )
}

const FeedbackCard = styled.div`
    width: 25%;
    padding: 20px 20px;
    background-color: #FFF;  
    display : flex;  
    flex-direction: column;
    text-align: center;
    gap: 15px;    
    box-shadow: -1px -1px 1px 1px rgba(0, 0, 255, 0.1), 1px 1px 1px 1px rgba(0, 0, 255, 0.1);
    @media (max-width : 1050px) {
        width : 32%;
    }
    @media (max-width : 950px) {
        width : 40%;
        &:last-child {
            display : none;
        }
    }
    @media (max-width : 700px) {
        width : 45%;
    }
    @media (max-width : 550px) {
        width : 90%;
    }
`

const FeedbackCardTopSection = styled.div`
    display : flex;
    justify-content : space-between;
    width : 100%;
`

const Img = styled.img`
    width : 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
`
const P1 = styled.div`
    font-size: 13px;
    opacity: 0.8;
    text-align: center;
    line-height: 20px;
`

const CardHeader = styled.div`
    display : flex;
    gap : 5px;
    align-items : center;
`

const H6 = styled.div`
    font-size : 20px;
`
const P2 = styled.p`
    padding-block : 10px;
    font-size: 13px;
    i {
        color: yellow;
        font-size : 15px;
    }
`
const Heading = styled.div`
    line-height: 5px;
`