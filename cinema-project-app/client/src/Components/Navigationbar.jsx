import {
  Navbar,
  NavLink,
  NavItem,
  UncontrolledDropdown,
  DropdownItem,
  NavbarText,
  NavbarBrand,
  NavbarToggler,
  DropdownToggle,
  Collapse,
  Nav,
  DropdownMenu,
} from "reactstrap";

const Navigationbar = () => {
  return (
    <div>
      <Navbar color="light" expand="md" light>
        <NavbarBrand href="/">QA Cinemas</NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/Listings_Gallery/">Listings Gallery</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/New_Listings">New Listings</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/Bookings">Bookings</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/DiscussionBoard">Discussion Board</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/Film_Classification">
                Film Classifications
              </NavLink>
            </NavItem>

            <UncontrolledDropdown inNavbar nav>
              <DropdownToggle caret nav>
                About us
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href="/About">about us</DropdownItem>
                <DropdownItem href="/Getting_Here">Getting here</DropdownItem>
                <DropdownItem href="/Places_to_go">Places to go</DropdownItem>
                <DropdownItem href="/Contact_us">Contact us</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Come join us for a film!</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navigationbar;
