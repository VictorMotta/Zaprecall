import styled from "styled-components";
import Flashcards from "../components/Flashcards";
import logo from "../assets/logo.png";
import Sidebar from "./Sidebar";
import { useState } from "react";

export default function ZapRecall() {
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
    const [contador, setContador] = useState(0);
    const [filaRespostas, setFilaRespostas] = useState([]);

    return (
        <StyledContainerTotal>
            <StyledLogo>
                <StyledImg src={logo} alt='Um raio da logo do ZapRecall' />
                <StyledH1>ZapRecall</StyledH1>
            </StyledLogo>
            <Flashcards
                cards={cards}
                contador={contador}
                setContador={setContador}
                setFilaRespostas={setFilaRespostas}
                filaRespostas={filaRespostas}
            />
            <Sidebar
                contador={contador}
                qtdTotal={cards.length}
                setFilaRespostas={setFilaRespostas}
                filaRespostas={filaRespostas}
            />
        </StyledContainerTotal>
    );
}

const StyledContainerTotal = styled.div`
    width: 100%;
    height: 100%;
    background-color: #fb6b6b;
    padding-top: 42px;
    font-family: "Recursive", sans-serif;
    padding-bottom: 116px;
`;

const StyledLogo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const StyledImg = styled.img`
    width: 52px;
    height: 60px;
    margin-right: 20px;
`;

const StyledH1 = styled.h1`
    font-family: "Righteous", sans-serif;
    color: #fff;
    font-size: 36px;
    font-weight: 400;
`;
