import styled from "styled-components";

interface IProps {
    image :string,
    brandName : string,
    heading : string,
    subheading : string,
    align : string
}

export const FormHeading = ({image,brandName,heading,subheading,align}:IProps)=>{
    return (
        <>
            <LogoHeading>
                <Logo src={image} alt="" />
                <H6>{brandName}</H6>
            </LogoHeading>

            <HeadingSection align={align}>
                <h1>{heading}</h1>
                <P>{subheading}</P>
            </HeadingSection>
        </>
    )
}

export const LogoHeading = styled.div`
    padding : 20px 0 0 50px;
    display : flex;
    align-items : center;
`;

const Logo = styled.img`
    width : 13%;
`
const H6 = styled.h6`
    padding-left : 10px;
    font-size : 20px;
`

const HeadingSection = styled.div<{align:string}>`
    text-align : ${({align})=>align};
    width : 100%;
`
const P = styled.p`
    padding-top : 10px;
`