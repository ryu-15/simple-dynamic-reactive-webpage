import styled from "styled-components";

const StyledBackgroundSection = styled.div`
    width: 100%;
height:100%;
    position: absolute;
    
`;
const StyledRevelLogoImg = styled.img`
    position: absolute;
    z-index: 3;
    border-radius: 6.25rem;
    width: 13.125rem;
    height: 4.062rem;
    top:80%;
    right:85%;
   
`;
const StyledUiUxImg = styled.img`
    position: absolute;
    z-index: 3;
    border-radius: 6.25rem;
    width: 7.438rem;
    height: 4.063rem;
    top:127%;
    right: 75%;
`;
const StyledBigEllipse = styled.div`
    width: 3rem;
    height: 3rem;
    position: absolute;
    background: linear-gradient(white, black);
    border-radius: 50%;
    filter: blur(0.15rem);
    opacity: 90%;
    top: 40%;
    right:150%;
   
`;
const StyledHollowCircle = styled.img`
    width: 27.063rem;
    height: 27.063rem;
    z-index: 0;
    top: 51%;
    right: -5.5%;
    left:-3%;
    position: absolute;
    
`;
const StyledRobot=styled.img`
    position: absolute;
    width: 24.814rem;
    height: 24.814rem;
    top:55%;
    left: 1.5%;
`;
const StyledRobotWrapper=styled.div`
    width: 24.814rem;
    height: 24.814rem; 
    position: relative;
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
    
   top:47%;
    right: 11%;//top right
`;
const StyledEllipseBottomLeft = styled(StyledSmallEllipse)`
   top:108%;
    right:98%;
`;
const StyledEllipseTopRight = styled(StyledSmallEllipse)`
 top:136%;
    left:89%;
//bottom left
    
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
    StyledRevelLogoImg,StyledRobotWrapper
}