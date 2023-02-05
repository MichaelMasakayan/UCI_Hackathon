import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

export default function HomeNavbar() {
  const [color, setColor] = React.useState("navbar-transparent");
  React.useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return function cleanup() {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);
  const changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      setColor("bg-info");
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      setColor("navbar-transparent");
    }
  };

  return (
    <Navbar className={"fixed-top " + color} color-on-scroll="100">
      <Container className="mx-auto">
        <div className="navbar-translate">
          <NavbarBrand className="mx-auto" to="/" id="navbar-brand" tag={Link}>
            <img alt= "logo" src={require("assets/img/openhouse-logo.png")} style={{ height: 40, width: 40, marginRight: 10 }} />
            <span>OpenHouse</span>
          </NavbarBrand>
        </div>
      </Container>
    </Navbar>
  );
}
