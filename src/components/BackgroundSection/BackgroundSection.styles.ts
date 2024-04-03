import styled from "styled-components";

const StyledBackgroundSection = styled.div`
`;
const StyledRevelLogoImg = styled.img`
    position: absolute;
    top: 62%;
    left: 53%;
    z-index: 3;
    border-radius: 6.25rem;
    width: 13.125rem;
    height: 4.062rem;
`;
const StyledUiUxImg = styled.img`
    position: absolute;
    top: 96%;
    left: 65%;
    z-index: 3;
    border-radius: 6.25rem;
    width: 7.438rem;
    height: 4.063rem;
`;
const StyledBigEllipse = styled.div`
    width: 3rem;
    height: 3rem;
    position: absolute;
    top: 27%;
    left: 52%;
    background: linear-gradient(white, black);
    border-radius: 50%;
    filter: blur(0.15rem);
    opacity: 90%;
`;
const StyledHollowCircle = styled.img`
    position: absolute;
    width: 27.063rem;
    height: 27.063rem;
    top: 40%;
    left: 64%;
    z-index: 0;
`;
const StyledRobot=styled.img`
    position: absolute;
    width: 24.814rem;
    height: 24.814rem;
    top: 43.5%;
    left: 65.25%;
`;
const StyledRobotBackground = styled(StyledRobot)`
    background-image: linear-gradient(white, black);
    border-radius: 50%;
    padding: 0;
`;
const StyledRobotImg = styled(StyledRobot)`
  
`;
const StyledSmallEllipse = styled.div`
    width: 2.5rem;
    height: 2.5rem;
    z-index: 3;
    background: linear-gradient(white, black);
    border-radius: 50%;
    position: absolute;
    filter: blur(0.15rem);
    opacity: 90%;
`;
const StyledEllipseTopLeft = styled(StyledSmallEllipse)`
    top: 78%;
    left: 63%;
`;
const StyledEllipseBottomLeft = styled(StyledSmallEllipse)`
    top: 102.5%;
    left: 93%;
`;
const StyledEllipseTopRight = styled(StyledSmallEllipse)`
    top: 37%;
    left: 89%;
`;
export {
    StyledRobotBackground,
    StyledBackgroundSection,
    StyledRobotImg,
    StyledEllipseTopLeft,
    StyledEllipseTopRight,
    StyledEllipseBottomLeft,
    StyledBigEllipse,
    StyledHollowCircle,
    StyledUiUxImg,
    StyledRevelLogoImg
}