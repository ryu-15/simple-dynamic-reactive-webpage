import {StyledTabHeading, StyledTabHeadingBtn, StyledTabHeadingBtnContainer} from "../TabHeading/TabHeading.styles.ts";
import React, {useState} from "react";
import TabHeadingFeatureTab from "../TabHeadingFeature/TabHeadingFeature.tsx";
import TabHeadingTestimonialTab from "../TabHeadingTestimonial/TabHeadingTestimonial.tsx";
import TabHeadingHomeTab from "../TabHeadingHome/TabHeadingHome.tsx";
import TabHeadingAboutTab from "../TabHeadingAbout/TabHeadAbout.tsx";
interface TabHeadingContent {
    tabName:string;
    tabContent: React.ReactNode;
}

const buttonList: TabHeadingContent[] = [
    {tabName: 'Features', tabContent: <TabHeadingFeatureTab/>},
    {tabName: 'Testimonial', tabContent: <TabHeadingTestimonialTab/>},
    {tabName: 'About us', tabContent: <TabHeadingHomeTab/>},
    {tabName: 'Home', tabContent: <TabHeadingAboutTab/>},
]
const TabHeading = () => {
    const [selectedTab, setSelectedTab] = useState<number>(0);
    const handleButtonClick = (TabNumber: number) => {
        setSelectedTab(TabNumber);
    };

    return (
        <>
            <StyledTabHeading>
                <StyledTabHeadingBtnContainer>
                    {buttonList.map((data, index) => (
                        <>
                            <StyledTabHeadingBtn onClick={() => handleButtonClick(index)}
                                                 className={`tabHeadingElement ${selectedTab === index ? 'active' : ""} `}>
                                {data.tabName}
                            </StyledTabHeadingBtn>
                        </>
                    ))}
                </StyledTabHeadingBtnContainer>
            </StyledTabHeading>
                    {buttonList[selectedTab].tabContent}
        </>
    )
};

export default TabHeading;
