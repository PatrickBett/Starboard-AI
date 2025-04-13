import React, { useState } from 'react';
import { Container, Row, Col, Dropdown, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  // Options for dropdowns
  const options = [
    'Select',
    'Average Wage',
    'Top Employers',
    'Infra Projects',
    'Utility Costs'
  ];

  // State for tracking selected values
  const [selectedValues, setSelectedValues] = useState({
    dropdown1: 'Add Data Point',
    dropdown2: 'Average Wage',
    dropdown3: 'Top Employers',
    dropdown4: 'Infra Projects',
    dropdown5: 'Utility Costs',
    dropdown6: 'Select',
    dropdown7: 'Select',
    dropdown8: 'Select'
  });

  // Handle selection
  const handleSelect = (key, value) => {
    setSelectedValues({
      ...selectedValues,
      [key]: value
    });
  };

  // Custom dropdown component
  const CustomDropdown = ({ id, title, options }) => {
    return (
      <Dropdown className="w-100 mb-2">
        <Dropdown.Toggle
          variant="light"
          id={id}
          className="w-100 text-start d-flex justify-content-between align-items-center"
          style={{ borderColor: '#ced4da', backgroundColor: 'white' }}
        >
          {selectedValues[id]}
        </Dropdown.Toggle>
        <Dropdown.Menu className="w-100">
          {options.map((option, index) => (
            <Dropdown.Item 
              key={index} 
              onClick={() => handleSelect(id, option)}
            >
              {option}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    );
  };

  return (
    <Container className="mt-5">
      <Row className="align-items-center">
        <Col md={6}>
          <div className="text-center mb-5">
            {/* Dark version of the logo */}
            <div className="mb-4">
              <div className="mx-auto" style={{ width: '120px', height: '120px' }}>
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="45" fill="#D3D3E7" />
                  <path d="M50,50 L50,15 A35,35 0 0,1 80,65 Z" fill="#1E1E54" />
                  <path d="M50,50 L80,65 A35,35 0 0,1 20,65 Z" fill="#1E1E54" />
                  <path d="M50,50 L20,65 A35,35 0 0,1 50,15 Z" fill="#1E1E54" />
                  <circle cx="50" cy="50" r="8" fill="#1E1E54" />
                </svg>
              </div>
              <h2 className="mt-3" style={{ color: '#1E1E54', fontWeight: 'bold' }}>STARBOARD</h2>
            </div>
            
            {/* Light version of the logo */}
            <div>
              <div className="mx-auto" style={{ width: '120px', height: '120px' }}>
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="45" fill="#1E1E54" />
                  <path d="M50,50 L50,15 A35,35 0 0,1 80,65 Z" fill="#D3D3E7" />
                  <path d="M50,50 L80,65 A35,35 0 0,1 20,65 Z" fill="#D3D3E7" />
                  <path d="M50,50 L20,65 A35,35 0 0,1 50,15 Z" fill="#D3D3E7" />
                  <circle cx="50" cy="50" r="8" fill="#D3D3E7" />
                </svg>
              </div>
              <h2 className="mt-3" style={{ color: '#D3D3E7', fontWeight: 'normal' }}>STARBOARD</h2>
            </div>
          </div>
        </Col>
        
        <Col md={6}>
          <div className="mb-3" style={{ color: '#9370DB', fontWeight: 'bold' }}>
            <span className="me-2">◆</span>
            dropdown menu
          </div>
          
          <Card className="border-dashed" style={{ borderStyle: 'dashed', borderWidth: '2px', borderColor: '#A8A8F0', borderRadius: '12px', padding: '20px' }}>
            <Card.Body>
              <Row className="mb-4">
                <Col md={4}>
                  <CustomDropdown id="dropdown1" title="Add Data Point" options={options} />
                </Col>
                <Col md={4}>
                  <CustomDropdown id="dropdown2" title="Average Wage" options={options} />
                </Col>
                <Col md={4}>
                  <CustomDropdown id="dropdown3" title="Top Employers" options={options} />
                </Col>
              </Row>
              
              <Row className="mb-4">
                <Col md={4}>
                  <CustomDropdown id="dropdown4" title="Infra Projects" options={options} />
                </Col>
                <Col md={4}>
                  <CustomDropdown id="dropdown5" title="Utility Costs" options={options} />
                </Col>
              </Row>
              
              <div className="text-center mb-3">
                <div style={{ backgroundColor: '#F8F9FA', padding: '8px', borderRadius: '4px' }}>
                  <span>Average Wage</span>
                </div>
              </div>
              
              <Row className="mb-4">
                <Col md={4}>
                  <CustomDropdown id="dropdown6" title="Select" options={options} />
                </Col>
                <Col md={4}>
                  <CustomDropdown id="dropdown7" title="Select" options={options} />
                </Col>
                <Col md={4}>
                  <CustomDropdown id="dropdown8" title="Select" options={options} />
                </Col>
              </Row>
              
              <div className="text-center">
                <div style={{ backgroundColor: '#F5E6FF', padding: '8px', borderRadius: '4px' }}>
                  {/* This is the purple box at the bottom */}
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;