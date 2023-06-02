import React from "react";
import styled from "styled-components";

interface IFlightInfo {
    FlightInfoData : {
        icon : string,
        heading : string,
        subHeading : string
    }
}

export const FlightInfoCard = ({FlightInfoData}:IFlightInfo)=>{
    const {icon,heading,subHeading} = FlightInfoData
    return (
        <>
            <Card>
                <FlightInfoTopSection >
                    <H4><i className={`${icon}`}></i> {heading}</H4>
                    <i className="fa-sharp fa-solid fa-angle-left fa-rotate-270 fs-5"></i>
                </FlightInfoTopSection>
                <H3>{subHeading}</H3>
            </Card>
        </>
    )
}

const Card = styled.div`
    padding: 20px;
    border : 1px solid #000;
    padding-bottom: 0px;
    width: 20%; 
    display : flex;
    flex-direction : column;
    gap : 10px;
    background-color: #FFF;
    border: none;
    @media (max-width : 1050px) {
        width : 40%;
    }
    @media (max-width : 550px) {
        width : 90%
    }
`

export const FlightInfoTopSection = styled.div`
    color : #00BFFF;
    display : flex;
    align-items : center;
    justify-content: space-between;
`;

export const H4 = styled.div`
    font-size: 20px;
    cursor: pointer;
    color : #00BFFF;
`;

const H3 = styled.h3 `
    padding-bottom : 15px;
`