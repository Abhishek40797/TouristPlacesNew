import { NavLink } from "react-router-dom"
import styled from "styled-components"

interface IBlogProps {
    src : string
}

export const BlogCard = ({src}:IBlogProps)=>{
    return (
        <>
            <Card>
                <CardImage src={src} alt="" />
                <DateAuthor>
                    <H4>23/4/2023</H4>
                    <h6>Author</h6>
                </DateAuthor>
                <h2>Give you better health a lift in our journey..........</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, quae temporibus rerum tenetur suscipit magni unde ratione sit amet consectetur adipisicing elit sit amet consectetur nam......<NavLink to="#" className="link">See More</NavLink></p>
            </Card>
        </>
    )
}

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    width: 26%;
    gap: 15px; 
    .link {
        color : orange;
        text-decoration : none;
    }
    @media (max-width : 1200px ) {
        width : 28%;
    }
    @media (max-width : 850px ) {
        width : 45%;
    }
    @media (max-width : 550px ) {
        width : 100%;
    }
`

const CardImage = styled.img`
    width: 100%;
    border-radius: 3px;
    object-fit: cover;
    height: 200px;
`;

const DateAuthor = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 20px;
    background-color: #eeeeee;
    border-radius: 10px;
`

const H4 = styled.h4`
    font-size: 20px;
    cursor: pointer;
    color : #00BFFF;
`