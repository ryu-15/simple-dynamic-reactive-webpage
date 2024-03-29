import {
    StyledBtnContainer, StyledButtonBlack, StyledButtonBlue,
    StyledNavAnchor,
    StyledNavbar,
    StyledNavItem,
    StyledNavLi,
    StyledRevelLogo
} from "./Navbar.styles.ts";

const NavBar = () => {
    return (
        <StyledNavbar>
            <StyledNavItem>
                <StyledNavLi><StyledNavAnchor href='#'>Home</StyledNavAnchor></StyledNavLi>
                <StyledNavLi><StyledNavAnchor href='#'>About</StyledNavAnchor></StyledNavLi>
                <StyledNavLi><StyledNavAnchor href='#'>Features</StyledNavAnchor></StyledNavLi>
            </StyledNavItem>
            <StyledRevelLogo>REVEL</StyledRevelLogo>
            <StyledBtnContainer>
                <StyledButtonBlack>Button text</StyledButtonBlack>
                <StyledButtonBlue>Button text</StyledButtonBlue>
            </StyledBtnContainer>
        </StyledNavbar>
    );
};

export default NavBar;
