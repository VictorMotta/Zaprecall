import { useState } from "react";
import styled from "styled-components";
import iconSeta from "../assets/seta_play.png";
import iconVirar from "../assets/seta_virar.png";
import iconErrou from "../assets/icone_erro.png";
import iconCerto from "../assets/icone_certo.png";
import iconQuase from "../assets/icone_quase.png";

export default function Card({ numberFlashCard, question, answer, contador, setContador }) {
    const CORPADRAO = "#333333";
    const CORERROU = "#FF3030";
    const CORDUVIDA = "#FF922E";
    const CORACERTOU = "#2FBE34";
    const [toggleCardInitial, setToggleCardInitial] = useState(false);
    const [toggleCardQuestion, setToggleCardQuestion] = useState(false);
    const [toggleCardAnswer, setToggleCardAnswer] = useState(false);
    const [imgCorrecao, setImgCorrecao] = useState(iconSeta);
    const [stateAtual, setStateAtual] = useState("none");
    const [corLetra, setCorLetra] = useState(CORPADRAO);
    const [desativado, setDesativado] = useState(false);

    function naoLembrei() {
        setToggleCardAnswer(false);
        setStateAtual("line-through");
        setToggleCardInitial(false);
        setCorLetra(CORERROU);
        setImgCorrecao(iconErrou);
        setDesativado(true);
        setContador(contador + 1);
    }

    function quaseLembrei() {
        setToggleCardAnswer(false);
        setStateAtual("line-through");
        setToggleCardInitial(false);
        setCorLetra(CORDUVIDA);
        setImgCorrecao(iconQuase);
        setDesativado(true);
        setContador(contador + 1);
    }

    function acertei() {
        setToggleCardAnswer(false);
        setStateAtual("line-through");
        setToggleCardInitial(false);
        setCorLetra(CORACERTOU);
        setImgCorrecao(iconCerto);
        setDesativado(true);
        setContador(contador + 1);
    }

    return (
        <>
            <StyledCardInitial
                corDaLetra={corLetra}
                textoDecorado={stateAtual}
                visibilidade={!toggleCardInitial ? "flex" : "none"}
            >
                <h1>Pergunta {numberFlashCard}</h1>
                <img
                    src={imgCorrecao}
                    onClick={() => {
                        if (!desativado) {
                            setToggleCardInitial(true);
                            setToggleCardQuestion(true);
                        }
                    }}
                    alt='Icone de Virar'
                />
            </StyledCardInitial>
            <StyledCardQuestion visibilidade={!toggleCardQuestion ? "none" : "block"}>
                <h1>{question}</h1>
                <img
                    src={iconVirar}
                    onClick={() => {
                        setToggleCardQuestion(false);
                        setToggleCardAnswer(true);
                    }}
                    alt='Icone de Virar'
                />
            </StyledCardQuestion>
            <StyledAnswer visibilidade={!toggleCardAnswer ? "none" : "flex"}>
                <h1>{answer}</h1>
                <div>
                    <StyledButtonNLembrei onClick={naoLembrei}>Não Lembrei</StyledButtonNLembrei>
                    <StyledButtonQNLembrei onClick={quaseLembrei}>
                        Quase não lembrei
                    </StyledButtonQNLembrei>
                    <StyledButtonZap onClick={acertei}>Zap!</StyledButtonZap>
                </div>
            </StyledAnswer>
        </>
    );
}

const StyledCardInitial = styled.div`
    width: 80%;
    height: 65px;
    background-color: #fff;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: ${(props) => props.visibilidade};
    align-items: center;
    justify-content: space-between;
    padding-left: 10px;
    padding-right: 20px;
    margin-bottom: 25px;

    h1 {
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: ${(props) => props.corDaLetra};
        text-decoration: ${(props) => props.textoDecorado};
    }
`;

const StyledCardQuestion = styled.div`
    width: 80%;
    height: 131px;
    background-color: #ffffd5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    margin-bottom: 25px;
    padding-left: 10px;
    padding-right: 20px;
    position: relative;
    display: ${(props) => props.visibilidade};
    h1 {
        font-weight: 400;
        font-size: 16px;
        margin-top: 18px;
        line-height: 22px;
        color: #333333;
    }
    img {
        width: 30px;
        position: absolute;
        bottom: 6px;
        right: 15px;
    }
`;

const StyledAnswer = styled.div`
    width: 80%;
    height: 131px;
    background-color: #ffffd5;
    margin-bottom: 25px;
    padding-left: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: ${(props) => props.visibilidade};
    flex-direction: column;
    justify-content: space-between;
    h1 {
        font-weight: 400;
        font-size: 16px;
        margin-top: 18px;
        line-height: 22px;
        color: #333333;
    }
    div {
        display: flex;
        justify-content: center;
        margin-bottom: 10px;
    }
    button {
        margin-right: 8px;
    }
`;

const StyledButtonNLembrei = styled.button`
    width: 85px;
    height: 37px;
    background: #ff3030;
    border-radius: 5px;
    border: none;
    color: #fff;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
`;

const StyledButtonQNLembrei = styled.button`
    width: 85px;
    height: 37px;
    background: #ff922e;
    border-radius: 5px;
    border: none;
    color: #fff;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
`;

const StyledButtonZap = styled.button`
    width: 85px;
    height: 37px;
    background: #ff922e;
    border-radius: 5px;
    border: none;
    color: #fff;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
`;
