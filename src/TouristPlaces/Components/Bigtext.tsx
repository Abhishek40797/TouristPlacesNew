import styled from "styled-components"

interface IText {
    heading : string,
    paragraph : string,
}

export const BigText = (props:IText)=>{
    const {heading,paragraph} = props
    return (
        <>
            <H1>{heading}</H1>
            { heading==="About Us" && <H4>Our Story</H4> }
            <P>{paragraph}</P>
        </>
    )
}



export const H1 = styled.h1`
    border-left: 4px solid #00BFFF;
    font-size: 50px;
    font-weight: 700;
    color: #00BFFF;
    padding : 0 10px;
    line-height : 70px;
    @media (max-width : 1050px) {
        font-size: 40px;
        line-height : 60px;
    }
    @media (max-width : 950px) {
        font-size: 35px;
        line-height : 50px;
    }
    @media (max-width : 850px) {
        font-size: 30px;
        line-height : 40px;
    }
    @media (max-width : 700px)  {
        border : none;
    }
`;

const H4 = styled.h4`
    padding-top : 20px;
    color: #00BFFF;
    @media (max-width : 700px) {
        display :  none;
    }
`

const P = styled.p`
    font-weight : 400;
    font-size : 15px;
    padding : 30px 0 50px 0;
    @media (max-width : 950px) {
        font-size : 12px;
    }
    @media (max-width : 850px) {
        font-size : 10px;
    }
    @media (max-width : 700px) {
        display :  none;
    }
`;