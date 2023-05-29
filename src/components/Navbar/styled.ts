import { styled } from "styled-components";

export const SNavBar = styled.nav`
    display: flex;
    background-color: white;
    width: 100vw;
    max-height: 80px;
    justify-content: center;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const SContainer = styled.div`
    display: flex;
    flex-direction: row;
    max-height: 100%;
    align-items: center;
    justify-content: center;
    gap: 10px;

    span {
        color: var(--color-gray-900);
        font-size: 20px;
        font-family: var(--font-family-default);
    }
`;

export const SLogo = styled.div`
    display: flex;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    overflow: hidden;

    img {
        display: flex;
        max-width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        scale: 1.6;
    }
`;
