import {
    StyledLandingGraphics,
    StyledLandingPageContent,
    StyledLandingPageSection
} from "./LandingPage.styles.ts"
import TextSection from "../TextSection/TextSection.tsx";
import BackgroundSection from "../BackgroundSection/BackgroundSection.tsx";

const LandingPage=()=>{
    return (
        <StyledLandingPageSection>
            <StyledLandingPageContent>
                <TextSection/>
            </StyledLandingPageContent>
            <StyledLandingGraphics>
                <BackgroundSection/>
            </StyledLandingGraphics>
        </StyledLandingPageSection>
    );
};

export default LandingPage;