import styled from "styled-components"

interface IProps {
    placeholder : string,
    label : string
}

export const FormInputs = ({placeholder,label}:IProps)=>{
    return (
        <>
            <FormInput>
                { label && <Label>{label}</Label>}
                <FormControl placeholder={placeholder} />
            </FormInput>
        </>
    )
}

const FormInput = styled.div`
    width : 100%;
    padding : 10px;
`

const Label = styled.label`
    font-size : 20px;
    font-weight : 500;
    
`

export const FormControl = styled.input `
    width : 100%;
    padding: 15px;
    border: none;
    outline: none;
    background-color: #eeeeee;
    padding : 20px;
    border-radius: 5px;
    ::placeholder {
        font-size: 13px;
        font-weight : 700;
    }
`