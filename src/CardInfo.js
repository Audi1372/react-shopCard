import { Card, CardBody, CardTitle, Button, CardSubtitle, CardHeader } from "reactstrap";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from '@fortawesome/free-solid-svg-icons'
 import { faTimes } from '@fortawesome/free-solid-svg-icons'
import "./style.css";


export default function CardInfo({ data }) {
  console.log({ data });
  let { title, price, lists = [] } = data;
   
  return (
    <Card className="card">

          <CardHeader className="head">
                <CardTitle tag="h6" className="text-muted">{title}</CardTitle>
                <CardSubtitle className="mb-2" tag="h3">
                {price}<span className="period text-muted">/month</span>
                </CardSubtitle>
               
        </CardHeader>
        
        <CardBody className="body">
             <ul className="fa-ul">
                  {lists.map(({ text, checked }) => (checked) ?
                      <li className=""><FontAwesomeIcon icon={faCheck} className="icons"/>{text}</li> : 
                      <li className= "text-muted"><FontAwesomeIcon icon={faTimes} className="icons" />{text}</li>)}
          
            </ul>

        <Button varient="primary" className="btn">Button</Button>
      </CardBody>
    </Card>
  );
}