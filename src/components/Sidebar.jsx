import styled from "styled-components";

export default function Sidebar({ qtdTotal, contador, setFilaRespostas, filaRespostas }) {
    return (
        <StyledSideBar>
            <h1 data-test='footer'>
                {contador}/{qtdTotal} CONCLUÍDOS
            </h1>
            <div>
                {filaRespostas.map((item) => (
                    <img src={item} alt='Fotos de acertos' />
                ))}
            </div>
        </StyledSideBar>
    );
}

const StyledSideBar = styled.div`
    width: 100%;
    height: 70px;
    background-color: #fff;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    h1 {
        font-size: 18px;
        font-weight: 400;
        color: #333;
    }
    div {
        display: flex;
        margin-top: 6px;
    }
    img {
        margin-right: 5px;
    }
`;
