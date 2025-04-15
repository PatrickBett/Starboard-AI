import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Form,
  Spinner,
  Dropdown,
} from "react-bootstrap";
import { FaFilePdf, FaFileExcel, FaUpload, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const UploadDeal = () => {
  const [files, setFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(
    "Industrial.Template.v2.4.xlsx"
  );
  const [savedModels, setSavedModels] = useState([]);

  // Load saved models from localStorage when component mounts
  useEffect(() => {
    const loadSavedModels = () => {
      try {
        const savedFiles = localStorage.getItem("uploadedFiles");
        if (savedFiles) {
          const parsedFiles = JSON.parse(savedFiles);
          setSavedModels(parsedFiles);

          // If we have saved models and none is selected yet, select the first one
          if (parsedFiles.length > 0 && !selectedFile) {
            setSelectedFile(parsedFiles[0].name);
          }
        }
      } catch (error) {
        console.error("Error loading saved models:", error);
      }
    };

    loadSavedModels();
  }, []);

  const handleSelect = (fileName) => {
    setSelectedFile(fileName);
  };

  const handleFileUpload = (e) => {
    const newFiles = Array.from(e.target.files).map((file, index) => {
      const fileType = file.name.split(".").pop().toLowerCase();
      let type = "default";

      if (fileType === "pdf") type = "pdf";
      else if (["xlsx", "xls", "xlsm"].includes(fileType)) type = "excel";

      return {
        id: Date.now() + index,
        name: file.name,
        type: type,
      };
    });

    setFiles([...files, ...newFiles]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const droppedFiles = Array.from(e.dataTransfer.files).map(
        (file, index) => {
          const fileType = file.name.split(".").pop().toLowerCase();
          let type = "default";

          if (fileType === "pdf") type = "pdf";
          else if (["xlsx", "xls", "xlsm"].includes(fileType)) type = "excel";

          return {
            id: Date.now() + index,
            name: file.name,
            type: type,
          };
        }
      );

      setFiles([...files, ...droppedFiles]);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const renderFileIcon = (fileType) => {
    switch (fileType) {
      case "pdf":
        return <FaFilePdf className="text-danger" size={24} />;
      case "excel":
        return <FaFileExcel className="text-success" size={24} />;

      default:
        return null;
    }
  };

  const handleSubmit = () => {
    // Set loading state
    setIsLoading(true);

    // Simulate API call with 3 second delay
    setTimeout(() => {
      // Add your submission logic here
      console.log("Files submitted:", files);

      // Clear loading state and files after submission
      setIsLoading(false);
      setFiles([]);

      // Show success message
      alert("Files submitted successfully!");
    }, 3000);
  };

  const renderContent = () => {
    if (isLoading) {
      // Loading state - full screen loading indicator
      return (
        <div
          className="d-flex flex-column justify-content-center align-items-center"
          style={{ minHeight: "300px" }}
        >
          <div
            className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center"
            style={{ width: "40px", height: "40px" }}
          >
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
            />
          </div>
          <p className="mt-2">Loading...</p>
        </div>
      );
    } else if (files.length === 0) {
      // Before upload state
      return (
        <div
          className="text-center p-5 border border-2 border-dashed rounded"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          style={{
            minHeight: "300px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="mb-3">
            <FaUpload size={50} className="text-secondary" />
          </div>
          <p className="mb-2">Drop & Drop</p>
          <p className="text-muted mb-3">or</p>
          <Button
            variant="outline-secondary"
            onClick={() => document.getElementById("fileInput").click()}
          >
            Browse
          </Button>
          <Form.Control
            type="file"
            onChange={handleFileUpload}
            multiple
            className="d-none"
            id="fileInput"
          />
        </div>
      );
    } else {
      // After upload state
      return (
        <div className="text-center">
          <h4 className="mb-4">Files Uploaded:</h4>

          <div className="text-start">
            {files.map((file) => (
              <div
                key={file.id}
                className="d-flex align-items-center mb-3 p-2 border-bottom"
              >
                {renderFileIcon(file.type)}
                <span className="ms-3 text-decoration-underline">
                  {file.name}
                </span>
              </div>
            ))}
          </div>

          <Button variant="dark" onClick={handleSubmit} className="px-4 mt-4">
            Submit
          </Button>
        </div>
      );
    }
  };

  return (
    <Container fluid className="p-0">
      {/* Header */}
      <div className="border-bottom px-3 py-2">
        <Container fluid className="px-0">
          <div className="d-flex align-items-center">
            <div className="d-flex justify-content-between align-items-center w-100">
              <div className="d-flex">
                <Button variant="outline-primary" className="me-2" active>
                  New Upload
                </Button>
                <Link to="/dealsoverview">
                  {" "}
                  <Button variant="outline-secondary" className="me-2">
                    Deals Overview
                  </Button>
                </Link>
                <Link to="/pipeline">
                  {" "}
                  <Button variant="outline-secondary" className="me-2">
                    Pipeline
                  </Button>
                </Link>
                <Link to="/settings">
                  <Button variant="outline-secondary">Settings</Button>
                </Link>
              </div>

              <div className="d-flex align-items-center">
                <Form className="position-relative me-3">
                  <Form.Control
                    type="search"
                    placeholder="Ask me anything!"
                    className="rounded-pill px-4"
                    style={{ paddingLeft: "40px", width: "250px" }}
                  />
                  <div
                    className="position-absolute"
                    style={{
                      left: "10px",
                      top: "50%",
                      transform: "translateY(-50%)",
                    }}
                  >
                    <span className="text-muted">🔍</span>
                  </div>
                </Form>

                <div
                  className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center"
                  style={{ width: "35px", height: "35px" }}
                >
                  <span className="fw-bold">SA</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Content */}
      <Container fluid className="py-4">
        <Row>
          <Col md={8}>
            <h2 className="mb-4">Upload New Deal</h2>
          </Col>

          <Col md={4} className="text-end">
            <div className="text-secondary">
              <h6 className="mb-1">Underwriting Excel Model</h6>
              <Dropdown onSelect={handleSelect}>
                <Dropdown.Toggle
                  variant="light"
                  id="dropdown-model"
                  className="text-start border"
                >
                  {selectedFile}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {/* Default models */}
                  {savedModels.length === 0 && (
                    <>
                      <Dropdown.Item eventKey="Industrial.Template.v2.4.xlsx">
                        Industrial.Template.v2.4.xlsx
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="CONFIDENTIAL.xlsx">
                        CONFIDENTIAL.xlsx
                      </Dropdown.Item>
                    </>
                  )}

                  {/* Models from localStorage */}
                  {savedModels.map((model, index) => (
                    <Dropdown.Item key={index} eventKey={model.name}>
                      {model.name}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            {/* File upload area */}
            <Card className="border-0 shadow-sm p-4 mb-4">
              <Card.Body>{renderContent()}</Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default UploadDeal;
