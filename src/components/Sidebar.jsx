import styled from "styled-components";

export default function Sidebar() {
    return (
        <StyledSideBar>
            <h1>0/4 CONCLUÍDOS</h1>
        </StyledSideBar>
    );
}

const StyledSideBar = styled.div`
    width: 100%;
    height: 70px;
    background-color: #fff;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
    display: flex;
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
`;
