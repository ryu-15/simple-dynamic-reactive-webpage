import styled from "styled-components";

const StyledBackgroundSection=styled.div`
    height: 100%;
    width: 100%;
`
const StyledRevelLogoImg=styled.img`
    position: absolute;
    top:60%;
    left: 50%;
    z-index: 3;
    border-radius: 100px;
`
const StyledUiUxImg=styled.img`
    position: absolute;
    top: 110%;
    left: 55%;
    z-index: 2;
    border-radius: 100px;
`
const StyledRobot=styled.img`
    position: absolute;
    width:37rem;
    height:37rem;
    z-index: 2;
    top: 36%;
    left: 57%;
`
const StyledBigEllipse=styled.div`
    width: 3.5rem;
    height:3.5rem;
    position: absolute;
    top: 25%;
    left: 46%;
    background: linear-gradient(white, black);
    border-radius: 50%;
    filter:blur(0.15rem);
    opacity: 90%;
    
`

const StyledHollowCircle=styled.img`
    position: absolute;
    width: 40.625rem;
    height: 40.625rem;
    top: 30%;
    left: 55%;
    z-index: 0;
`

export {StyledRobotBackground,StyledBackgroundSection,StyledRobot,StyledEllipseTopLeft,StyledEllipseTopRight,StyledEllipseBottomLeft,StyledBigEllipse,StyledHollowCircle,StyledUiUxImg,StyledRevelLogoImg}
const StyledRobotBackground=styled.div`
    position: absolute;
    background: linear-gradient(white, black);
    width:37rem;
    opacity: 100%;
    height: 37rem;
    top: 36%;
    left: 57%;
    z-index: 1;
    border-radius: 50%;
    padding: 0;
`

const StyledEllipseTopLeft=styled.div`
    width:2.7rem;
    height: 2.7rem;
    z-index: 1;
    background: linear-gradient(white, black);
    border-radius: 50%;
     position: absolute;
    top: 80%;
    left: 54%;
    filter:blur(0.15rem);
    opacity: 90%;
`
const StyledEllipseBottomLeft=styled.div`
    width:2.7rem;
    height: 2.7rem;
    z-index: 1;
    background: linear-gradient(white, black);
    border-radius: 50%;
     position: absolute;
    top: 125%;
    left: 91.5%;
    filter:blur(0.15rem);
    opacity: 90%;
`
const StyledEllipseTopRight=styled.div`
    width:2.7rem;
    height: 2.7rem;
    z-index: 1;
    background: linear-gradient(white, black);
    border-radius: 50%;
    position: absolute;
    top: 40%;
    left: 93%;
    filter:blur(0.15rem);
    opacity: 90%;
`