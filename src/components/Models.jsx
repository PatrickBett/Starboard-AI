import React, { useState, useRef, useEffect } from 'react';

export default function Models() {
  // Load files from localStorage on component mount
  const [files, setFiles] = useState(() => {
    const savedFiles = localStorage.getItem('uploadedFiles');
    const initialFiles = savedFiles ? JSON.parse(savedFiles) : [
      {
        name: 'Industrial.Template.v2.4.xlsx',
        uploadDate: 'July 22nd, 2024'
      },
      {
        name: 'CONFIDENTIAL.xlsx',
        uploadDate: 'June 9th, 2024'
      }
    ];
    return initialFiles;
  });
  
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);
  
  // Save files to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('uploadedFiles', JSON.stringify(files));
  }, [files]);
  
  const handleFileSelect = (e) => {
    if (e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };
  
  const handleUpload = () => {
    if (!selectedFile) return;
    
    const reader = new FileReader();
    
    reader.onload = (event) => {
      // Get current date in format "Month Day, Year"
      const today = new Date();
      const options = { month: 'long', day: 'numeric', year: 'numeric' };
      const uploadDate = today.toLocaleDateString('en-US', options);
      
      // Add new file to the files array with content
      const newFile = {
        name: selectedFile.name,
        uploadDate: uploadDate,
        content: event.target.result, // Store the file content
        size: selectedFile.size,
        type: selectedFile.type
      };
      
      // Update state with new file at the beginning of the array
      setFiles([newFile, ...files]);
      setSelectedFile(null);
      
      // Reset the file input
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    };
    
    reader.readAsDataURL(selectedFile); // Read file as data URL
  };
  
  const handleDownload = (file) => {
    if (file.content) {
      const link = document.createElement('a');
      link.href = file.content;
      link.download = file.name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };
  


  return (
    <div className="p-4 max-w-md">
      <div className="mb-4">
        <h3 className="text-xl font-bold">Models</h3>
        <p className="text-gray-500">Upload your underwriting models here.</p>
      </div>
      
      <hr className="my-4 border-gray-200" />
      
      {/* File Listings */}
      <div className="mb-8">
        {files.map((file, index) => (
          <div className="mb-3" key={index}>
            <div className="fw-medium border-bottom border-2 border-dark"
              style={{ display: "inline-block", cursor: file.content ? "pointer" : "default" }}
              onClick={() => file.content && handleDownload(file)}
              title={file.content ? "Click to download" : ""}>
              {file.name}
            </div>

            <div className="text-gray-500 text-sm">
              Uploaded {file.uploadDate}
              {file.content && (
                <>
                  <span className="ml-2">({Math.round(file.size / 1024)} KB)</span>
                  
                </>
              )}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6">
        <h6 className="font-bold mb-3">Upload New Model</h6>
        <div className="flex flex-col space-y-3">
          <input
            ref={fileInputRef}
            type="file"
            onChange={handleFileSelect}
            accept=".xlsx,.xls,.csv"
            style={{ display: 'none' }}
          />
          <button
            onClick={() => fileInputRef.current?.click()}
            className="bg-black text-white px-4 py-2 rounded text-sm w-32"
          >
            Select file...
          </button>
          
          {selectedFile && (
            <div className="mt-2">
              <div className="text-sm mb-2">Selected: {selectedFile.name} ({Math.round(selectedFile.size / 1024)} KB)</div>
              <button
                onClick={handleUpload}
                className="bg-dark text-white px-4 py-2 rounded text-sm w-32"
              >
                Upload Model
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}