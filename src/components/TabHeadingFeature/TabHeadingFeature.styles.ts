import styled from "styled-components";


const StyledFeatureDescription=styled.p`
    color: white;
    text-align: center;
    font-family: var(--defaultFont);
    font-size: 1.45rem;
    line-height: 150%;
    margin-bottom: 10%;
    
`;
const StyledFeatureContentContainer=styled.div`
    display: flex;
    gap: 6rem;
    
    
`;
const StyledFeatureContent=styled.div`
display: flex;
flex-direction: column;
`;
const StyleFeatureContentImg=styled.img`
padding-bottom: 2rem;
width: 100%;
aspect-ratio: 1/1;
    `;
const StyleFeatureContentTitle=styled.span`
color: #FFF;
font-family:var(--defaultFont);
font-size: 2rem;
font-weight: 700;
    width:fit-content;
`;
const StyleFeatureContentDescription=styled.span`
    font-family: var(--defaultFont);
    color: gray;
    font-size: 1.5rem;
    font-weight: 500; 
    text-align: left;
    margin:0;
    
   
`;

export {StyleFeatureContentDescription,StyledFeatureContent,StyledFeatureDescription,StyledFeatureContentContainer,StyleFeatureContentTitle,StyleFeatureContentImg}