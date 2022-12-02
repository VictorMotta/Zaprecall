import styled from "styled-components";
import Card from "./Card";

export default function Flashcards({ cards, setContador, contador }) {
    return (
        <StyledFlashcardsQuestions>
            {cards.map((item, i) => (
                <Card
                    numberFlashCard={i + 1}
                    question={item.question}
                    answer={item.answer}
                    contador={contador}
                    setContador={setContador}
                ></Card>
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
