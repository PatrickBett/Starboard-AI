import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

const ComparablesSection = () => {
  const supplyPipelineData = [
    {
      image: "/api/placeholder/400/300",
      address: "640 Columbia",
      submarket: "Brooklyn",
      deliveryDate: "Jun-25",
      owner: "CBREI",
      sf: "336,350"
    },
    {
      image: "/api/placeholder/400/300",
      address: "WB Mason",
      submarket: "Bronx",
      deliveryDate: "May-25",
      owner: "Link Logistics",
      sf: "150,000"
    }
  ];

  const saleComparablesData = [
    {
      image: "/api/placeholder/400/300",
      address: "1 Debaun Road",
      submarket: "Millstone, NJ",
      date: "Jun-24",
      sf: "132,930",
      pp: "$41,903,580",
      owner: "Cabot",
      tenant: "Berry Plastics"
    },
    {
      image: "/api/placeholder/400/300",
      address: "39 Edgeboro Road",
      submarket: "Millstone, NJ",
      date: "Oct-23",
      sf: "513,240",
      pp: "$165,776,520",
      owner: "Blackstone",
      tenant: "FedEx"
    },
    {
      image: "/api/placeholder/400/300",
      address: "Baylis 495 Business Park",
      submarket: "Melville, NY",
      date: "May-24",
      sf: "103,500",
      pp: "$44,000,000",
      owner: "Betnal Green",
      tenant: "Dr. Pepper"
    },
    {
      image: "/api/placeholder/400/300",
      address: "Terminal Logistics Center",
      submarket: "Queens, NY",
      date: "Mar-23",
      sf: "336,000",
      pp: "$136,000,000",
      owner: "Goldman",
      tenant: "Do & Co"
    }
  ];

  const comparisonStyles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      padding: '20px 0'
    },
    sectionTitle: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '20px'
    },
    itemContainer: {
      display: 'flex',
      marginBottom: '20px'
    },
    image: {
      width: '180px',
      height: '130px',
      objectFit: 'cover',
      borderRadius: '8px'
    },
    contentBox: {
      paddingLeft: '15px'
    },
    address: {
      fontSize: '16px',
      fontWeight: 'bold',
      marginBottom: '4px'
    },
    detailsRow: {
      marginBottom: '4px',
      display: 'flex'
    },
    detailLabel: {
      fontWeight: 'bold',
      marginRight: '5px'
    },
    detailValue: {
      color: '#505050'
    },
    sectionDivider: {
      borderLeft: '1px solid #e0e0e0',
      height: '100%'
    }
  };

  return (
    <Container fluid style={comparisonStyles.container}>
      <Row>
        {/* Supply Pipeline Column */}
        <Col md={4} style={{ paddingRight: '20px' }}>
          <div style={comparisonStyles.sectionTitle}>Supply Pipeline</div>
          
          {supplyPipelineData.map((item, index) => (
            <div key={`pipeline-${index}`} style={comparisonStyles.itemContainer}>
              <img src={item.image} alt={item.address} style={comparisonStyles.image} />
              <div style={comparisonStyles.contentBox}>
                <div style={{ marginBottom: '8px' }}>
                  <span style={comparisonStyles.detailLabel}>Address:</span>
                  <span style={comparisonStyles.detailValue}> {item.address}</span>
                </div>
                <div style={comparisonStyles.detailsRow}>
                  <span style={comparisonStyles.detailLabel}>Submarket:</span>
                  <span style={comparisonStyles.detailValue}> {item.submarket}</span>
                </div>
                <div style={comparisonStyles.detailsRow}>
                  <span style={comparisonStyles.detailLabel}>Delivery Date:</span>
                  <span style={comparisonStyles.detailValue}> {item.deliveryDate}</span>
                </div>
                <div style={comparisonStyles.detailsRow}>
                  <span style={comparisonStyles.detailLabel}>Owner:</span>
                  <span style={comparisonStyles.detailValue}> {item.owner}</span>
                </div>
                <div style={comparisonStyles.detailsRow}>
                  <span style={comparisonStyles.detailLabel}>SF:</span>
                  <span style={comparisonStyles.detailValue}> {item.sf}</span>
                </div>
              </div>
            </div>
          ))}
        </Col>

        {/* Vertical Divider */}
        <Col md={0} className="d-flex justify-content-center">
          <div style={comparisonStyles.sectionDivider}></div>
        </Col>

        {/* Sale Comparables Column */}
        <Col md={8}>
          <div style={comparisonStyles.sectionTitle}>Sale Comparables</div>
          
          <Row>
            {saleComparablesData.map((item, index) => (
              <Col md={6} key={`comparable-${index}`} style={{ marginBottom: '20px' }}>
                <div style={{ display: 'flex' }}>
                  {index % 2 === 0 && (
                    <img src={item.image} alt={item.address} style={comparisonStyles.image} />
                  )}
                  
                  <div style={comparisonStyles.contentBox}>
                    <div style={{ marginBottom: '5px' }}>
                      <span style={comparisonStyles.detailLabel}>Address:</span>
                      <span style={comparisonStyles.detailValue}> {item.address}</span>
                    </div>
                    <div style={comparisonStyles.detailsRow}>
                      <span style={comparisonStyles.detailLabel}>Submarket:</span>
                      <span style={comparisonStyles.detailValue}> {item.submarket}</span>
                      <span style={{ marginLeft: '15px' }}>
                        <span style={comparisonStyles.detailLabel}>Date:</span>
                        <span style={comparisonStyles.detailValue}> {item.date}</span>
                      </span>
                    </div>
                    <div style={comparisonStyles.detailsRow}>
                      <span style={comparisonStyles.detailLabel}>SF:</span>
                      <span style={comparisonStyles.detailValue}> {item.sf}</span>
                      <span style={{ marginLeft: '15px' }}>
                        <span style={comparisonStyles.detailLabel}>PP:</span>
                        <span style={comparisonStyles.detailValue}> {item.pp}</span>
                      </span>
                    </div>
                    <div style={comparisonStyles.detailsRow}>
                      <span style={comparisonStyles.detailLabel}>Owner:</span>
                      <span style={comparisonStyles.detailValue}> {item.owner}</span>
                    </div>
                    <div style={comparisonStyles.detailsRow}>
                      <span style={comparisonStyles.detailLabel}>Tenant:</span>
                      <span style={comparisonStyles.detailValue}> {item.tenant}</span>
                    </div>
                  </div>
                  
                  {index % 2 === 1 && (
                    <img src={item.image} alt={item.address} style={{ ...comparisonStyles.image, marginLeft: '15px' }} />
                  )}
                </div>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ComparablesSection;