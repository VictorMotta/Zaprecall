import Logo from "./components/Logo";
import GlobalStyled from "./styles/GlobalStyle";
import logo from "./assets/logo.png";
import styled from "styled-components";

export default function App() {
    return (
        <>
            <GlobalStyled />
            <StyledContainerTotal>
                <Logo image={logo} description='Logo Raio da ZaoRecall' nomeLogo='ZapRecall' />
            </StyledContainerTotal>
        </>
    );
}

const StyledContainerTotal = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #fb6b6b;
    padding-top: 42px;
    font-family: "Recursive", sans-serif;
`;
