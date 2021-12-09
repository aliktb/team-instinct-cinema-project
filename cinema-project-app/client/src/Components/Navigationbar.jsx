import "../css/NavBar.css"
import logo from "../resources/QACinema1.png"
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
      
      
      <Navbar class="color"  expand="md" light>
        <NavbarBrand href="/"><img src={logo} alt="logo" class="image" /></NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/Listings_Gallery/" ><h4>Listings Gallery</h4></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/New_Listings"><h4>New Gallery</h4></NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/Bookings"><h4>Bookings</h4></NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/DiscussionBoard"><h4>Discussion Boards</h4></NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/Film_Classification">
                <h4>Film Classification</h4>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/Search">
                <h4>Search Page</h4>
              </NavLink>
            </NavItem>

            <UncontrolledDropdown inNavbar nav>
              <DropdownToggle caret nav>
                <h4>About Us</h4>
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href="/About"><h4>About Us</h4></DropdownItem>
                <DropdownItem href="/Getting_Here"><h4>Getting There</h4></DropdownItem>
                <DropdownItem href="/Places_to_go"><h4>Places To Go</h4></DropdownItem>
                <DropdownItem href="/Contact_us"><h4>Contact Us</h4></DropdownItem>
                <DropdownItem href="/Opening_Times"><h4>Opening</h4></DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText> <h5>Come join us for a film!</h5></NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navigationbar;
