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
                            <NavLink href="/newlistings">
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
                                Film Classifications
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
                                    about us
                                </DropdownItem>
                                <DropdownItem>
                                    Getting here
                                </DropdownItem>
                                <DropdownItem>
                                    Places to go
                                </DropdownItem>
                                <DropdownItem>

                                    Contact us
                                </DropdownItem>

                                <DropdownItem>

                                    Help
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