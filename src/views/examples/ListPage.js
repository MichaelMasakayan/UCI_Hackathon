
import React from "react";
// react plugin used to create charts
import { Line } from "react-chartjs-2";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  ListGroupItem,
  ListGroup,
  Container,
  Row,
  Col,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import Footer from "components/Footer/Footer.js";

import bigChartData from "variables/charts.js";

export default function ListPage() {
  React.useEffect(() => {
    document.body.classList.toggle("landing-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("landing-page");
    };
  }, []);
  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <section className="section section-lg">
          <section className="section">
            <img
              alt="..."
              className="path"
              src={require("assets/img/path4.png")}
            />

          </section>
        </section>
        <section className="section section-lg">
          <img
            alt="..."
            className="path"
            src={require("assets/img/path4.png")}
          />
          <img
            alt="..."
            className="path2"
            src={require("assets/img/path5.png")}
          />
          <img
            alt="..."
            className="path3"
            src={require("assets/img/path2.png")}
          />
        </section>
        <div className="d-flex justify-content-center">
      <ul className="list-group w-50">
        <li className="list-group-item d-flex align-items-center">
          <img
            src="https://via.placeholder.com/100x100"
            alt="Placeholder image"
            className="mr-3"
          />
          <div className="d-flex flex-column">
            <span className="mr-auto">List item</span>
            <ul className="list-unstyled">
              <li className="text-muted">Price</li>
              <li className="text-muted">Address</li>
              <li className="text-muted">Date</li>
            </ul>
          </div>
          <div className="ml-auto">
            <Button color="info" style={{fontSize: '0.8em', width: '10em', height: '3em', padding: '0.5em'}}>Message</Button>
          </div>
        </li>
      </ul>
    </div>
    
 

        
        <section className="section section-lg section-coins">
          <img
            alt="..."
            className="path"
            src={require("assets/img/path3.png")}
          />

        </section>
        {/********* END UNNECESSARY FEATURES ********* */}
        <Footer />
      </div>
    </>
  );
}
