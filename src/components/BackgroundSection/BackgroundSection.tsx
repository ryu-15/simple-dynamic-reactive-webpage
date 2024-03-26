import {
    StyledBackgroundSection,
    StyledBigEllipse,
    StyledEllipse,
    StyledHollowCircle,
    StyledRevelLogoImg, StyledRobot,
    StyledUiUxImg
} from "./BackgroundSection.styles.ts";

const BackgroundSection=()=>{
    return (
        <StyledBackgroundSection>
            <StyledBigEllipse/>
            <StyledEllipse/>
            <StyledEllipse/>
            <StyledEllipse/>
            <StyledRevelLogoImg/>
            <StyledUiUxImg/>
            <StyledHollowCircle/>
            <StyledRobot/>
        </StyledBackgroundSection>
    )
};

export default BackgroundSection;