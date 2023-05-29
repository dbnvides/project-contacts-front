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
    max-height: 700px;
    border-radius: 4px;
    color: black;
    border: 4px solid var(--color-green-500);
    padding: 20px;
    z-index: 10;
    position: relative;

    h2 {
        font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
            sans-serif;
        font-weight: 700;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 25px;
        margin-top: 20px;

        fieldset {
            border: none;
        }

        input {
            padding: 5px 10px;
            border: none;
            border-bottom: 2px solid var(--color-green-500);
            font-size: 18px;

            &::placeholder {
                font-size: 18px;
                font-family: "Gill Sans", "Gill Sans MT", Calibri,
                    "Trebuchet MS", sans-serif;
            }
        }

        button {
            align-self: center;
            margin-top: 30px;
        }

        .showError {
            color: red;
            font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
                sans-serif;
            margin-top: 5px;
        }
    }

    .buttonDelete {
        align-self: center;
        background-color: var(--color-red);
        border: 2px solid red;

        &:hover {
            background-color: red;
        }
    }
`;
