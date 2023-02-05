/*!

=========================================================
* BLK Design System React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import classnames from "classnames";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Label,
  FormGroup,
  Form,
  Input,
  FormText,
  NavItem,
  NavLink,
  Nav,
  Table,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  UncontrolledCarousel
} from "reactstrap";
import Tabs from "views/IndexSections/Tabs.js";

// core components
import AppNavbar from "components/Navbars/AppNavbar.js";
import Footer from "components/Footer/Footer.js";
const carouselItems = [
  {
    
    src: require("assets/img/house1/house1pict1.png"),
    altText: "Slide 1",
    caption: ""
    
  },
  {
    src: require("assets/img/house1/house1pict2.png"),
    altText: "Slide 2",
    caption: ""
   
    
  },
  {
    src: require("assets/img/house1/house1pict3.png"),
    altText: "Slide 3",
    caption: ""
    
  }
];


  
let ps = null;

export default function HouseDescription() {
  const [iconTabs, setIconsTabs] = React.useState(1);
  const [textTabs, setTextTabs] = React.useState(4);
  const [tabs, setTabs] = React.useState(1);
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      document.documentElement.className += " perfect-scrollbar-on";
      document.documentElement.classList.remove("perfect-scrollbar-off");
      let tables = document.querySelectorAll(".table-responsive");
      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i]);
      }
    }
    document.body.classList.toggle("profile-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
        document.documentElement.className += " perfect-scrollbar-off";
        document.documentElement.classList.remove("perfect-scrollbar-on");
      }
      document.body.classList.toggle("profile-page");
    };
  }, []);
  return (
    <>
     <AppNavbar />
      <div className="wrapper">
        <div className="page-header " >
          <img
            alt="..."
            className="dots"
            src={require("assets/img/dots.png")}
          />
            <countainer >
          <img alt="..."
            className="path"
            src={require("assets/img/path4.png") }
            style={{
              width: 500,
              verticalAlign: "middle"
            }}
             />
            </countainer>
            <div className="section">
              {/* carousel section */}
            <Container>
              {/* this would add a small tittle before the carousel */}
          {/* <div className="title">
            <h3>Carousel</h3>
          </div> */}
          
          <Row>
            {/* md is the size of the column */}
          <Col class="col align-self-start"lg="6">
              <UncontrolledCarousel
                items={carouselItems}
                indicators={false}
                autoPlay={false}
              />
            </Col>
            
           <Col className="col align-self-end">
  <Card style={{padding:15}}>
  <h1 className="text-white font-weight-light" style={{padding:20}}>8 Deodar, Irvine, CA 92604</h1>
  <Row className="align-items-center ">
    <Col >
      <h3>Price: 2,399,900</h3> 
    </Col>
    <Col >
      <h3>Date: 05/10/2023 </h3>
    </Col>
  </Row>
  <Row className="align-items-center " style={{padding:10}}>
    <Col >
      <h6>BATHROOMS: 5.5</h6> 
    </Col>
    <Col >
      <h6>BEDROOMS: 4 </h6>
    </Col>
    <Col >
      <h6>SQ FT: 1557</h6>
    </Col>
  </Row>
 
  <div className="">
    <h3>Description: </h3>
    <div >
      <div>
        <p  style={{padding:20}}>We're pleased to present the opportunity to acquire a gem in highly demanded Irvine, CA. Open layout with view from front door to backyard. Features include wood plank floors in the entire home, quartz countertops and custom island in the kitchen, stainless steel appliances, upgraded lighting throughout the home, all bedrooms have remote controlled ceiling fans with lights, dual-pane windows with strong sound barrier and insulation.</p>
       <div> 
        </div>
      </div>
    </div>
  </div>

  </Card>
</Col>
          </Row>
        </Container>
        
        <Container>
       
          </Container>
      </div>
        </div>
        <Footer />
      </div>
     
    </>

  );
}