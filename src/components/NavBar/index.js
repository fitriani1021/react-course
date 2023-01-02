import React from "react";
import {Container, Navbar, NavLink} from "react-bootstrap";
import {StyledNav} from "./style";
import constants from "../../constants";
import {Link} from "react-router-dom";

const menu = [
    { path: constants.ROUTES.COURSE_LIST, text: "Course List" },
    { path: constants.ROUTES.COURSE_TYPE, text: "Course Type List" }
]
const NavBarComp = () => (
    <Navbar bg="light" expand="light" sticky={"top"}>
        <Container>
            <Navbar.Brand>Enigma Course</Navbar.Brand>
            <StyledNav>
                {menu.map((item, index) => (
                    <Link
                        to={item.path}
                        className="nav-link mx-3"
                        key = {index}
                    >
                        {item.text}
                    </Link>
                ))}
            </StyledNav>
        </Container>
    </Navbar>
)

export default NavBarComp;