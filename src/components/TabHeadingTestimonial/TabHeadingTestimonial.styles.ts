import styled from "styled-components";

const StyledTestimonialDescription=styled.p`
    color: white;
    text-align: center;
    font-family: var(--defaultFont);
    font-size: 1.5rem;
    font-style: italic;
    font-weight:500;
    line-height: 38px;
    letter-spacing: 0.6px;
    margin-top: 8%;
    margin-right: 6%;
    margin-left: 6%;
    height: 70%;
    margin-bottom: 0%;
`;
const StyledTestimonialContentContainer=styled.div`
    width: 55rem;
    height: 33rem;
    border-radius: 3.438rem;
    background: linear-gradient(#595959, #090909);
    padding: 0.625rem;
    margin-top: 11%;
`;
const StyledTestimonialContent=styled.div`
    display: flex;
    flex-direction: column;
    width: 55rem;
    height: 33rem;
    border-radius:2.813rem;
    position: relative;
    background: linear-gradient( #303030, #030303);
    gap: 10%;
`;
const StyledTestimonialCustomerName=styled.span`
font-family: var(--defaultFont);
    font-size:1.25rem;
    font-weight: 500; 
    color: white;
    margin-bottom: 1%;
    
`;
const StyledTestimonialCustomerCompanyName=styled.span`
    color: var(--grayOne);
    font-family:var(--defaultFont);
    font-size: 1.1rem;
    font-weight: 300;
   
`;


const StyledDoubleQuotation=styled.img`
   display: flex;
    width: 5%;
    height: 6%;
    position: absolute;
    top: 6%;
    left: 8%;
`;
const StyledArrowLeft=styled.img`
    width: 7%;
    height: 5%;
    position: absolute;
    left: 7%;
    top: 60%;
`;
const StyledArrowRight=styled.img`
    transform: scaleX(-1);
    width: 7%;
    height: 5%;
    position: absolute;
    top: 60%;
    left: 85%;
`;
const StyledTestimonialCustomerDetail=styled.section`
display: flex;
    flex-direction: column;
text-align: center;
    align-items: center;
    gap: 2%;
    height: 100%;
`;

const StyledTestimonialCustomerImg=styled.img`
width: 6rem;
    height: 6rem;
    margin-bottom: 3%;
   
`;
export {StyledTestimonialCustomerName,StyledTestimonialCustomerCompanyName,StyledTestimonialCustomerImg,StyledTestimonialContentContainer,StyledTestimonialCustomerDetail,StyledArrowLeft,StyledArrowRight,StyledDoubleQuotation,StyledTestimonialDescription,StyledTestimonialContent}