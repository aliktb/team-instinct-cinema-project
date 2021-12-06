import { Navbar, NavLink, NavItem, UncontrolledDropdown, DropdownItem, NavbarText, NavbarBrand, NavbarToggler, DropdownToggle, Collapse, Nav, DropdownMenu } from 'reactstrap';
import '../css/Navigationbar.css';

const Navigationbar = () => {
    return (
        <div>
        <header>
            <Navbar
                color="light"
                expand="md"
                light
            >
                <NavbarBrand class="logo" href="/">
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
                                <li href="#"><a>Listing Gallery</a></li>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="....">
                                <li href="#"><a>New Listings</a></li>
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink href="....">
                            <li href="#"><a>Bookings</a></li>
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink href="....">
                                <li href="#"><a>Dsicussion Board</a></li>
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
    </header>
        </div>


    );
}

export default Navigationbar;