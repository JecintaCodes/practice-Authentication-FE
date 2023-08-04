import {Outlet} from "react-router-dom"
import Header from "../Static/Header"
import styled from "styled-components"


const Layout = ()=>{
    return(
        <div>
        <Main>
        <Header/>
        <Container>
        <MainContainer>
        <Outlet/>
        </MainContainer>
        </Container>
        </Main>
        </div>
    )
}

export default Layout

const MainContainer = styled.div`
display: flex;
width: calc(100vw-200px);
min-height: 100vh;

`;
const Container = styled.div`
width: 100vh;
display: flex;
justify-content: flex-end;
`;
const Main = styled.div`
display: flex;
background-color: var(--appBG);
`;