import styled from "styled-components"
import { FormHeading } from "../Components/FormHeading"
import { FormInputs } from "../Components/FormElements"
import { ButtonComponent1 } from "../Components/Button"
import { NavLink } from "react-router-dom"

export const Signup = ()=>{
    return (
        <>
            <Container>
                <SubContainer>
                    
                    <FormContainer>

                        <FormHeading
                            image="assets/asset 1.png"
                            brandName="Smart Travel"
                            heading="Sign Up"
                            subheading="Your details are required here"
                            align = "justify"
                        />

                        <Form>
                            <FormInputs placeholder="Full Name" label="" />
                            <FormInputs placeholder="Email" label="" />
                            <FormInputs placeholder="Password" label="" />
                            <ButtonContainer>
                                <ButtonComponent1 bg="#00BFFF" textColor="#FFF" label="Register" padding="10px 30px" />
                            </ButtonContainer>
                        </Form>

                        <P>or</P>

                        <LoginButtons>
                            <ButtonComponent1 bg="transparent" textColor="#000" label="Facebook" padding="10px 30px"/>
                            <ButtonComponent1 bg="transparent" textColor="#000" label="Google" padding="10px 30px"/>
                            <ButtonComponent1 bg="transparent" textColor="#000" label="Twitter" padding="10px 30px"/>
                        </LoginButtons>

                        <LinkSection>
                            <NavLink to="/" className="nav-links" >Forget Password</NavLink>
                            <P2>Don't have a account?<NavLink to="/signup" className="nav-links" >Sign up here</NavLink></P2>
                        </LinkSection>

                    </FormContainer>

                    <ImageContainer>
                        <Img src="assets/asset 41.jpg" alt="" />
                    </ImageContainer>

                </SubContainer>
            </Container>
        </>
    )
}

const Container = styled.div`
    width : 1200px;
    margin : 100px auto;
    border : 1px solid #000;
    background: linear-gradient(rgb(0,0,0,0.1),rgb(0,0,0,0.8)), url("assets/asset\ 40.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    @media (max-width : 1024px) {
        width : 90%;
    }
`

const SubContainer = styled.div`
    margin : 50px;
    display : flex;
    border-radius: 10px;
    background-color: #FFF;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 255, 0.1), -1px -1px 1px 0px rgba(0, 0, 255, 0.1);
`

const FormContainer = styled.div`
    width : 50%;
    padding : 20px;
`

const Form = styled.form`
    width : 100%;
    margin-block : 30px;
`

const ButtonContainer = styled.div`
    width : 100%;
    margin-left : 10px;
`

const P = styled.p`
    text-align : center;
`

export const LoginButtons = styled.div`
    margin-block : 20px;
    display : flex;
    gap : 20px;
    flex-wrap : wrap;
    justify-content : center;
`

const LinkSection = styled.div`
    font-size : 13px;
    text-align : center;
    .nav-links {
        text-decoration : none;
        color : #00BFFF;
    }
`

const P2 = styled.p`
    padding : 10px 0;
`

const ImageContainer = styled.div`
    width : 50%;
`
const Img = styled.img`
    width : 100%;
    height : 100%;
    object-fit : cover;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
`