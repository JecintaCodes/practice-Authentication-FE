import styled from "styled-components"
import pix from "../assets/373.jpg"

const Friends = () =>{
    return (
        <div>
        <Container>
        <Main>
        <CardHolder>

        <Card>
        <Cards src={pix} />
        <NameHolder>
        <Name>
        Destiny chukwu
       
        </Name>
        <ButtonHolder>
        <Button> Add Friend</Button>
        <Button> delete</Button>
        </ButtonHolder>
        </NameHolder>
        

        </Card>

        </CardHolder>
        </Main>
        </Container>
        </div>
    )
}

export default Friends
const NameHolder = styled.div`
display: flex;
flex-direction: column;
margin-top: 60px;
margin-left: 10px;
`;
const Button = styled.div`

    padding: 10px;
color: var(--appText);
background-color:var(--appAuth);
color: var(--appBG);
border-radius:6px;
font-weight: 650px;
font-size: 15px;
height: 30px;
`;
const ButtonHolder = styled.div`
display: flex;
gap: 10px;
margin-top: 15px;
`;

const Name = styled.div`
font-size: 15px;
color: var(--appText);
font-weight:650;
word-wrap: wrap;
margin-top: 10px;


`;
const Cards = styled.img`
width:200px;
height: 200px;
// background-color: black;
border: var(--appBorder);
border-radius: 50%;
object-fit:cover;
`;
const Card = styled.div`
height: 300px;
min-width: 400px;
display: flex;
flex-diection: column;

`;
const CardHolder = styled.div`
display: flex;
`;
const Main = styled.div``;
const Container = styled.div`
background-color: var(--appBG);
margin-top: 20px;
height: 100vh;
`;