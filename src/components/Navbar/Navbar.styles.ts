import styled from "styled-components";

const StyledNavbar=styled.div`
    padding-top: 16px;
    padding-left: 5%;
    display: flex;
    flex-direction: row;
    gap: 19%;
    position: fixed;
    height: 10%;
    overflow: hidden;
    background-color: black;
    width: 100%;
    z-index: 999;
`
const StyledNavItem=styled.div`
 display: flex;
 flex-direction: row;
    gap:30%
`
const StyledNavLi=styled.li`
 display: inline;
`
const StyledNavAnchor=styled.a`
 font-family: var(--defaultFont);
    color: white;
 font-size: 1.2rem;
 font-weight: 500;
 text-decoration: none;
 line-height: 2.8rem;
    
`
const StyledRevelLogo=styled.span`
    font-family: var(--fancyFont);
    font-size: 2rem;
    font-weight: 700;
    color: white;
    margin-left: 11%;
`

const StyledBtnContainer=styled.div`
    display: flex;
    flex-direction: row;
    gap: 16px;
    margin-right: 10%;
`
const StyledButton=styled.button`
    font-family: var(--defaultFont);
    font-size: 1.2rem;
    padding: 16px 12px;
    border-radius: 10px;
    cursor: pointer;
    width: 158px;
    height: 52px;
    line-height: 0;
    border: 2px solid var(--blue);
    color: var(--blue);
    background-color: transparent;
`

const StyledButtonBlue=styled(StyledButton)`
    border: 2px solid var(--blue);
    color: white;
    background-color: var(--blue);
`

export {StyledButtonBlue,StyledNavAnchor,StyledNavLi,StyledNavbar,StyledNavItem,StyledRevelLogo,StyledBtnContainer,StyledButton}