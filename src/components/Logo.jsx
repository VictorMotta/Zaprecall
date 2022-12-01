import styled from "styled-components";

export default function Logo({ image, description, nomeLogo }) {
    return (
        <StyledLogo>
            <StyledImg src={image} alt={description} />
            <StyledH1>{nomeLogo}</StyledH1>
        </StyledLogo>
    );
}

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
