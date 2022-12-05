import { useState } from "react";
import styled from "styled-components";
import BoasVindas from "./components/BoasVindas";
import ZapRecall from "./components/ZapRecall";

export default function App() {
    const [startGame, setStartGame] = useState(false);

    return (
        <>
            <StyledBemVindo visibilidade={startGame && "none"}>
                <BoasVindas setStartGame={setStartGame} />
            </StyledBemVindo>
            <StyledFlashCards visibilidade={!startGame ? "none" : "block"}>
                <ZapRecall />
            </StyledFlashCards>
        </>
    );
}

const StyledBemVindo = styled.div`
    display: ${(props) => props.visibilidade};
`;

const StyledFlashCards = styled.div`
    display: ${(props) => props.visibilidade};
`;
