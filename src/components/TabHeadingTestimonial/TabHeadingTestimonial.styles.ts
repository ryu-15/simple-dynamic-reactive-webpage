import styled from "styled-components";

const StyledTestimonialDescription=styled.p`
    color: white;
    text-align: center;
    font-family: var(--defaultFont);
    font-size: 1.25rem;
    font-style: italic;
    font-weight:400;
    line-height: 38px;
    letter-spacing: 0.6px;
    margin-top: 10%;
    margin-right: 7%;
    margin-left: 7%;
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
const StyledTestimonialCustomerName=styled.p`
    font-family: var(--defaultFont);
    font-size: 1.25rem;
    font-weight: 500;
    color: white;
    margin: 0;
    letter-spacing: 1px;


`;
const StyledTestimonialCustomerCompanyName=styled.p`
    color: var(--grayOne);
    font-family:var(--defaultFont);
    font-size: 1.125rem;
    font-weight: 300;
    margin: 0;
    line-height: 32px
`;


const StyledDoubleQuotation=styled.img`
   display: flex;
    width: 5%;
    height: 6%;
    position: absolute;
    top: 6%;
    left: 8%;
`;
const StyledArrow=styled.img`
    width: 7%;
    height: 5%;
    position: absolute;

`
const StyledArrowLeft=styled(StyledArrow)`
   
    left: 7%;
    top: 60%;
`;
const StyledArrowRight=styled(StyledArrow)`
    transform: scaleX(-1);
    top: 60%;
    left: 85%;
`;
const StyledTestimonialCustomerDetail=styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center;
    height: 100%;
    margin-top: 10%;
    text-align: center;
`;

const StyledTestimonialCustomerImg=styled.img`
width: 6rem;
    height: 6rem;
    position: absolute;
    top: 54%;
    left: 44%;
    
   
`;
export {StyledTestimonialCustomerName,StyledTestimonialCustomerCompanyName,StyledTestimonialCustomerImg,StyledTestimonialContentContainer,StyledTestimonialCustomerDetail,StyledArrowLeft,StyledArrowRight,StyledDoubleQuotation,StyledTestimonialDescription,StyledTestimonialContent}