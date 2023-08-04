import styled from "styled-components"
import pix from "../assets/373.jpg"

const ViewRequest = () =>{
    return (
        <div>
        <Container>
        <Main>
        <CardHolder>

        <Card>
        <Cards src={pix} />
        <Name>
        Destiny chukwu
       
        </Name>
        <ButtonHolder>
        <Button> confirm</Button>
        <Button> delete</Button>
        </ButtonHolder>

        </Card>

        </CardHolder>
        </Main>
        </Container>
        </div>
    )
}

export default ViewRequest
const Button = styled.div`

    padding: 10px;
color: var(--appText);
background-color:var(--appAuth);
color: var(--appBG);
border-radius:6px;
font-weight: 600px;
font-size: 15px;


`;
const ButtonHolder = styled.div`
display: flex;
gap: 70px;
`;

const Name = styled.div`
font-size: 15px;
color: var(--appText);
font-weight:650;
word-wrap: wrap;
margin-top: 15px;


`;
const Cards = styled.img`
width:200px;
height: 200px;
background-color: black;
border: var(--appBorder);
border-radius: 5px;
object-fit:cover;
`;
const Card = styled.div`
height: 350px;
width: 300px;


`;
const CardHolder = styled.div``;
const Main = styled.div``;
const Container = styled.div`
background-color: var(--appBG);
margin-top: 20px;
height: 100vh;
`;