import styled from "styled-components";

const StyledNavbar=styled.div`
    padding-top: 1rem;
    padding-left: 4%;
    display: flex;
    flex-direction: row;
    gap: 18%;
    position: fixed;
    padding-bottom: 1%;
    background-color: black;
    width: 96%;
    z-index: 999;
  
`;
const StyledNavItem=styled.div`
 display: flex;
 flex-direction: row;
    gap:30%
`;
const StyledNavLi=styled.li`
 display: inline;
`;
const StyledNavAnchor=styled.a`
 font-family: var(--defaultFont);
    color: white;
 font-size: 1.2rem;
 font-weight: 500;
 text-decoration: none;
 line-height: 2.8rem;
`;
const StyledRevelLogo=styled.p`
    font-family: var(--fancyFont);
    font-size: 2rem;
    font-weight: bolder;
    color: white;
    margin: auto;
    inset: 0;
    padding-left: 10%;
`;
const StyledBtnContainer=styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    margin-right: 5%;
    
`;
const StyledButton=styled.button`
    font-family: var(--defaultFont);
    font-size: 1.2rem;
    padding: 1rem 0.75rem;
    border-radius: 0.625rem;
    cursor: pointer;
    width: 9rem;
    height: 3rem;
    line-height: 0;
    border: 0.125rem solid var(--blue);
    color: var(--blue);
    background-color: transparent;
`;
const StyledButtonBlue=styled(StyledButton)`
    border: 0.125rem solid var(--blue);
    color: white;
    background-color: var(--blue);
`;

export {StyledButtonBlue,StyledNavAnchor,StyledNavLi,StyledNavbar,StyledNavItem,StyledRevelLogo,StyledBtnContainer,StyledButton}