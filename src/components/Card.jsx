import styled from "styled-components";

export default function Card({ iconSeta, descriptionImg }) {
    return (
        <StyledCard>
            <h1>Pergunta 1</h1>
            <img src={iconSeta} alt={descriptionImg} />
        </StyledCard>
    );
}

const StyledCard = styled.div`
    width: 80%;
    height: 65px;
    background-color: #fff;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 10px;
    padding-right: 20px;
    margin-bottom: 25px;
    h1 {
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #333333;
    }
`;
