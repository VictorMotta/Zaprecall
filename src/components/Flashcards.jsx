import styled from "styled-components";
import Card from "./Card";

export default function Flashcards({ iconSeta, cards }) {
    return (
        <StyledFlashcardsQuestions>
            {cards.map((item, i) => (
                <Card numberFlashCard={i + 1} iconSeta={iconSeta} alt='Seta de play' />
            ))}
        </StyledFlashcardsQuestions>
    );
}

const StyledFlashcardsQuestions = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 51px;
`;
