import styled from "styled-components";

const StyledLandingPageSection=styled.section`
    width:100%;
    height: 100%;
    position: relative;
`
const StyledLandingPageContent=styled.div`
    width: 100%;
    height: 100%;
    padding-left: 90px;
    display: flex;
    flex-direction: row;
    font-family: var(--defaultFont);
`
const StyledLandingGraphics=styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top:0;
    right:0;
`
export {StyledLandingGraphics,StyledLandingPageSection,StyledLandingPageContent}
