import {
    StyledBtnContainer, StyledButton,
    StyledNavAnchor,
    StyledNavbar,
    StyledNavItem,
    StyledNavLi,
    StyledRevelLogo
} from "./Navbar.styles.ts";

const NavBar=()=>{
    return (
        <StyledNavbar>
            <StyledNavItem>
                <StyledNavLi><StyledNavAnchor href='#'>Home</StyledNavAnchor></StyledNavLi>
                <StyledNavLi><StyledNavAnchor href='#'>About</StyledNavAnchor></StyledNavLi>
                <StyledNavLi><StyledNavAnchor href='#'>Features</StyledNavAnchor></StyledNavLi>
            </StyledNavItem>
            <StyledRevelLogo>REVEL</StyledRevelLogo>
            <StyledBtnContainer>
                <StyledButton id="sign-btn">Button text</StyledButton>
                <StyledButton id="login-btn">Button text</StyledButton>
            </StyledBtnContainer>
        </StyledNavbar>
    );
};

export default NavBar;
