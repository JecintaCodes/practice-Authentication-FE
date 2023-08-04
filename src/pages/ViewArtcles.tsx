import styled from "styled-components"
import pix from "../assets/373.jpg"

const ViewArticles = () =>{
    return (
        <div>
        <Container>
        <Main>
        <CardHolder>

        <Card>
        <Cards src={pix} />
        <Name>
        <Circle src={pix}/>
        <Title>
        <span> Destiny chukwu</span>
        Technology
        </Title>
      
       
        </Name>
        <ButtonHolder>
       
        <Description>Technology is an
        engineering discipline that deals ....</Description>
      
        </ButtonHolder>

        </Card>

        </CardHolder>
        </Main>
        </Container>
        </div>
    )
}

export default ViewArticles


const Description = styled.div`
word-break: break; 
font-weight: 500;
color: var(--appText);
`;

const Title = styled.div`
font-size: 15px;
font-weight: 650;
display: flex;
flex-direction:column;
color: var(--appText);
`;
const ButtonHolder = styled.div`

`;
const Circle = styled.img`
height: 50px;
width: 50px;
border: 1px solid var(--appBorder);
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
object-fit: cover;
`;

const Name = styled.div`
font-size: 15px;
color: var(--appText);
font-weight:650;
word-wrap: wrap;
margin-top: 10px;
display: flex;


span{
 margin-top:15px;
 margin-left:10px;

}
`;

const Cards = styled.img`
width:200px;
height: 200px;
background-color: black;
border: var(--appBorder);
border-radius: 7px;
object-fit:cover;
`;
const Card = styled.div`
height: 350px;
width: 200px;


`;
const CardHolder = styled.div``;
const Main = styled.div``;
const Container = styled.div`
background-color: var(--appBG);
margin-top: 20px;
height: 100vh;
`;