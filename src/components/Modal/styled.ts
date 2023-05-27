import { styled } from "styled-components";

export const SWrapper = styled.div`
    top: 0;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100vw;
    height: 100vh;
    position: fixed;

    display: flex;
    justify-content: center;
    align-items: center;
`;
export const SBoxModal = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: var(--color-fixed-white);
    width: 300px;
    max-height: 500px;
    border-radius: 4px;
    color: black;
    border: 4px solid var(--color-green-500);
    padding: 20px;
    z-index: 10;
    position: relative;

    h2 {
        font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 20px;

        input {
            padding: 5px 10px;
            border: none;
            border-bottom: 2px solid var(--color-green-500);
            font-size: 18px;
            margin-top: 20px;

            &::placeholder {
                font-size: 18px;
            }
        }

        button {
            align-self: center;
            margin-top: 30px;
        }
    }
`;
