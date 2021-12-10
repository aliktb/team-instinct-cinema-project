import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";

const GalleryFooter = () => {
  return (
    <div style={{ position: "absolute;", bottom: "0px", width: "100%" }}>
      <ListGroup>
        <ListGroupItem color="secondary">
          <Link to="/"> Home </Link>
        </ListGroupItem>
        <ListGroupItem color="secondary">
          <Link to="/About"> About Us </Link>
        </ListGroupItem>
        <ListGroupItem color="secondary">
          <Link to="/Getting_Here"> Getting Here </Link>
        </ListGroupItem>
        <ListGroupItem color="secondary">
          <Link to="/Places_to_go"> Places to go </Link>
        </ListGroupItem>
        <ListGroupItem color="secondary">
          <Link to="/Contact_us"> Contact Us </Link>
        </ListGroupItem>
        <ListGroupItem>
          © QA Cinemas Limited 2019 to 2021. All rights reserved
        </ListGroupItem>
      </ListGroup>
    </div>
  );
};

export default GalleryFooter;
