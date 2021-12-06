import { Navbar, NavLink, NavItem, UncontrolledDropdown, DropdownItem, NavbarText, NavbarBrand, NavbarToggler, DropdownToggle, Collapse, Nav, DropdownMenu } from 'reactstrap';


const Navigationbar = () => {
    return (
        <div>
            <Navbar
                color="light"
                expand="md"
                light
            >
                <NavbarBrand href="/">
                    Cinematic
                </NavbarBrand>
                <NavbarToggler onClick={function noRefCheck() { }} />
                <Collapse navbar>
                    <Nav
                        className="me-auto"
                        navbar
                    >
                        <NavItem>
                            <NavLink href="/components/">
                                Listing Gallery
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="....">
                                New Listings
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink href="....">
                                Bookings
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink href="....">
                                Discussion Board
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink href="....">

                            </NavLink>
                        </NavItem>



                        <UncontrolledDropdown
                            inNavbar
                            nav >
                            <DropdownToggle
                                caret
                                nav
                            >
                                About us
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    getting here
                                </DropdownItem>
                                <DropdownItem>
                                    places to go
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>

                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                    <NavbarText>
                        Come join us for a film!
                    </NavbarText>
                </Collapse>
            </Navbar>
        </div>



    );
}

export default Navigationbar;