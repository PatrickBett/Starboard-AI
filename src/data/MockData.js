// src/data/MockData.js
export const mockDeal = {
    id: "D12345",
    propertyName: "Riverside Commerce Center",
    address: "7250 NW 36th St, Miami, FL 33166",
    propertyType: "Industrial",
    tenant: "FedEx Ground",
    rentPSF: "$12.50",
    leaseTermYears: 7,
    leaseStartDate: "2023-06-01",
    leaseEndDate: "2030-05-31",
    sizeSquareFeet: 45000,
    assumableFinancing: {
      available: true,
      lender: "Bank of America",
      balance: "$5.2M",
      rate: "4.25%",
      maturity: "2028-09-30"
    },
    marketBenchmarks: {
      avgRentPSF: "$11.75",
      avgLeaseTermYears: 5,
      vacancyRate: "3.2%"
    },
    images: [
      "/api/placeholder/800/500",
      "/api/placeholder/800/500"
    ],
    omReference: "OM-2023-0842",
    lastUpdated: "2025-04-01"
  };