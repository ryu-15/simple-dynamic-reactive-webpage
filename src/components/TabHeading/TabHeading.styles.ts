import styled from "styled-components";

const StyledTabHeading = styled.div`
    margin-top: 7%;
    position: relative;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.02) 100%);
    box-shadow: 14px 4px 44px 0px rgba(0, 0, 0, 0.15);
    opacity: 100%;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    height: 5.625rem;
    z-index: 10;
  
`;
const StyledTabHeadingWrapper=styled.div` 
    backdrop-filter: blur(3px);
`;
const StyledTabHeadingBtn=styled.button<{ $isActive?: boolean; }>` 
    background: ${props => props.$isActive ? "linear-gradient(to right, #282828,#181818)" : "transparent"};
    cursor: pointer;
    color: white;
    width: 11.25rem;
    height: 3.5rem;
    padding: 1rem;
    border:none;
    font-weight: 500;
    border-radius: 0.4rem;
    font-family: var(--defaultFont);
    font-size: 1.25rem;
    
`;

const StyledTabHeadingBtnContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    padding-left: 4%;
    gap: 2%;

`;

const StyledDivider=styled.div`
    width: 0.12rem;
    background-color: rgba(255, 255, 255, 0.08);;
    height: 3rem;
    
`;



export {StyledTabHeadingWrapper,StyledTabHeading, StyledDivider,StyledTabHeadingBtn,StyledTabHeadingBtnContainer};
