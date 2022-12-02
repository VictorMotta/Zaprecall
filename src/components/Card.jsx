import { useState } from "react";
import styled from "styled-components";
import iconSeta from "../assets/seta_play.png";
import iconVirar from "../assets/seta_virar.png";
import iconErrou from "../assets/icone_erro.png";
import iconCerto from "../assets/icone_certo.png";
import iconQuase from "../assets/icone_quase.png";

const CORPADRAO = "#333333";
const CORERROU = "#FF3030";
const CORDUVIDA = "#FF922E";
const CORACERTOU = "#2FBE34";

export default function Card({ numberFlashCard, question, answer, contador, setContador }) {
    const [toggleCardInitial, setToggleCardInitial] = useState(false);
    const [toggleCardQuestion, setToggleCardQuestion] = useState(false);
    const [toggleCardAnswer, setToggleCardAnswer] = useState(false);
    const [toggleCardCorrecao, setToggleCardCorrecao] = useState(false);
    const [imgCorrecao, setImgCorrecao] = useState(iconSeta);
    const [stateAtual, setStateAtual] = useState("none");
    const [corLetra, setCorLetra] = useState(CORPADRAO);
    const [dataTestIcon, setDataTestIcon] = useState("");

    function naoLembrei() {
        setToggleCardAnswer(false);
        setStateAtual("line-through");
        setToggleCardCorrecao(true);
        setCorLetra(CORERROU);
        setImgCorrecao(iconErrou);
        setContador(contador + 1);
        setDataTestIcon("no-icon");
    }

    function quaseLembrei() {
        setToggleCardAnswer(false);
        setStateAtual("line-through");
        setToggleCardCorrecao(true);
        setCorLetra(CORDUVIDA);
        setImgCorrecao(iconQuase);
        setContador(contador + 1);
        setDataTestIcon("partial-icon");
    }

    function acertei() {
        setToggleCardAnswer(false);
        setStateAtual("line-through");
        setToggleCardCorrecao(true);
        setCorLetra(CORACERTOU);
        setImgCorrecao(iconCerto);
        setContador(contador + 1);
        setDataTestIcon("zap-icon");
    }

    return (
        <>
            <StyledCardInitial
                data-test='flashcard'
                visibilidade={!toggleCardInitial ? "flex" : "none"}
            >
                <h1 data-test='flashcard-text'>Pergunta {numberFlashCard}</h1>
                <img
                    data-test='play-btn'
                    src={iconSeta}
                    onClick={() => {
                        setToggleCardInitial(true);
                        setToggleCardQuestion(true);
                    }}
                    alt='Icone de Virar'
                />
            </StyledCardInitial>
            <StyledCardQuestion visibilidade={!toggleCardQuestion ? "none" : "block"}>
                <h1 data-test='flashcard-text'>{question}</h1>
                <img
                    data-test='turn-btn'
                    src={iconVirar}
                    onClick={() => {
                        setToggleCardQuestion(false);
                        setToggleCardAnswer(true);
                    }}
                    alt='Icone de Virar'
                />
            </StyledCardQuestion>
            <StyledAnswer visibilidade={!toggleCardAnswer ? "none" : "flex"}>
                <h1 data-test='flashcard-text'>{answer}</h1>
                <div>
                    <StyledButtonNLembrei data-test='no-btn' onClick={naoLembrei}>
                        Não Lembrei
                    </StyledButtonNLembrei>
                    <StyledButtonQNLembrei data-test='partial-btn' onClick={quaseLembrei}>
                        Quase não lembrei
                    </StyledButtonQNLembrei>
                    <StyledButtonZap data-test='zap-btn' onClick={acertei}>
                        Zap!
                    </StyledButtonZap>
                </div>
            </StyledAnswer>
            <StyledCorrecaoInitial
                data-test='flashcard'
                corDaLetra={corLetra}
                textoDecorado={stateAtual}
                visibilidade={toggleCardCorrecao ? "flex" : "none"}
            >
                <h1 data-test='flashcard-text'>Pergunta {numberFlashCard}</h1>
                <img data-test={dataTestIcon} src={imgCorrecao} alt='Icone de Virar' />
            </StyledCorrecaoInitial>
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
        color: ${CORPADRAO};
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

const StyledCorrecaoInitial = styled.div`
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
