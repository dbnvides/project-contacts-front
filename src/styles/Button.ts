import { styled } from "styled-components";

export const SButton = styled.button`
    display: flex;
    padding: 5px 10px;
    width: 130px;
    justify-content: center;
    color: var(--color-gray-100);
    background-color: var(--color-green-600);
    border: 2px solid var(--color-green-700);
    border-radius: 4px;
    font-size: 16px;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;

    &:hover {
        background-color: var(--color-green-400);
        border: 2px solid var(--color-green-500);
    }
`;

export const SButtonEntry = styled.button`
    width: 150px;
    align-self: center;
    padding: 5px 10px;
    color: var(--color-gray-100);
    background-color: var(--color-green-900);
    border: 2px solid var(--color-green-800);
    border-radius: 4px;
    font-size: 16px;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;

    &:hover {
        background-color: var(--color-green-600);
        border: 2px solid var(--color-green-500);
    }
`;
