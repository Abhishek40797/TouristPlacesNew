import styled from "styled-components"
import { ButtonComponent1 } from "./Button"

interface IProps {
    url : string,
    textAlign : boolean,
    heading : string
}

export const BgImageComponent = ({url,textAlign,heading}:IProps)=>{
    return (
        <>
            <BgImages url={url}>
                { !textAlign ? <H1>{heading}</H1> : 
                    <TextSection>
                        <H2>{heading}</H2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus impedit, beatae eius harum animi voluptatum omnis, ut cupiditate at consequatur placeat sapiente dicta. Labore.</p>
                    </TextSection> 
                }
                <SeeMore>
                    <ButtonComponent1 bg="#00BFFF" textColor="#FFF" label="See More" padding="10px 80px" />
                </SeeMore>
            </BgImages>
        </>
    )
}



const BgImages = styled.div<{url:string}>`
    margin-block : 100px;
    background : linear-gradient(rgb(0,0,0,0.1),rgb(0,0,0,0.8)), url('${({url})=>url}');
    background-size: cover;
    height: 80vh;
    background-position: center;
    border-radius: 5px;    
    text-align : center;
    display : flex;
    color : #FFF;
    flex-direction  : column;
    align-items : center;
    justify-content : center;
    position : relative;
`

const SeeMore = styled.div`
    position : absolute;
    bottom : 5%;
    width : 1200px;
    margin : 0px auto;
    text-align : center;
    @media (max-width : 1024px) {
        width : 90%;
        margin : 50px auto;
    }
`

const H1 = styled.h1`
    position : absolute;
    font-size : 40px;
    width : 40%;
    top : 20%;
    right : 10%;
`

const H2 = styled.h2`
    font-size : 50px;
    padding-bottom : 40px;
`

const TextSection = styled.div`
    width : 50%;
    @media (max-width : 850px) {
        width : 80%;
    }
    @media (max-width : 550px) {
        width : 90%;
    }
`