import styled from "styled-components";

export const CardFooterComponent = ()=>{
    return (
        <>
            <CardFooter>
                <CardFooterLeft>
                    <img src="assets/asset 10.png" alt="" />
                    <CardFootetLeftText>
                        <h6>Sher Nadir</h6>
                        <p>Gulder</p>
                    </CardFootetLeftText>
                </CardFooterLeft>
                <div className="card-footer-right">
                    <I className="fa-regular fa-envelope"></I>
                    <I className="fa-solid fa-phone"></I>
                </div>                            
            </CardFooter>
        </>
    )
}

export const CardFooter = styled.div`
    margin-block : 10px;
    display : flex;
    justify-content : space-between;
    align-items : center; 
    .card-footer-left .footer-text {
        margin-top: 10px;
        align-self: center;
        padding: 0 10px;
    }
    .card-footer-right {
        display: flex;
    }
`;

const CardFooterLeft = styled.div`
    display : flex;
    justify-content : space-between; 
    align-items : center;   
    img {
        width : 40px;
        height: 40px;
        border-radius: 50%;
    }
`
const CardFootetLeftText = styled.div`
    padding-left : 10px;
    h6 {
        font-size : 13px;
    }
`


const I = styled.i`
    color: #00BFFF;
    margin: 0 3px;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 255, 0.1);
    font-size: 15px;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`
