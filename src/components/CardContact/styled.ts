import { styled } from "styled-components";

export const SCardContact = styled.li`
    display: flex;
    min-width: 100%;
    flex-direction: row;
    background-color: var(--color-gray-300);
    max-height: 90px;
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
        gap: 4px;
        font-size: 15px;
    }
`;
