import {
    StyledArrowLeft,
    StyledArrowRight,
    StyledDoubleQuotation,
    StyledTestimonialContent,
    StyledTestimonialCustomerDetail,
    StyledTestimonialDescription,
    StyledTestimonialCustomerImg,
    StyledTestimonialCustomerName,
    StyledTestimonialCustomerCompanyName,
    StyledTestimonialContentContainer,
} from "./TabHeadingTestimonial.styles.ts";
import {StyledTab, StyledTabTitle} from "../TabPage/TabPage.styles.ts";
import TestimonialCustomerImg from "../../assets/TestimonialImg/LuffyCustomer.png";
import doubleQuotation from "../../assets/TestimonialImg/DoubleQuotationMark.png";
import arrow from "../../assets/TestimonialImg/Arrow.png";

const TabHeadingTestimonialTab = () => {

    return (
        <>
            <StyledTab>
                <StyledTabTitle>TESTIMONIAL FROM OUR CLIENT
                </StyledTabTitle>
                <StyledTestimonialContentContainer>
                    <StyledTestimonialContent>
                        <StyledDoubleQuotation src={doubleQuotation}/>
                        <StyledTestimonialDescription>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1.</StyledTestimonialDescription>
                        <StyledArrowLeft src={arrow}/>
                        <StyledTestimonialCustomerDetail>
                            <StyledTestimonialCustomerImg src={TestimonialCustomerImg}/>
                            <StyledTestimonialCustomerName>MONKEY D LUFFY</StyledTestimonialCustomerName>
                            <StyledTestimonialCustomerCompanyName>One Piece</StyledTestimonialCustomerCompanyName>
                        </StyledTestimonialCustomerDetail>
                        <StyledArrowRight src={arrow}/>

                    </StyledTestimonialContent>
                </StyledTestimonialContentContainer>
            </StyledTab>

        </>
    )
};

export default TabHeadingTestimonialTab;
