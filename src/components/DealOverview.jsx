import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Row, Col, Dropdown, ButtonGroup, Navbar, Nav, Container, Modal, Button, Form } from 'react-bootstrap';

const DealCard = ({ propertyName, address, tenant, rentPSF, leaseTerm, size, financing }) => (
  <Card className="mb-4 shadow-sm">
    <Card.Body>
      <Card.Title>{propertyName}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{address}</Card.Subtitle>
      <Card.Text>
        <strong>Tenant:</strong> {tenant}<br />
        <strong>Rent PSF:</strong> ${rentPSF}<br />
        <strong>Lease Term:</strong> {leaseTerm}<br />
        <strong>Size:</strong> {size}<br />
        <strong>Assumable Financing:</strong> {financing ? 'Yes' : 'No'}
      </Card.Text>
      <Button variant="outline-primary" size="sm">View Details</Button>
    </Card.Body>
  </Card>
);

const FilterDropdown = ({ title }) => (
  <Dropdown as={ButtonGroup} className="me-2 mb-2">
    <Dropdown.Toggle variant="outline-primary">{title}</Dropdown.Toggle>
    <Dropdown.Menu>
      <Dropdown.Item>Average Wage</Dropdown.Item>
      <Dropdown.Item>Top Employers</Dropdown.Item>
      <Dropdown.Item>Infra Projects</Dropdown.Item>
      <Dropdown.Item>Utility Costs</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
);

const DealOverview = () => {
  const [showModal, setShowModal] = useState(false);
  const [file, setFile] = useState(null);

  const handleUpload = (e) => {
    e.preventDefault();
    if (file) {
      alert(`File "${file.name}" uploaded successfully.`);
      setShowModal(false);
    }
  };

  return (
    <div>


      {/* Filter Section */}
      <Container>
        <h2 className="mb-4">Deal Overview</h2>
        <div className="d-flex flex-wrap">
          <FilterDropdown title="Select" />
          <FilterDropdown title="Average Wage" />
          <FilterDropdown title="Top Employers" />
          <FilterDropdown title="Infra Projects" />
          <FilterDropdown title="Utility Costs" />
        </div>

        {/* Deal Cards */}
        <Row className="mt-4">
          <Col md={6} lg={4}>
            <DealCard
              propertyName="Starboard Plaza"
              address="123 Harbor Lane, Miami, FL"
              tenant="Target"
              rentPSF={45}
              leaseTerm="10 years"
              size="15,000 sqft"
              financing={true}
            />
          </Col>
          <Col md={6} lg={4}>
            <DealCard
              propertyName="Dockside Tower"
              address="456 Bayfront Ave, Tampa, FL"
              tenant="Amazon"
              rentPSF={38}
              leaseTerm="8 years"
              size="22,000 sqft"
              financing={false}
            />
          </Col>
        </Row>
      </Container>

      {/* Upload Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Upload Offering Memorandum</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleUpload}>
          <Modal.Body>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Select a PDF file</Form.Label>
              <Form.Control type="file" accept=".pdf" onChange={(e) => setFile(e.target.files[0])} required />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
            <Button variant="primary" type="submit">Upload</Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
};

export default DealOverview;
