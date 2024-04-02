import styled from "styled-components";

const StyledBackgroundSection = styled.div`
    height: 100%;
    width: 100%;
`
const StyledRevelLogoImg = styled.img`
    position: absolute;
    top: 62%;
    left: 56%;
    z-index: 3;
    border-radius: 100px;
    width: 210px;
    height: 65px;
`
const StyledUiUxImg = styled.img`
    position: absolute;
    top: 100%;
    left: 64%;
    z-index: 3;
    border-radius: 100px;
    width: 119px;
    height: 65px;
`

const StyledBigEllipse = styled.div`
    width: 3rem;
    height: 3rem;
    position: absolute;
    top: 27%;
    left: 50%;
    background: linear-gradient(white, black);
    border-radius: 50%;
    filter: blur(0.15rem);
    opacity: 90%;

`

const StyledHollowCircle = styled.img`
    position: absolute;
    width: 32.625rem;
    height: 32.625rem;
    top: 28%;
    left: 63%;
    z-index: 0;
`


const StyledRobot=styled.img`
    position: absolute;
    width: 30rem;
    height: 30rem;
    top: 32%;
    left: 64.5%;
  
`
const StyledRobotBackground = styled(StyledRobot)`
    background-image: linear-gradient(white, black);
    z-index: 1;
    border-radius: 50%;
    padding: 0;
   
`
const StyledRobotImg = styled(StyledRobot)`
    z-index: 2;
`
const StyledSmallEllipse = styled.div`
    width: 2.5rem;
    height: 2.5rem;
    z-index: 3;
    background: linear-gradient(white, black);
    border-radius: 50%;
    position: absolute;
    filter: blur(0.15rem);
    opacity: 90%;
`
const StyledEllipseTopLeft = styled(StyledSmallEllipse)`
    top: 78%;
    left: 61.8%;

`
const StyledEllipseBottomLeft = styled(StyledSmallEllipse)`
    top: 110%;
    left: 92%;

`
const StyledEllipseTopRight = styled(StyledSmallEllipse)`
    top: 28%;
    left: 90%;

`
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