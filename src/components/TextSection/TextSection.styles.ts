import styled from "styled-components";

const StyledTextSection=styled.div`
    display: flex;
    flex-direction: column;
    gap: 48px;
    width: 738px;
    font-size: 1.125rem;
`

 const StyledTitle=styled.h2`
    padding-top: 218px;
    color: white;
    font-size: 2.75rem;
    font-style: normal;
    font-weight: 700;
    line-height: 110%;
`
const StyledDescription=styled.p`
color:white;
font-size: 18px;
font-family: var(--defaultFont) ;

`
export {StyledTitle,StyledTextSection,StyledDescription}