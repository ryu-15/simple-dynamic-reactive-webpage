import {
    StyledBackgroundSection,
    StyledBigEllipse, StyledEllipseBottomLeft, StyledEllipseTopLeft, StyledEllipseTopRight,
    StyledHollowCircle,
    StyledRevelLogoImg, StyledRobotImg, StyledRobotBackground,
    StyledUiUxImg
} from "./BackgroundSection.styles.ts";
import UiUxLogo from "../../assets/BackgroundImg/ui-ux.jpg";
import HollowCircle from "../../assets/BackgroundShape/hollow.jpg";
import RevelLogo from "../../assets/BackgroundImg/Revel-logo.jpg";
import Robot from "../../assets/BackgroundImg/robot.jpg";

const BackgroundSection = () => {
    return (
        <StyledBackgroundSection>
            <StyledBigEllipse/>
            <StyledEllipseTopLeft/>
            <StyledEllipseTopRight/>
            <StyledEllipseBottomLeft/>
            <StyledRevelLogoImg src={RevelLogo}/>
            <StyledUiUxImg src={UiUxLogo}/>
            <StyledHollowCircle src={HollowCircle}/>
            <StyledRobotBackground/>
            <StyledRobotImg src={Robot}/>
        </StyledBackgroundSection>
    )
};

export default BackgroundSection;