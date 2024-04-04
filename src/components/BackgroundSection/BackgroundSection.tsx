import {
    StyledBackgroundSection,
    StyledBigEllipse, StyledEllipseBottomLeft, StyledEllipseTopLeft, StyledEllipseTopRight,
    StyledHollowCircle,
    StyledRevelLogoImg, StyledRobotImg, StyledRobotBackground,
    StyledUiUxImg,
    StyledRobotWrapper
} from "./BackgroundSection.styles.ts";
import UiUxLogo from "../../assets/BackgroundImg/ui-ux.jpg";
import HollowCircle from "../../assets/BackgroundShape/hollow.jpg";
import RevelLogo from "../../assets/BackgroundImg/Revel-logo.jpg";
import Robot from "../../assets/BackgroundImg/robot.jpg";

const BackgroundSection = () => {
    return (
        <StyledBackgroundSection>
            <StyledRobotWrapper>
            <StyledRobotBackground/>
            <StyledRobotImg src={Robot}/>
                <StyledBigEllipse/>
                <StyledEllipseTopLeft/>
                <StyledEllipseTopRight/>
                <StyledEllipseBottomLeft/>
                <StyledRevelLogoImg src={RevelLogo}/>
                <StyledUiUxImg src={UiUxLogo}/>
                <StyledHollowCircle src={HollowCircle}/>
            </StyledRobotWrapper>
        </StyledBackgroundSection>
    )
};

export default BackgroundSection;