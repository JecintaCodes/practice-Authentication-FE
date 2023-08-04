import styled from "styled-components"
import pix from "../assets/373.jpg"

const Authors = () =>{
    return (
        <div>
        <Container>
        <Main>
        <CardHolder>

        <Card>
        <Cards src={pix} />
        <Name>
        Destiny chukwu
        <span>Follow</span>
        </Name>
        <UnFriend></UnFriend>
        </Card>

        </CardHolder>
        </Main>
        </Container>
        </div>
    )
}

export default Authors

const UnFriend = styled.div`

`;
const Name = styled.div`
font-size: 15px;
color: var(--appText);
font-weight:650;
word-wrap: wrap;
margin-top: 15px;

span{
    padding: 10px;
color: var(--appText);
background-color:var(--appAuth);
color: var(--appBG);
border-radius:6px;
margin-left: 10px;

}
`;
const Cards = styled.img`
width:200px;
height: 200px;
background-color: black;
border: var(--appBorder);
border-radius: 50%;
object-fit:cover;
`;
const Card = styled.div`
height: 350px;
width: 300px;
color: black;

`;
const CardHolder = styled.div``;
const Main = styled.div``;
const Container = styled.div`
background-color: var(--appBG);
`;