import { styled } from "styled-components";

export const SCardClient = styled.li`
    display: flex;
    width: 100%;
    min-width: 300px;
    max-width: 500px;
    align-self: center;
    flex-direction: column;
    background-color: var(--color-fixed-white);
    max-height: 200px;
    min-height: 90px;
    gap: 15px;
    color: black;
    align-items: center;
    padding: 10px;
    border-radius: 4px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

    .profile {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 60px;
        height: 60px;
        font-size: 50px;
    }

    .contentProfile {
        display: flex;
        flex-direction: column;
        gap: 5px;
        font-size: 18px;
    }

    .boxButtons {
        display: flex;
        justify-content: space-between;
        width: 280px;
    }
`;
