import {useState} from "react";
import {StyledTab, StyledTabTitle} from "../TabPage/TabPage.styles.ts";
import {
    StyledArrowLeft, StyledArrowRight,
    StyledDoubleQuotation,
    StyledTestimonialContent,
    StyledTestimonialContentContainer,
    StyledTestimonialCustomerCompanyName,
    StyledTestimonialCustomerDetail,
    StyledTestimonialCustomerImg,
    StyledTestimonialCustomerName,
    StyledTestimonialDescription
} from "./TabHeadingTestimonial.styles.ts";
import doubleQuotation from "../../assets/TestimonialImg/DoubleQuotationMark.png";
import arrow from "../../assets/TestimonialImg/Arrow.png";

import customerGojoImg from "../../assets/TestimonialImg/GojoCustomer.png";
import customerLuffyImg from "../../assets/TestimonialImg/LuffyCustomer.png";

const customerLuffyTestiomonial = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1.";
const customerGojoTestiomonial = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

interface TestimonialTabContent {
    TestimonialCustomerName: string;
    TestimonialContent: string;
    TestimonialCustomerImg: string;
    TestimonialCustomerCompanyName: string;
}

const TestimonialTabList: TestimonialTabContent[] = [
    {
        TestimonialCustomerName: 'GOJO SATORU',
        TestimonialContent: customerGojoTestiomonial,
        TestimonialCustomerImg: customerGojoImg,
        TestimonialCustomerCompanyName: 'Jujutusu Kaisen'
    },
    {
        TestimonialCustomerName: 'MONKEY D LUFFY', TestimonialContent: customerLuffyTestiomonial,
        TestimonialCustomerImg: customerLuffyImg,
        TestimonialCustomerCompanyName: 'One Piece'
    }
]
const TabHeadingTestimonial = () => {
    const [selectedTestimonialTab, setSelectedTestimonialTab] = useState<number>(0);
    const handleArrowClick = (increment: number) => {
        setSelectedTestimonialTab(prevTab => (prevTab + increment + TestimonialTabList.length) % TestimonialTabList.length);
    };

    return (
        <StyledTab>
            <StyledTabTitle>TESTIMONIAL FROM OUR CLIENT
            </StyledTabTitle>
            <StyledTestimonialContentContainer>
                <StyledTestimonialContent>
                    <StyledDoubleQuotation src={doubleQuotation}/>
                    <StyledTestimonialDescription>
                        {TestimonialTabList[selectedTestimonialTab].TestimonialContent}
                    </StyledTestimonialDescription>
                    <StyledArrowLeft src={arrow} onClick={() => handleArrowClick(-1)}/>
                    <StyledTestimonialCustomerDetail>
                        <StyledTestimonialCustomerImg
                            src={TestimonialTabList[selectedTestimonialTab].TestimonialCustomerImg}/>
                        <StyledTestimonialCustomerName>{TestimonialTabList[selectedTestimonialTab].TestimonialCustomerName}</StyledTestimonialCustomerName>
                        <StyledTestimonialCustomerCompanyName>{TestimonialTabList[selectedTestimonialTab].TestimonialCustomerCompanyName}</StyledTestimonialCustomerCompanyName>
                    </StyledTestimonialCustomerDetail>
                    <StyledArrowRight src={arrow} onClick={() => handleArrowClick(1)}/>
                </StyledTestimonialContent>
            </StyledTestimonialContentContainer>
        </StyledTab>

    )
}
export default TabHeadingTestimonial;
