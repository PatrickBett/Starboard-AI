import React, { useState } from 'react';
import { Container, Form, Row, Col, Button, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const DealCriteria = () => {
  // State for the range slider
  const [priceRange, setPriceRange] = useState([50000000, 120000000]);
  
  // State for IRR target
  const [irrTarget, setIrrTarget] = useState('10%');
  
  // State for selected data points
  const [selectedDataPoints, setSelectedDataPoints] = useState({
    'Return on Cost': true,
    'Nearest Urban Center': true,
    'Average Household Income': true,
    'Tenants': true,
    'Cash-on-Cash': true,
    'Population Growth Rate': true,
    'WALT': true,
    'Return on Equity': true,
    'Unemployment Rate': true,
    'Occupancy Rate': true
  });

  // Handle checkbox changes
  const handleCheckboxChange = (dataPoint) => {
    setSelectedDataPoints({
      ...selectedDataPoints,
      [dataPoint]: !selectedDataPoints[dataPoint]
    });
  };

  // Handle price range change
  const handlePriceRangeChange = (e) => {
    setPriceRange([
      parseInt(e.target.value, 10),
      priceRange[1]
    ]);
  };

  // Format currency
  const formatCurrency = (value) => {
    return `$${value.toLocaleString()}`;
  };

  return (
    <Container className="py-4">
      <div className="border-bottom pb-3 mb-4">
        <h5 className="mb-1 fw-bold">Deal Screening Parameters</h5>
        <p className="text-secondary small">Select the data points that appear on the deal screening page.</p>
      </div>
      
      {/* Data Points Selection */}
      <Row className="mb-4">
        <Col md={4}>
          <div className="mb-2">
            <Form.Check 
              type="checkbox" 
              id="return-on-cost"
              label="Return on Cost"
              checked={selectedDataPoints['Return on Cost']}
              onChange={() => handleCheckboxChange('Return on Cost')}
              className="mb-2"
            />
            <Form.Check 
              type="checkbox" 
              id="nearest-urban-center"
              label="Nearest Urban Center"
              checked={selectedDataPoints['Nearest Urban Center']}
              onChange={() => handleCheckboxChange('Nearest Urban Center')}
              className="mb-2"
            />
            <Form.Check 
              type="checkbox" 
              id="average-household-income"
              label="Average Household Income"
              checked={selectedDataPoints['Average Household Income']}
              onChange={() => handleCheckboxChange('Average Household Income')}
              className="mb-2"
            />
            <Form.Check 
              type="checkbox" 
              id="tenants"
              label="Tenants"
              checked={selectedDataPoints['Tenants']}
              onChange={() => handleCheckboxChange('Tenants')}
            />
          </div>
        </Col>
        
        <Col md={4}>
          <div className="mb-2">
            <Form.Check 
              type="checkbox" 
              id="cash-on-cash"
              label="Cash-on-Cash"
              checked={selectedDataPoints['Cash-on-Cash']}
              onChange={() => handleCheckboxChange('Cash-on-Cash')}
              className="mb-2"
            />
            <Form.Check 
              type="checkbox" 
              id="population-growth-rate"
              label="Population Growth Rate"
              checked={selectedDataPoints['Population Growth Rate']}
              onChange={() => handleCheckboxChange('Population Growth Rate')}
              className="mb-2"
            />
            <Form.Check 
              type="checkbox" 
              id="walt"
              label="WALT"
              checked={selectedDataPoints['WALT']}
              onChange={() => handleCheckboxChange('WALT')}
            />
          </div>
          
          <Dropdown className="mt-3">
            <Dropdown.Toggle variant="outline-secondary" size="sm" id="add-data-point">
              Add Data Point
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#">Cap Rate</Dropdown.Item>
              <Dropdown.Item href="#">NOI</Dropdown.Item>
              <Dropdown.Item href="#">Debt Yield</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        
        <Col md={4}>
          <div className="mb-2">
            <Form.Check 
              type="checkbox" 
              id="return-on-equity"
              label="Return on Equity"
              checked={selectedDataPoints['Return on Equity']}
              onChange={() => handleCheckboxChange('Return on Equity')}
              className="mb-2"
            />
            <Form.Check 
              type="checkbox" 
              id="unemployment-rate"
              label="Unemployment Rate"
              checked={selectedDataPoints['Unemployment Rate']}
              onChange={() => handleCheckboxChange('Unemployment Rate')}
              className="mb-2"
            />
            <Form.Check 
              type="checkbox" 
              id="occupancy-rate"
              label="Occupancy Rate"
              checked={selectedDataPoints['Occupancy Rate']}
            />
          </div>
        </Col>
      </Row>
      
      {/* Financial Criteria */}
      <div className="mb-4">
        <h5 className="mb-3 fw-bold">Financial Criteria</h5>
        
        <div className="mb-4">
          <label className="form-label">Target IRR</label>
          <Form.Control 
            type="text" 
            value={irrTarget} 
            onChange={(e) => setIrrTarget(e.target.value)}
            className="mb-2"
            style={{ maxWidth: '100px' }}
          />
          <Form.Check 
            type="checkbox" 
            id="set-range"
            label="Set range"
          />
        </div>
        
        <div className="mb-4">
          <label className="form-label">Price Range</label>
          <div className="d-flex align-items-center gap-2">
            <span>{formatCurrency(priceRange[0])}</span>
            <Form.Range 
              min={1000000} 
              max={200000000} 
              step={1000000}
              value={priceRange[0]}
              onChange={handlePriceRangeChange}
              className="mx-2 flex-grow-1"
            />
            <span>{formatCurrency(priceRange[1])}</span>
          </div>
        </div>
      </div>
      
      <Button variant="dark" size="sm" className="px-4">
        Save Settings
      </Button>
    </Container>
  );
};

export default DealCriteria;