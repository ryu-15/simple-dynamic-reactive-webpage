import styled from "styled-components";

const StyledTab=styled.section`
    width: fit-content;
    padding: 5%;
    overflow: hidden;
    margin: auto;
    inset: 0;
`;
const StyledTabTitle=styled.div`
    color: white;
    display: flex;
    justify-content: center;
    font-size: 3rem;
    font-weight: 500;
    font-family: var(--defaultFont);
    margin-bottom: 2%;
`;
export {StyledTab,StyledTabTitle};