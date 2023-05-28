import styled from "styled-components";

export const SHeader = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    height: 250px;

    background-color: var(--color-fixed-white);

    h2 {
        align-self: center;
        margin: 20px 0;
        color: var(--color-gray-900);
        font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    }
`;

export const SContainer = styled.div`
    width: 90%;
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
`;

export const SMain = styled.main`
    display: flex;
    flex-direction: column;
    max-width: 100%;
    min-height: calc(100vh - 320px);
    background-color: var(--color-fixed-white);

    h2 {
        color: var(--color-gray-900);
        margin: 10px 0;
        font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    }

    .boxPlusContact {
        display: flex;
        flex-direction: row;
        padding-top: 30px;
        width: 100%;
        max-width: 500px;
        align-self: center;
        justify-content: space-between;

        button {
            display: flex;
            position: relative;
            align-items: center;
            align-self: center;
            height: 40px;
            gap: 10px;

            span {
                font-size: 20px;
            }
        }
    }
`;
