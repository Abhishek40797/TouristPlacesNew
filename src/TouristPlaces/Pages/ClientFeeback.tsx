import styled from "styled-components"
import { ButtonComponent1 } from "../Components/Button"
import { BigText } from "../Components/Bigtext"
import { FeedbackCardComponent } from "../Components/FeedbackCard"

export const ClientFeedback = ()=>{
    return (
        <>
            <Container>
                <BigTextSection>
                <BigText
                    heading="What Clients Say About Us"
                    paragraph = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis eius in exercitationem iusto animi, eum dicta eos reprehenderit rem veniam nemo atque, voluptatem adipisci expedita quia porro molestiae quo dolorem numquam modi, explicabo recusandae accusamus?"
                />
                </BigTextSection>

                <BigImages src="assets/asset 20.jpg" />
            </Container>

            <FeedbackCards>
                <FeedbackCardComponent src="assets/asset 23.avif" name="Samara Khan" />
                <FeedbackCardComponent src="assets/asset 23.avif" name="Samara Khan" />
                <FeedbackCardComponent src="assets/asset 23.avif" name="Samara Khan" />
            </FeedbackCards>
            
            <SeeMore>
                <ButtonComponent1 bg="#00BFFF" textColor="#FFF" label="See More" padding="10px 80px" />
            </SeeMore>
        </>
    )
}

const Container = styled.div`
    width : 1200px;
    margin : 0 auto;
    display : flex;
    align-items : center;
    justify-content : space-between;
    @media (max-width : 1024px) {
        width : 90%;
        margin : 100px auto;
    }
    @media (max-width : 550px) {       
        flex-direction : column;
    }
`

export const BigTextSection = styled.div`
    width : 45%;
    @media (max-width : 700px) {
        order : 2;
        width : 100%;
        text-align : center;
    }
`

const BigImages = styled.img`
    width: 500px;
    object-fit: cover;
    border-radius: 5px;
    @media (max-width : 1200px) {
        width : 470px;
    }
    @media (max-width : 950px) {
        width : 400px;
    }
    @media (max-width : 850px) {
        width : 350px;
        margin-top : -50px;
    }    
    @media (max-width : 700px)  {
        width : 350px;
        margin : auto;
    } 
`

const SeeMore = styled.div`
    width : 1200px;
    margin : 0px auto;
    text-align : center;
    @media (max-width : 1024px) {
        width : 90%;
        margin : 50px auto;
    }
`

const FeedbackCards = styled.div`
    width : 1200px;
    margin : 50px auto;
    display : flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;
    @media (max-width : 1050px) {
        gap : 5px;
    }}
    @media (max-width : 1024px) {
        width : 90%;
        margin : 0px auto;
    }
    @media (max-width : 550px) {   
        width : 90%;
        flex-direction : column;
    }
`