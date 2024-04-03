import styled from "styled-components";

const StyledTextSection=styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
 width: 61%;
    
`

 const StyledTitle=styled.h2`
    padding-top: 12.5%;
    color: white;
    font-size: 3rem;
    font-style: normal;
    font-weight: 700;
    line-height: 110%;
`
const StyledDescription=styled.p`
 color: white;
 font-size: 1.25rem;
line-height: 140%;

`
export {StyledTitle,StyledTextSection,StyledDescription}