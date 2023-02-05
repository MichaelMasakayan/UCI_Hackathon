import React from "react";
import { Link } from 'react-router-dom';
// reactstrap components
import {
  Button
} from "reactstrap";

export default function ListComponent(props) {
  return (
    <>
    <ul className="list-group w-50">
        <li className="list-group-item d-flex align-items-center">
          <img
            src= {props.houseImg}
            alt="Placeholder image"
            className="mr-3"
            style={{maxWidth: "100px", maxHeight: "100px"}}
          />
          <div className="d-flex flex-column">
            <ul className="list-unstyled">
              <li className="text-muted">Date: {props.houseDate}</li>
              <li className="text-muted">Price: {props.housePrice}</li>
              <li className="text-muted">Address: {props.houseAddress}</li>
            </ul>
          </div>
          <div className="ml-auto">
            <Button color="info" tag={Link} to='/HouseDescription' style={{fontSize: '0.8em', width: '10em', height: '3em', padding: '0.5em'}}>Info</Button>
          </div>
        </li>
      </ul>
      
    </>
  )
}
