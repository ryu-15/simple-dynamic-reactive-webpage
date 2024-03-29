import Ai from "../../assets/FeaturesImg/AI.png";
import AppDev from "../../assets/FeaturesImg/AppDev.png";
import WebDev from "../../assets/FeaturesImg/WebDev.png";
import {
    StyledFeatureContent,
    StyledFeatureContentContainer,
    StyledFeatureDescription,
    StyleFeatureContentDescription, StyleFeatureContentImg, StyleFeatureContentTitle
} from "./TabHeadingFeature.styles.ts";
import {StyledTab, StyledTabTitle} from "../TabPage/TabPage.styles.ts";


const TabHeadingFeatureTab = () => {
    return (
        <>
            <StyledTab>
                <StyledTabTitle>Discover Our Experience
                </StyledTabTitle>
                <StyledFeatureDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                </StyledFeatureDescription>
                <StyledFeatureContentContainer>
                    <StyledFeatureContent>
                        <StyleFeatureContentImg src={Ai}/>
                        <StyleFeatureContentTitle>AI
                        </StyleFeatureContentTitle>
                        <StyleFeatureContentDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </StyleFeatureContentDescription>
                    </StyledFeatureContent>
                    <StyledFeatureContent>
                        <StyleFeatureContentImg src={AppDev}/>
                        <StyleFeatureContentTitle>App Development
                        </StyleFeatureContentTitle>
                        <StyleFeatureContentDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </StyleFeatureContentDescription>
                    </StyledFeatureContent>
                    <StyledFeatureContent>
                        <StyleFeatureContentImg src={WebDev}/>
                        <StyleFeatureContentTitle>Web Development
                        </StyleFeatureContentTitle>
                        <StyleFeatureContentDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </StyleFeatureContentDescription>
                    </StyledFeatureContent>
                </StyledFeatureContentContainer>
            </StyledTab>

        </>
    )
};

export default TabHeadingFeatureTab;
