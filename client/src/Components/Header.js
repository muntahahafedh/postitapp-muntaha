import { Navbar, Nav, NavItem, NavLink } from "reactstrap";
import logo from "../Images/logo-t.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar className="header">
        <Nav>
          <NavItem>
            <img src={logo} />
          </NavItem>

          <NavItem>
            <Link to="Home">Home</Link>
          </NavItem>

          <NavItem>
            <Link to="Profile">Profile</Link>
          </NavItem>

          <NavItem>
            <Link to="Logout">Logout</Link>
          </NavItem>
        </Nav>
      </Navbar>
    </>
  );
};

export default Header;
