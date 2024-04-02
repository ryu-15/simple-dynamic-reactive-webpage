import React, {useState} from "react";
import TabHeadingFeatureTab from "../TabHeadingFeature/TabHeadingFeature.tsx";
import TabHeadingHomeTab from "../TabHeadingHome/TabHeadingHome.tsx";
import TabHeadingAboutTab from "../TabHeadingAbout/TabHeadAbout.tsx";
import {StyledDivider1,StyledDivider2,StyledDivider3, StyledNonDivider,
    StyledNormalTabHeadingBtn,
    StyledTabHeading,
    StyledTabHeadingBtnContainer
} from "./TabHeading.styles.ts";
import TabHeadingTestimonial from "../TabHeadingTestimonial/TabHeadingTestimonial.tsx";

interface TabHeadingContent {
    tabName: string;
    tabContent: React.ReactNode;
    tabDivider: React.ReactNode;
}

const buttonList: TabHeadingContent[] = [
    {tabName: 'Features', tabContent: <TabHeadingFeatureTab/>,tabDivider:<StyledNonDivider/>},
    {tabName: 'Testimonial', tabContent: <TabHeadingTestimonial/>,tabDivider:<StyledDivider1/>},
    {tabName: 'About us', tabContent: <TabHeadingHomeTab/>,tabDivider:<StyledDivider2/>},
    {tabName: 'Home', tabContent: <TabHeadingAboutTab/>,tabDivider:<StyledDivider3/>},
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

                            <StyledNormalTabHeadingBtn  key={index} onClick={() => handleButtonClick(index)}>
                                {data.tabName}
                                {data.tabDivider}

                            </StyledNormalTabHeadingBtn>
                    ))}

                </StyledTabHeadingBtnContainer>
            </StyledTabHeading>
            {buttonList[selectedTab].tabContent}
        </>
    )
};

export default TabHeading;
