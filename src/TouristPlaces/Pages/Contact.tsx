import styled from "styled-components"
import { BgImageComponent } from "../Components/BgImage"
import { FormInputs } from "../Components/FormElements"
import { TextArea } from "../Components/TextArea"
import { ButtonComponent1 } from "../Components/Button"

export const Contact = ()=>{
    return (
        <>
            <Container>
                <BgImageComponent url="assets/asset 38.webp" textAlign={true} heading="About Us" />

                <FormImageContainer>
                    <Img src="assets/asset 39.png" alt="" />
                    <Form>

                        <FormInputs placeholder="Input Your Name" label="Full Name" />
                        <FormInputs placeholder="Input Email Here" label="Email" />
                        <TextArea placeholder="Write a Message Here" label="Message" />

                        <SeeMore>
                            <ButtonComponent1 bg="#00BFFF" textColor="#FFF" label="Send" padding="10px 30px" />
                        </SeeMore>

                    </Form>
                </FormImageContainer>
                
            </Container>
        </>
    )
}


const Container = styled.div`
    width : 1200px;
    margin : auto;
    @media (max-width : 1024px) {
        width : 90%;
    }
`

const FormImageContainer = styled.div`
    display : flex;
    align-items : center;
    justify-content : space-between;
`;

const Img =  styled.img`
    width: 40%;
    border-radius:50%;
    height: 35%;
    object-fit : cover;
    border: 3px dashed #00BFFF;
    @media (max-width:850px) {
        display : none;
    }
`

const Form = styled.form`
    width : 50%;
    @media (max-width:850px) {
        width : 90%;
    }
`

const SeeMore = styled.div`
    text-align : center;
    @media (max-width : 1024px) {
        width : 90%;
        margin : 50px auto;
    }
`
