import classes from "./NavBar.module.css";
import { Nav, Button} from "react-bootstrap";

const NavBar = () => {
  return (

<div className={classes.navBar}>
   <Nav className="justify-content-center" activeKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Store</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">About</Nav.Link>
      </Nav.Item>
      <Button variant="info">Cart</Button>{' '}
      <Nav.Item></Nav.Item>
    </Nav>
</div>
   
  );
};

export default NavBar;
