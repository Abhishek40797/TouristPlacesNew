import styled from "styled-components"
import { BgImageComponent } from "../Components/BgImage"

export const About = ()=>{
    return (
        <>
            <Container>
                <BgImageComponent url="assets/asset 34.avif" textAlign={true} heading="About Us" />
                
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