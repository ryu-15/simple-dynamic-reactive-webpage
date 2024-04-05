gitimport React, {useState} from "react";
import TabHeadingFeatureTab from "../TabHeadingFeature/TabHeadingFeature.tsx";
import TabHeadingHomeTab from "../TabHeadingHome/TabHeadingHome.tsx";
import TabHeadingAboutTab from "../TabHeadingAbout/TabHeadAbout.tsx";
import {
    StyledDivider,
    StyledTabHeading, StyledTabHeadingBtn,
    StyledTabHeadingBtnContainer,
    StyledTabHeadingWrapper
} from "./TabHeading.styles.ts";
import TabHeadingTestimonial from "../TabHeadingTestimonial/TabHeadingTestimonial.tsx";

interface TabHeadingContent {
    tabName: string;
    tabContent: React.ReactNode;
}


const buttonList: TabHeadingContent[] = [
    {tabName: 'Features', tabContent: <TabHeadingFeatureTab/>},
    {tabName: 'Testimonial', tabContent: <TabHeadingTestimonial/>},
    {tabName: 'About us', tabContent: <TabHeadingHomeTab/>},
    {tabName: 'Home', tabContent: <TabHeadingAboutTab/>},
]

const TabHeading = () => {
    const [selectedTab, setSelectedTab] = useState<number>(0)
    const handleButtonClick = (TabNumber: number) => {
        setSelectedTab(TabNumber);
    };
    return (
        <>
            <StyledTabHeadingWrapper>
                <StyledTabHeading>
                    <StyledTabHeadingBtnContainer>

                        {buttonList.map((data, index) =>

                            <>
                                <StyledTabHeadingBtn
                                    $isActive={selectedTab === index} onClick={()=>handleButtonClick(index)}
                                >
                                    {data.tabName}
                                </StyledTabHeadingBtn>

                                {!(index === buttonList.length - 1) && (
                                    <StyledDivider/>
                                )}
                            </>
                        )
                        }
                    </StyledTabHeadingBtnContainer>
                </StyledTabHeading>
            </StyledTabHeadingWrapper>
            {buttonList[selectedTab].tabContent}
        </>
    )
};

export default TabHeading;
