import styled from "styled-components"
import { BgImageComponent } from "../Components/BgImage"
import { BlogCard } from "../Components/BlogCard"

export const Blogs = () =>{
    return (
        <>
            <Container>
                <BgImageComponent url="assets/asset 29.jpg" textAlign={false} heading="20 Most Beautiful Travel Blogs in 2023" />

                <Cards>
                    <BlogCard src="assets/asset 30.jpg" />
                    <BlogCard src="assets/asset 31.jpg" />
                    <BlogCard src="assets/asset 33.jpg" />
                    <BlogCard src="assets/asset 26.jpg" />
                    <BlogCard src="assets/asset 24.jpg" />
                    <BlogCard src="assets/asset 32.jpg" />
                </Cards>

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

const Cards = styled.div`
    display : flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 30px;
    margin-block : 30px;
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
        gap : 20px;
    }
    @media (max-width : 550px) {
        flex-direction : column;
    }
`;
