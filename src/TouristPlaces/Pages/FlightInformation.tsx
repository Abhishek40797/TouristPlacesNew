import React from "react";
import styled from "styled-components";
import { FlightInform } from "../data/FlightInfo";
import { FlightInfoCard } from "../Components/FlightInfoCard";

export const FlightInfo = ()=>{
    return (
        <>
            <FlightInfoContainer>
                {
                    FlightInform.map((FlightInfoData,i)=>{
                        return (
                            <FlightInfoCard FlightInfoData={FlightInfoData} key={i} />
                        )
                    })
                }
            </FlightInfoContainer>
        </>
    )
}

const FlightInfoContainer = styled.div`
    width : 1200px;
    margin : 50px auto;
    display : flex;
    align-items : center;
    justify-content: space-between;
    flex-wrap : wrap;
    gap : 10px;
    @media (max-width : 1024px) {
        width : 90%;
        margin : auto;
    }
    @media (max-width : 550px) {       
        flex-direction : column;
    }
`