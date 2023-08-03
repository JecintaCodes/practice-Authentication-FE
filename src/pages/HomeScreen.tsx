import styled from "styled-components"


const HomeScreen = () =>{
    return(
        <div>
        <Container>
        <Main>
        <CardHolder>
        <Card>

       <Left>
       <Avatar>
       <span></span>
       </Avatar>

       <BigText></BigText>
       <SmallText></SmallText>

           <Technology>
           <span>Technology</span>
           <span>5 min read .</span>
           <span>Because you folloow Technology</span>
           </Technology>
       </Left>

       <Right>
       <ImageHolder>
       <Image/>
       </ImageHolder>
       </Right>

        </Card>
        </CardHolder>
        </Main>
        </Container>
        </div>
    )
}

export default HomeScreen

const Image = styled.div``;
const ImageHolder = styled.div``;
const Left = styled.div``;
const Technology = styled.div``;
const SmallText = styled.div``;
const BigText = styled.div``;
const Avatar = styled.div``;
const Right = styled.div``;
const Card = styled.div`
display: flex;
height: 300px;

`;
const CardHolder = styled.div``;
const Main = styled.div`
width: 90%;
`;
const Container = styled.div`
width: 100%;
height: 100vh;
background-color:var(--appBG);
`;