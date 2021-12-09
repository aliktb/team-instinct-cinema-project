import "../css/NavBar.css";
import logo from "../resources/QACinema1.png";
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
      <Navbar class="color" expand="md" light>
        <NavbarBrand href="/">
          <img src={logo} alt="logo" class="image" />
        </NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/Listings_Gallery/">
                <h4>Listings Gallery</h4>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/New_Listings">
                <h4>New Listings</h4>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/Bookings">
                <h4>Bookings</h4>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/DiscussionBoard">
                <h4>Discussion Boards</h4>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/Film_Classification">
                <h4>Film Classification</h4>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/Search">
                <h4>Search Films</h4>
              </NavLink>
            </NavItem>

            <UncontrolledDropdown inNavbar nav>
              <DropdownToggle caret nav>
                <h4>More</h4>
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href="/About">About us</DropdownItem>
                <DropdownItem href="/Opening_Times">Opening Times</DropdownItem>
                <DropdownItem href="/Screens">Screens</DropdownItem>
                <DropdownItem href="/Getting_Here">Getting here</DropdownItem>
                <DropdownItem href="/Places_to_go">Places to go</DropdownItem>
                <DropdownItem href="/Contact_us">Contact us</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>
            {" "}
            <h5>Come join us for a film!</h5>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navigationbar;
