import Logo from "./components/Logo";
import GlobalStyled from "./styles/GlobalStyle";
import styled from "styled-components";
import Questions from "./components/Flashcards";
import logo from "./assets/logo.png";
import iconSeta from "./assets/seta_play.png";

export default function App() {
    const cards = [
        { question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript" },
        {
            question: "O React é __",
            answer: "Uma biblioteca JavaScript para construção de interfaces",
        },
        { question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
        { question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
        {
            question: "O ReactDOM nos ajuda __",
            answer: "Interagindo com a DOM para colocar componentes React na mesma",
        },
        {
            question: "Usamos o npm para __",
            answer: "Gerenciar os pacotes necessários e suas dependências",
        },
        {
            question: "Usamos props para __",
            answer: "Passar diferentes informações para componentes",
        },
        {
            question: "Usamos estado (state) para __",
            answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
        },
    ];

    return (
        <>
            <GlobalStyled />
            <StyledContainerTotal>
                <Logo image={logo} description='Logo Raio da ZaoRecall' nomeLogo='ZapRecall' />
                <Questions iconSeta={iconSeta} cards={cards} />
            </StyledContainerTotal>
        </>
    );
}

const StyledContainerTotal = styled.div`
    width: 100%;
    height: 100%;
    background-color: #fb6b6b;
    padding-top: 42px;
    font-family: "Recursive", sans-serif;
`;
