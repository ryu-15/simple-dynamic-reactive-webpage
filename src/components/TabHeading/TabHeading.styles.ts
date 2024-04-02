import styled from "styled-components";

const StyledTabHeading = styled.div`
    margin-top: 7%;
    position: relative;
    background: linear-gradient(to right, #101010, black);
    opacity: 100%;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    height: 5.625rem;
    z-index: 10;
  
`;
const StyledTabHeadingBtn = styled.button`
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
const StyledNormalTabHeadingBtn=styled(StyledTabHeadingBtn)`
    background: transparent;
    &:focus{
        background:linear-gradient(to right, #282828,#181818);
    }
`;
const StyledTabHeadingBtnContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    padding-left: 4%;
    gap: 4%;

`;

const StyledDivider=styled.div`
    width: 0.12rem;
    background-color: rgba(255, 255, 255, 0.08);;
    height: 2.25rem;
    position: absolute;
    top:33%;
    z-index: 10;
`;
const StyledDivider1=styled(StyledDivider)`
left:17.5%;
    
`
const StyledDivider2=styled(StyledDivider)`
left:32.5%;
`
const StyledDivider3=styled(StyledDivider)`
    left:48.5%;
`
const StyledNonDivider=styled.div`
    width: 0;
    height: 0;
`;

export {StyledTabHeading,StyledNonDivider,StyledDivider1,StyledDivider3,StyledDivider2, StyledTabHeadingBtn,StyledNormalTabHeadingBtn,StyledTabHeadingBtnContainer};
