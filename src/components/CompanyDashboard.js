// src/components/CompanyDashboard.js
import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

function CompanyDashboard() {
  return (
    <div>
      <h1>Interactive Company Dashboard</h1>
      <Row className="mt-4">
        <Col md={4} className="mb-3">
          <Card className="text-center shadow-sm">
            <Card.Body>
              <Card.Title>Order Processing Speed</Card.Title>
              <Card.Text>Average: 1.5 hours</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-3">
          <Card className="text-center shadow-sm">
            <Card.Body>
              <Card.Title>Inventory Accuracy</Card.Title>
              <Card.Text>99.5%</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-3">
          <Card className="text-center shadow-sm">
            <Card.Body>
              <Card.Title>Cost Reduction</Card.Title>
              <Card.Text>30% lower operational costs</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default CompanyDashboard;
