import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CardInfo from "./CardInfo";
import React from 'react';
import { Row,Col,Container } from 'reactstrap';
import './App.css';

export default function App() {
  let  details =[
    {
      title: "FREE",
      price: "$0",
      lists: [{ text: "Unlimited Users", checked: true },
        { text: "150GB Storage", checked: true },
        { text: "Unlimited Public Projects", checked: true },
        { text: "Community Access", checked: true },
        { text: "Unlimited Private Projects", checked: false },
        { text: "Dedicated Phone Support", checked: false },
        { text: "Free Subdomain", checked: false },
        { text: "Monthly Status Reports", checked: false },


      ]

     
    },
    {
      title: "PLUS",
      price: "$9",
      lists: [{ text: "Unlimited Users", checked: true },
                { text: "150GB Storage", checked: true },
                { text: "Unlimited Public Projects", checked: true },
                { text: "Community Access", checked: true },
                { text: "Unlimited Private Projects", checked: true },
                { text: "Dedicated Phone Support", checked: true },
                { text: "Free Subdomain", checked: true },
                { text: "Monthly Status Reports", checked: false },
             ]
    },
      
    {
      title: "PRO",
      price: "$49",
      lists: [{ text: "Unlimited Users", checked: true },
      { text: "150GB Storage", checked: true },
      { text: "Unlimited Public Projects", checked: true },
      { text: "Community Access", checked: true },
      { text: "Unlimited Private Projects", checked: true },
      { text: "Dedicated Phone Support", checked: true },
      { text: "Free Subdomain", checked: true },
      { text: "Monthly Status Reports", checked: true },
      ]
    }
     
  ];
  return (
    <section class="pricing py-4">
      <Container>
            <Row xs="3">
              {details.map((data) => {
                return (
                  <Col className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-5" key={data.id}>
                    <CardInfo data={data} key={data.id} />
                  </Col>
                );
              })}
            </Row>
            </Container>
  
      </section>
    
  );
}


