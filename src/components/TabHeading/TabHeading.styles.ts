import styled from "styled-components";

const StyledTabHeading = styled.div`
    margin-top: 15%;
    background: linear-gradient(to right, #242424, black);
    display: flex;

    flex-direction: column;
    align-content: center;
    justify-content: center;
    height: 5.625rem;

    z-index: 10;`
const StyledTabHeadingBtn = styled.button`

    cursor: pointer;
    color: white;
    width: 11.25rem;
    height: 3.5rem;
    padding: 1rem;

    font-weight: 500;
    background: none;
    border-radius: 0.4rem;
    font-family: var(--defaultFont);
    font-size: 20px;
`
const StyledTabHeadingBtnContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    padding-left: 5%;
    gap: 2%;

`
export {StyledTabHeading, StyledTabHeadingBtn, StyledTabHeadingBtnContainer};