import styled from "styled-components";


const StyledFeatureDescription=styled.p`
    color: white;
    text-align:center;
    font-family: var(--defaultFont);    
    font-size: 1.5rem;
    
    
    
`
const StyledFeatureContentContainer=styled.div`
display: flex;

gap:7rem;
    margin-top: 10%;
    margin-left: 3%;
`
const StyledFeatureContent=styled.span`
display: flex;
flex-direction: column;
`
const StyleFeatureContentImg=styled.img`
padding-bottom: 2rem;
width: 21.25rem;
height: 21.25rem;
    `
const StyleFeatureContentTitle=styled.p`
color: #FFF;
font-family:var(--defaultFont);
font-size: 2rem;
font-weight: 700; 
`
const StyleFeatureContentDescription=styled.p`
    font-family: var(--defaultFont);
    color: gray;
    font-size: 1.5rem;
    font-weight: 500; `

export {StyleFeatureContentDescription,StyledFeatureContent,StyledFeatureDescription,StyledFeatureContentContainer,StyleFeatureContentTitle,StyleFeatureContentImg}