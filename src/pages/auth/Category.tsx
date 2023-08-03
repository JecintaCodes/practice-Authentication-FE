import styled from "styled-components"




const Category = ()=>{
    return(
        <div>
        <Container>
        <Main>
        <CatHolder>
        <Cat>Technology</Cat>
        </CatHolder>
       
        <ButtonHolder>
        <Button>continue</Button>
        </ButtonHolder>

        </Main>
        </Container>
        </div>
    )
}

export default Category


const Button = styled.div`
padding: 20px;
color: var(--appText);
background-color:var(--appAuth);
color: var(--appBG);
border-radius:6px;
`;
const ButtonHolder = styled.button`
margin-top: 30px;
`;

const Cat = styled.div`
width: 80px;
height: 30px;
padding: 10px;
border-radius: 20px;
border: 1px solid var(--appBorder);
`;
const CatHolder = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
color: var(--appText);
`;
const Main = styled.div`
width: 90%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;
const Container = styled.div`
width: 100%;
height: 100vh;
background-color:var(--appBG);
display: flex;
justify-content: center;
`;