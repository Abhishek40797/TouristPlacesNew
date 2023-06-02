import React from "react";
import styled from "styled-components";

interface IButton {
    bg : string,
    textColor : string,
    label : string,
    padding : string
}

export const ButtonComponent1 = (props:IButton)=>{
    const {bg,textColor,label,padding} = props
    return (
        <>
            <Button bg={bg} text={textColor} padding={padding} >{label}</Button>
        </>
    )
}

export const Button = styled.button<{bg:string,text:string,padding:string}> `
    padding: ${({padding})=>padding};
    border-radius: 4px;
    border: 1px solid #00BFFF;
    color: ${({text})=>text};
    background-color : ${({bg})=>bg};
    font-weight : bold;
    @media (max-width : 850px) {
        padding: 8px 20px;
    }
    @media (max-width : 768px) {
        padding: 8px 10px;
    }
`