import { styled } from "styled-components";

export const SHeader = styled.header`
    display: flex;
    max-width: 100%;
    min-height: calc(100vh - 70px);
    background-color: var(--color-fixed-white);
    padding: 130px 5px;
`;

export const SContainer = styled.div`
    width: 90%;
    max-width: 1100px;
    margin: 0 auto;
    display: flex;

    align-items: center;
    min-height: 300px;
    max-height: 400px;
    justify-content: center;
    background-color: var(--color-green-200);
    border-radius: 5px;
`;

export const SSectionDescription = styled.section`
    display: flex;
    max-width: 100%;
    flex-direction: column;
    color: var(--color-gray-900);
    gap: 20px;
    width: 70%;
    text-align: center;
    align-items: center;
    margin-top: 20px;

    h2 {
        font-weight: 700;
        font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    }

    p {
        font-weight: 500;
        font-size: 16px;
    }

    button {
    }
    @media (min-width: 768px) {
        max-width: 45%;
    }
`;

export const SSectionRigth = styled.section`
    display: none;
    @media (min-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 45%;
        color: var(--color-gray-900);

        div {
            width: 100%;
            overflow: hidden;
        }

        img {
            display: flex;
            max-width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            scale: 1;
        }
    }
`;

export const SFormEntry = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;

    input {
        padding: 5px 10px;
        border: none;
        border-bottom: 2px solid var(--color-green-900);

        &:focus {
            border-radius: 4px;
            outline: 1px solid var(--color-green-900);
        }

        &::placeholder {
            color: black;
        }
    }
`;
