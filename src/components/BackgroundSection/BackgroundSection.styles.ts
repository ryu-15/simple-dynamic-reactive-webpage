import styled from "styled-components";

const StyledBackgroundSection=styled.div`
    height: 100%;
    width: 100%;
`
const StyledRevelLogoImg=styled.img`
    position: absolute;
    top:60%;
    left: 50%;
    z-index: 1;
    border-radius: 100px;
`
const StyledUiUxImg=styled.img`
    position: absolute;
    top: 100%;
    left: 60%;
    z-index: 1;
    border-radius: 100px;
`

/*background image css*/
const StyledEllipse=styled.img`
    width:2.7rem;
    height: 2.7rem;
    z-index: 1;
`

const StyledRobot=styled.img`
    position: absolute;
    opacity: 30%;
    width:34rem;
    height: 34rem;
    top: 24%;
    left: 60%;
    z-index: 1;
`
const StyledBigEllipse=styled.img`
    width: 3.5rem;
    height:3.5rem;
    position: absolute;
    top: 25%;
    left: 46%;
    border-radius: 50%;
`

const StyledHollowCircle=styled.img`
    position: absolute;
    width: 40.625rem;
    height: 40.625rem;
    top: 12%;
    left: 57%;
    z-index: 0;
`

export {StyledBackgroundSection,StyledRobot,StyledEllipse,StyledBigEllipse,StyledHollowCircle,StyledUiUxImg,StyledRevelLogoImg}

/*.background-small-1-ellipse {
    position: absolute;
    top: 18%;
    left: 93%;
}

.background-small-2-ellipse {
    position: absolute;
    top: 84%;
    left: 97%;
}

.background-small-3-ellipse {
    position: absolute;
    top: 80%;
    left: 56%;
    z-index: 1000;
}*/