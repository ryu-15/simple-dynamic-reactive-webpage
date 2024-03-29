import styled from "styled-components";

const StyledTestimonialDescription=styled.p`
    color: white;
    text-align:center;
    font-family: var(--defaultFont);    
    font-size: 1.25rem;
    font-style: italic;
    font-weight: 500;
    line-height: 190%;
    letter-spacing: 0.6%;
`
/*const StyledTestimonialContentContainer=styled.div`
display: flex;
background: linear-gradient(RED,black));
    margin-top: 10%;
    width: 50rem;
    height: 31.25rem;
    border-radius: 3.125rem;
`*/
const StyledTestimonialContent=styled.p`
    margin-top: 10%;
    display: flex;
    flex-direction: column;
    background: linear-gradient(rgba(102, 102, 102, 0.5), black);
    width: 50rem;
    height: 31.25rem;
    border-radius: 3.125rem;
    border: 10px solid dimgrey;
    justify-content: center;
    padding: 4rem 6rem;
    
`


export {/*StyledTestimonialContentContainer,*/StyledTestimonialDescription,StyledTestimonialContent}