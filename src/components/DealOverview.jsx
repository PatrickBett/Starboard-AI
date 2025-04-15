import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Table, Badge } from 'react-bootstrap';
import { BsBuilding, BsGeoAlt, BsPeople, BsCalendar, BsGraphUp, BsArrowUp, BsCurrencyDollar, BsAlarm, BsPercent } from 'react-icons/bs';
import ComparablesSection from './ComparablesSection';
const DealOverview = () => {
  // Mock data
  const propertyData = {
    address: '280 Richards, Brooklyn, NY',
    dateUpdated: '11/06/2024',
    propertyType: 'Warehouse',
    seller: 'Third Equities',
    guidancePrice: '$174,000,000',
    guidancePricePSF: '$124.40',
    capRate: '5.0%',
    propertySizeSqft: '12,600 sqft',
    landArea: '16 acres',
    zoning: 'M-2'
  };

  const dealSummary = `280 Richards, fully leased to Amazon, aligns with HUSPP’s strategy of acquiring prime logistics assets in Brooklyn’s high-demand Red Hook submarket. With 13 years remaining on the lease and 3% annual rent escalations, it offers stable, long-term cash flow. While single-tenant exposure is a risk, Amazon’s investment-grade rating and renewal options enhance its resilience, making it a strong addition to HUSPP’s portfolio.`;

  const insights = [
    "Jake Klein viewed this deal in 2019, but decided not to proceed due to lack of potential upside.",
    "On 10/19/2021, your firm bid on 55 Bay St, Brooklyn, NY 11231, a larger site also occupied by Amazon 0.5 miles away. Brookfield won the deal for $45M; cap rates in the area have compressed 45bps since then.",
    "On 01/19/2025, Tom, VP of Research, noted in the Investment Committee meeting that congestion pricing has driven renewed demand for infill industrial in Brooklyn."
  ];

  const financialMetrics = {
    IRR: '13.9%',
    equityMultiple: '2.3x',
    returnOnEquity: '18.5%',
    returnOnCost: '19.2%'
  };

  const keyAssumptions = {
    exitPrice: '$195,000,000',
    exitCapRate: '5.0%',
    capGrowth: '3.5%',
    holdPeriod: '16 Years'
  };

  const marketAnalysis = {
    market: 'Brooklyn, NY',
    populationGrowthRate: '1.2%',
    medianHouseholdIncome: '$76,912',
    unemploymentRate: '7.4%'
  };

  const leaseAnalysis = {
    size: '$24.40',
    term: '13 Yrs (Sep 37)',
    rentEscalations: '3%',
    markToMarketOpportunity: '30%+'
  };

  const tenantDetails = {
    tenant: 'Amazon',
    size: '357,151 sqft',
    year: '2021',
    occupancyRate: '100%'
  };

  const buildingDetails = {
    clearHeight: "36'",
    dimensions: "63' X 54'",
    dockDoors: '393',
    parkingSpaces: '28'
  };

  const comparables = [
    {
      address: '640 Columbia',
      submarket: 'Brooklyn',
      deliveryDate: 'Jun-25',
      owner: 'CBRE',
      sf: '196,352',
      price: null
    },
    {
      address: '1 Detharn Road',
      submarket: 'Millstone, NJ',
      deliveryDate: 'Jun-24',
      owner: 'Cabot',
      sf: '132,930',
      price: '$41,903,680',
      tenant: 'Berry Plastics'
    },
    {
      address: 'Baylis 495 Business Park',
      submarket: 'Melville, NY',
      deliveryDate: 'May-24',
      owner: 'Bettner Green',
      sf: '163,500',
      price: '$45,000,000',
      tenant: 'Dr. Pepper'
    },
    {
      address: 'WB Mason',
      submarket: null,
      deliveryDate: 'May-25',
      owner: 'Link Logistics',
      sf: '150,000',
      price: null
    },
    {
      address: '22 Edgerton Road',
      submarket: 'Millstone, NJ',
      deliveryDate: 'Oct-23',
      owner: 'Blackstone',
      sf: '513,240',
      price: '$165,776,520',
      tenant: 'FedEx'
    },
    {
      address: 'Terminal Logistics Center',
      submarket: 'Queens, NY',
      deliveryDate: 'Mar-23',
      owner: 'Goldman',
      sf: '336,000',
      price: '$136,000,000',
      tenant: 'DH & Co'
    }
  ];

  return (
    <Container fluid className="bg-light py-3">
      {/* Header */}
      <Row className="mb-4">
        <Col md={3}>
          <Card className="border-0">
            <Card.Img variant="top" src="https://www.livehome3d.com/assets/img/ios/intro-video-poster@2x.webp" alt="Property aerial view" />
            <Card.Footer className="text-center bg-white border-0 p-1">
              <small className="text-muted">Click for Google Street View</small>
            </Card.Footer>
          </Card>
        </Col>
        <Col md={9}>
          <Card className="h-100 border-0">
            <Card.Body>
              <Row>
                <Col md={8}>
                  <h4 className="mb-0">{propertyData.address}</h4>
                  <p className="text-muted mb-2">Date Updated: {propertyData.dateUpdated}</p>
                  <p className="mb-3">{propertyData.propertyType}</p>
                </Col>
                <Col md={4} className="text-end">
                  <button className="btn btn-dark btn-sm mb-1 w-75">Export to Excel</button>
                  <button className="btn btn-secondary btn-sm w-75">Generate PowerPoint</button>
                </Col>
              </Row>
              
              <Row className="mt-3 border-top pt-3">
                <Col className="text-center" xs={2}>
                  <small className="text-muted d-block">Seller</small>
                  <span>{propertyData.seller}</span>
                </Col>
                <Col className="text-center" xs={2}>
                  <small className="text-muted d-block">Guidance Price</small>
                  <span>{propertyData.guidancePrice}</span>
                </Col>
                <Col className="text-center" xs={2}>
                  <small className="text-muted d-block">Guidance Price PSF</small>
                  <span>{propertyData.guidancePricePSF}</span>
                </Col>
                <Col className="text-center" xs={2}>
                  <small className="text-muted d-block">Cap Rate</small>
                  <span>{propertyData.capRate}</span>
                </Col>
                <Col className="text-center" xs={2}>
                  <small className="text-muted d-block">Property Size</small>
                  <span>{propertyData.propertySizeSqft}</span>
                </Col>
                <Col className="text-center" xs={1}>
                  <small className="text-muted d-block">Land Area</small>
                  <span>{propertyData.landArea}</span>
                </Col>
                <Col className="text-center" xs={1}>
                  <small className="text-muted d-block">Zoning</small>
                  <span>{propertyData.zoning}</span>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Main Content */}
      <Row className="mb-4">
        <Col md={8}>
          <Card className=" h-70 mb-4">
            <Card.Body>
              <Card.Title>Deal Summary</Card.Title>
              <Card.Text>{dealSummary}</Card.Text>
              <Card.Title>Personalized Insights</Card.Title>
              <ul className="ps-3">
                {insights.map((insight, index) => (
                  <li key={index} className="mb-2">{insight}</li>
                ))}
              </ul>
            </Card.Body>
          </Card>
          

    <div className="container-fluid">
      <div className="row g-4 p-4 bg-light rounded">
        {/* Projected Financial Metrics */}
        <div className="col-md-3">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title fs-6 fw-medium mb-3">Projected Financial Metrics</h5>
              
              <div className="d-flex flex-column gap-4">
                <div className="d-flex align-items-center">
                  <div className="bg-light border border-primary rounded d-inline-flex align-items-center justify-content-center p-1 me-2" style={{ width: '24px', height: '24px' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19v-6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2zm0 0V9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v10m-6 0a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2m0 0V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <small className="text-muted">IRR</small>
                    <p className="mb-0 fw-semibold small">13.9%</p>
                  </div>
                </div>
                
                <div className="d-flex align-items-center">
                  <div className="bg-success bg-opacity-10 rounded d-inline-flex align-items-center justify-content-center p-1 me-2" style={{ width: '24px', height: '24px' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="green" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <small className="text-muted">Equity Multiple</small>
                    <p className="mb-0 fw-semibold small">2.3x</p>
                  </div>
                </div>
                
                <div className="d-flex align-items-center">
                  <div className="bg-purple bg-opacity-10 rounded d-inline-flex align-items-center justify-content-center p-1 me-2" style={{ width: '24px', height: '24px' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="purple" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <small className="text-muted">Return on Equity</small>
                    <p className="mb-0 fw-semibold small">18.5%</p>
                  </div>
                </div>
                
                <div className="d-flex align-items-center">
                  <div className="bg-warning bg-opacity-10 rounded d-inline-flex align-items-center justify-content-center p-1 me-2" style={{ width: '24px', height: '24px' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="orange" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <small className="text-muted">Return on Cost</small>
                    <p className="mb-0 fw-semibold small">19.2%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Assumptions */}
        <div className="col-md-3">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title fs-6 fw-medium mb-3">Key Assumptions</h5>
              
              <div className="d-flex flex-column gap-4">
                <div className="d-flex align-items-center">
                  <div className="bg-indigo bg-opacity-10 rounded d-inline-flex align-items-center justify-content-center p-1 me-2" style={{ width: '24px', height: '24px' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="indigo" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <small className="text-muted">Exit Price</small>
                    <p className="mb-0 fw-semibold small">$195,000,000</p>
                  </div>
                </div>
                
                <div className="d-flex align-items-center">
                  <div className="bg-danger bg-opacity-10 rounded d-inline-flex align-items-center justify-content-center p-1 me-2" style={{ width: '24px', height: '24px' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="red" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                    </svg>
                  </div>
                  <div>
                    <small className="text-muted">Exit Cap Rate</small>
                    <p className="mb-0 fw-semibold small">5.0%</p>
                  </div>
                </div>
                
                <div className="d-flex align-items-center">
                  <div className="bg-primary bg-opacity-10 rounded d-inline-flex align-items-center justify-content-center p-1 me-2" style={{ width: '24px', height: '24px' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="blue" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <small className="text-muted">Rental Growth</small>
                    <p className="mb-0 fw-semibold small">3.5%</p>
                  </div>
                </div>
                
                <div className="d-flex align-items-center">
                  <div className="bg-secondary bg-opacity-10 rounded d-inline-flex align-items-center justify-content-center p-1 me-2" style={{ width: '24px', height: '24px' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="gray" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <small className="text-muted">Hold Period</small>
                    <p className="mb-0 fw-semibold small">16 Years</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Market Analysis */}
        <div className="col-md-3">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title fs-6 fw-medium mb-3">Market Analysis</h5>
              
              <div className="d-flex flex-column gap-4">
                <div className="d-flex align-items-center">
                  <div className="bg-success bg-opacity-10 rounded d-inline-flex align-items-center justify-content-center p-1 me-2" style={{ width: '24px', height: '24px' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="green" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <small className="text-muted">Nearest Urban Center</small>
                    <p className="mb-0 fw-semibold small">Brooklyn, NY</p>
                  </div>
                </div>
                
                <div className="d-flex align-items-center">
                  <div className="bg-purple bg-opacity-10 rounded d-inline-flex align-items-center justify-content-center p-1 me-2" style={{ width: '24px', height: '24px' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="purple" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <small className="text-muted">Population Growth Rate</small>
                    <p className="mb-0 fw-semibold small">1.2%</p>
                  </div>
                </div>
                
                <div className="d-flex align-items-center">
                  <div className="bg-warning bg-opacity-10 rounded d-inline-flex align-items-center justify-content-center p-1 me-2" style={{ width: '24px', height: '24px' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="orange" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <small className="text-muted">Median Household Income</small>
                    <p className="mb-0 fw-semibold small">$76,912</p>
                  </div>
                </div>
                
                <div className="d-flex align-items-center">
                  <div className="bg-danger bg-opacity-10 rounded d-inline-flex align-items-center justify-content-center p-1 me-2" style={{ width: '24px', height: '24px' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="red" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <small className="text-muted">Unemployment Rate</small>
                    <p className="mb-0 fw-semibold small">7.4%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lease Analysis */}
        <div className="col-md-3">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title fs-6 fw-medium mb-3">Lease Analysis</h5>
              
              <div className="d-flex flex-column gap-4">
                <div className="d-flex align-items-center">
                  <div className="bg-indigo bg-opacity-10 rounded d-inline-flex align-items-center justify-content-center p-1 me-2" style={{ width: '24px', height: '24px' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="indigo" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <small className="text-muted">Rent PSF</small>
                    <p className="mb-0 fw-semibold small">$24.40</p>
                  </div>
                </div>
                
                <div className="d-flex align-items-center">
                  <div className="bg-primary bg-opacity-10 rounded d-inline-flex align-items-center justify-content-center p-1 me-2" style={{ width: '24px', height: '24px' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="blue" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <small className="text-muted">Term</small>
                    <p className="mb-0 fw-semibold small">13 Yrs (Sep 37)</p>
                  </div>
                </div>
                
                <div className="d-flex align-items-center">
                  <div className="bg-success bg-opacity-10 rounded d-inline-flex align-items-center justify-content-center p-1 me-2" style={{ width: '24px', height: '24px' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="green" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <small className="text-muted">Rent Escalations</small>
                    <p className="mb-0 fw-semibold small">3%</p>
                  </div>
                </div>
                
                <div className="d-flex align-items-center">
                  <div className="bg-pink bg-opacity-10 rounded d-inline-flex align-items-center justify-content-center p-1 me-2" style={{ width: '24px', height: '24px' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="pink" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <small className="text-muted">Mark-to-Market Opportunity</small>
                    <p className="mb-0 fw-semibold small">30%+</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
          
          
          
          
        </Col>

        <Col md={4}>
          <Card className=" mb-4">
            <Card.Body className="p-4">
              <Row className="text-center">
                <Col>
                  <h6>Asset Level Data</h6>
                  <hr />
                </Col>
              </Row>
              <Row className="mb-4">
                <Col md={6}>
                  <Card className="border-0 bg-light">
                    <Card.Body className="p-2">
                      <div className="d-flex justify-content-between">
                        <div>
                          <BsBuilding size={20} className="mb-2 text-secondary" />
                          <p className="mb-0 small text-muted">Clear Height</p>
                          <h5 className="mb-0">{buildingDetails.clearHeight}</h5>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card className="border-0 bg-light">
                    <Card.Body className="p-2">
                      <div className="d-flex justify-content-between">
                        <div>
                          <BsPeople size={20} className="mb-2 text-secondary" />
                          <p className="mb-0 small text-muted">Tenant</p>
                          <h5 className="mb-0">{tenantDetails.tenant}</h5>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Row className="mb-4">
                <Col md={6}>
                  <Card className="border-0 bg-light">
                    <Card.Body className="p-2">
                      <div className="d-flex justify-content-between">
                        <div>
                          <BsBuilding size={20} className="mb-2 text-secondary" />
                          <p className="mb-0 small text-muted">Building Dimensions</p>
                          <h5 className="mb-0">{buildingDetails.dimensions}</h5>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card className="border-0 bg-light">
                    <Card.Body className="p-2">
                      <div className="d-flex justify-content-between">
                        <div>
                          <BsBuilding size={20} className="mb-2 text-secondary" />
                          <p className="mb-0 small text-muted">Size</p>
                          <h5 className="mb-0">{tenantDetails.size}</h5>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Row className="mb-4">
                <Col md={6}>
                  <Card className="border-0 bg-light">
                    <Card.Body className="p-2">
                      <div className="d-flex justify-content-between">
                        <div>
                          <BsBuilding size={20} className="mb-2 text-secondary" />
                          <p className="mb-0 small text-muted">Dock Doors</p>
                          <h5 className="mb-0">{buildingDetails.dockDoors}</h5>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card className="border-0 bg-light">
                    <Card.Body className="p-2">
                      <div className="d-flex justify-content-between">
                        <div>
                          <BsCalendar size={20} className="mb-2 text-secondary" />
                          <p className="mb-0 small text-muted">Year</p>
                          <h5 className="mb-0">{tenantDetails.year}</h5>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Card className="border-0 bg-light">
                    <Card.Body className="p-2">
                      <div className="d-flex justify-content-between">
                        <div>
                          <BsBuilding size={20} className="mb-2 text-secondary" />
                          <p className="mb-0 small text-muted">Parking Spaces</p>
                          <h5 className="mb-0">{buildingDetails.parkingSpaces}</h5>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card className="border-0 bg-light">
                    <Card.Body className="p-2">
                      <div className="d-flex justify-content-between">
                        <div>
                          <BsPercent size={20} className="mb-2 text-secondary" />
                          <p className="mb-0 small text-muted">Occupancy Rate</p>
                          <h5 className="mb-0">{tenantDetails.occupancyRate}</h5>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Supply Pipeline */}
      <h5 className="mt-4 mb-3">Supply Pipeline</h5>
      <Row className="mb-4">
        {comparables.slice(0, 3).map((comp, index) => (
          <Col md={4} key={`pipeline-${index}`}>
            <Card className="mb-3">
              <Row className="g-0">
                <Col md={4}>
                  <div className="bg-light h-100">
                    <img src="https://www.livehome3d.com/assets/img/ios/intro-video-poster@2x.webp" className="img-fluid rounded-start h-100 w-100" alt="Property" style={{ objectFit: 'cover' }} />
                  </div>
                </Col>
                <Col md={8}>
                  <Card.Body className="p-2">
                    <small className="text-muted d-block">Address: {comp.address}</small>
                    {comp.submarket && <small className="text-muted d-block">Submarket: <Badge bg="secondary" className="rounded-pill">{comp.submarket}</Badge></small>}
                    <small className="text-muted d-block">Delivery Date: {comp.deliveryDate}</small>
                    <small className="text-muted d-block">Owner: <Badge bg="light" text="dark" className="rounded-pill">{comp.owner}</Badge></small>
                    <small className="text-muted d-block">SF: {comp.sf}</small>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Sale Comparables */}
      <h5 className="mt-4 mb-3">Sale Comparables</h5>
      <Row>
        {comparables.slice(3, 6).map((comp, index) => (
          <Col md={4} key={`sale-${index}`}>
            <Card className="mb-3">
              <Row className="g-0">
                <Col md={4}>
                  <div className="bg-light h-100">
                    <img src="https://www.livehome3d.com/assets/img/ios/intro-video-poster@2x.webp" className="img-fluid rounded-start h-100 w-100" alt="Property" style={{ objectFit: 'cover' }} />
                  </div>
                </Col>
                <Col md={8}>
                  <Card.Body className="p-2">
                    <small className="text-muted d-block">Address: {comp.address}</small>
                    {comp.submarket && <small className="text-muted d-block">Submarket: <Badge bg="secondary" className="rounded-pill">{comp.submarket}</Badge></small>}
                    <small className="text-muted d-block">Date: {comp.deliveryDate}</small>
                    <small className="text-muted d-block">SF: {comp.sf}</small>
                    {comp.price && <small className="text-muted d-block">PP: {comp.price}</small>}
                    <small className="text-muted d-block">Owner: <Badge bg="light" text="dark" className="rounded-pill">{comp.owner}</Badge></small>
                    {comp.tenant && <small className="text-muted d-block">Tenant: <Badge bg="light" text="dark" className="rounded-pill">{comp.tenant}</Badge></small>}
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default DealOverview;