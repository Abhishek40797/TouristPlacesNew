import styled from "styled-components";

export const Button = styled.button<{bg:string,text:string}> `
    padding: 10px 30px;
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