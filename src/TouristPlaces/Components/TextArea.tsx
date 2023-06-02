import styled from "styled-components"

interface IProps {
    placeholder : string,
    label : string
}

export const TextArea = ({placeholder,label}:IProps)=>{
    return (
        <>
            <FormInput>
                { label && <Label>{label}</Label>}
                <TextAreas placeholder={placeholder} rows={5} />
            </FormInput>
        </>
    )
}

const TextAreas = styled.textarea`
    width: 100%;
    padding: 15px;
    border: none;
    outline: none;
    background-color: #eeeeee;
    border-radius: 5px;
    ::placeholder {
        font-size: 13px;
    }
`

const FormInput = styled.div`
    width : 100%;
    padding : 10px;
`


const Label = styled.label`
    font-size : 20px;
    font-weight : 500;    
`