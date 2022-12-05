import styled from "styled-components";
import logo from "../assets/logo.png";

export default function BoasVindas({ setStartGame }) {
    return (
        <StyledContainerPrincipal>
            <img src={logo} alt='Logo do raio' />
            <h1>ZapRecall</h1>
            <button onClick={() => setStartGame(true)}>Iniciar Recall!!</button>
        </StyledContainerPrincipal>
    );
}

const StyledContainerPrincipal = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #fb6b6b;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
        width: 136px;
        height: 161px;
    }
    h1 {
        font-family: "Righteous";
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 45px;
        color: #ffffff;
        margin-top: 13px;
    }
    button {
        width: 246px;
        height: 54px;
        background: #ffffff;
        border: 1px solid #d70900;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
        font-family: "Recursive";
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #d70900;
        margin-top: 40px;
    }
`;
