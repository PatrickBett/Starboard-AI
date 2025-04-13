import React from 'react';
import { Container, Row, Col, Form, Button, Nav, InputGroup } from 'react-bootstrap';
import { ArrowLeft, Search } from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SettingsNav from './SettingsNav';
const Settings = () => {
  return (
    <div className="bg-light min-vh-100">
      
      
      <div className="bg-white p-4 mx-2 min-vh-75 shadow-sm">
        {/* Back Button */}
        <div className="mb-4">
          <Button variant="link" className="text-dark p-0">
            <ArrowLeft size={24} />
          </Button>
        </div>
        
        {/* Navigation Tabs */}
        <div className="d-flex justify-content-between align-items-center mb-4">
        <Link to="/workshop">
  <button className="btn btn-outline-secondary me-2">Workshop</button>
</Link>

<Link to="/pipeline">
  <button className="btn btn-outline-secondary me-2">Pipeline</button>
</Link>

<Link to="/settings">
  <button className="btn btn-outline-secondary">Settings</button>
</Link>
          
          {/* Search Bar */}
          <div className="d-flex align-items-center">
            <InputGroup className="me-3">
              <InputGroup.Text className="bg-white border-end-0">
                <Search />
              </InputGroup.Text>
              <Form.Control
                placeholder="Ask me anything!"
                className="border-start-0"
                style={{ width: '250px' }}
              />
            </InputGroup>
            
            {/* User Avatar */}
            <div className="d-flex flex-column align-items-center">
              <div className="rounded-circle bg-dark d-flex align-items-center justify-content-center" 
                style={{ width: '40px', height: '40px' }}>
                <span className="text-white">S</span>
              </div>
              <small className="text-secondary" style={{ fontSize: '10px' }}>STARBOARD</small>
            </div>
          </div>
        </div>
        
        {/* Settings Header */}
        <div className="mb-4">
          <h3 className="mb-1">Settings</h3>
          <p className="text-secondary">Manage your account settings and set deal criteria.</p>
          <hr />
        </div>
        
        {/* Main Content */}
        <Row>
          {/* Left Sidebar with Navigation Links */}
          <Col md={3}>
            <Nav className="flex-column">
              <Nav.Link 
                as={Link} 
                to="/settings/account" 
                className="text-dark fw-bold mb-2 px-0 py-1"
              >
                Account
              </Nav.Link>
              <Nav.Link 
                as={Link} 
                to="/settings/dealcriteria" 
                className="text-dark fw-bold mb-2 px-0 py-1"
              >
                Deal Criteria
              </Nav.Link>
              <Nav.Link 
                as={Link} 
                to="/settings/models" 
                className="bg-light text-dark fw-bold rounded px-2 py-1"
                active
              >
                Models
              </Nav.Link>
            </Nav>
          </Col>

          <Col md={9}> 
          <SettingsNav />
          </Col>
         

      
          
        </Row>
      </div>
    </div>
  );
};

export default Settings;