import {
    StyledBackgroundSection,
    StyledBigEllipse,
    StyledEllipse,
    StyledHollowCircle,
    StyledRevelLogoImg, StyledRobot, StyledRobotBackground,
    StyledUiUxImg
} from "./BackgroundSection.styles.ts";
import UiUxLogo from "../../assets/BackgroundImg/ui-ux.jpg";
import BigEllipse from "../../assets/BackgroundShape/BigCircle.jpg";
import SmallEllipse from "../../assets/BackgroundShape/SmallCircle.jpg";
import HollowCircle from "../../assets/BackgroundShape/hollow.jpg";
import RevelLogo from "../../assets/BackgroundImg/Revel-logo.jpg";
import Robot from "../../assets/BackgroundImg/robot.jpg";
const BackgroundSection=()=>{
    return (
        <StyledBackgroundSection>
            <StyledBigEllipse src={BigEllipse}/>
            <StyledEllipse src ={SmallEllipse}/>
            <StyledEllipse src ={SmallEllipse}/>
            <StyledEllipse src={SmallEllipse}/>
            <StyledRevelLogoImg src={RevelLogo}/>
            <StyledUiUxImg src={UiUxLogo}/>
            <StyledHollowCircle src={HollowCircle}/>
            <StyledRobot src={Robot}/>
            <StyledRobotBackground/>
            </StyledBackgroundSection>
    )
};

export default BackgroundSection;