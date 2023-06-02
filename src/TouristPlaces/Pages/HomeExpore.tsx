import styled from "styled-components"
import { BigText } from "../Components/Bigtext"
import { CardComponent } from "../Components/Card"
import { ExporeData } from "../data/ExporeData"

export const Expore = ()=>{
    return (
        <>
            <Container>
                <BigTextSection>
                <BigText
                    heading="Let's Expore Your Destination"
                    paragraph = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis eius in exercitationem iusto animi, eum dicta eos reprehenderit rem veniam nemo atque, voluptatem adipisci expedita quia porro molestiae quo dolorem numquam modi, explicabo recusandae accusamus?"
                />
                </BigTextSection>

                <BigImages src="assets/asset 4.jpg" />
            </Container>

            <Cards>
                {
                    ExporeData.map((exporedata,i)=>{
                        const {image,name,location} = exporedata
                        return (
                            <CardComponent  
                                image = {image}
                                name = {name}
                                location = {location}
                                footer = {false}
                                key={i}
                            />
                        )
                    })
                }
            </Cards>
        </>
    )
}


const Container = styled.div`
    width : 1200px;
    margin : 120px auto 0 auto;
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

export const Cards = styled.div`
    display : flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 30px;
    width : 1200px;
    margin : 50px auto;
    @media (max-width : 1250px) {
        justify-content: flex-start;
        gap : 100px;
    }
    @media (max-width : 1200px) {
        gap : 60px;
    }
    @media (max-width : 1050px) {
        gap : 40px;
    }
    @media (max-width : 1050px) {
        justify-content: space-between;
    }
    @media (max-width : 1050px) {
        width : 90%;
        margin : 0 auto;
        gap : 20px;
    }
    @media (max-width : 550px) {
        width : 80%;
        margin : auto;
        flex-direction : column;
    }
`;