// pages/summary.js

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { jsPDF } from 'jspdf';

const Summary = () => {
  const router = useRouter();
  const [advisory, setAdvisory] = useState(null);

  // Retrieve advisory data from the query
  useEffect(() => {
    if (router.query.advisory) {
      setAdvisory(router.query.advisory);
    }
  }, [router.query.advisory]);

  // Function to download advisory content as PDF
  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(12);
    doc.text("Personal Finance Advisory", 10, 10);
    doc.text(advisory, 10, 20);
    doc.save("Financial_Advice_Summary.pdf");
  };

  // Function to reset the form and navigate to the first step
  const resetForm = () => {
    router.push('/');
  };

  if (!advisory) {
    return <p>Loading advisory data...</p>;
  }

  return (
    <div className="summary-container">
      <h1>Personal Finance Advisory</h1>
      <div className="advisory-content">
        {/* Render advisory data in markdown format */}
        <ReactMarkdown>{advisory}</ReactMarkdown>
      </div>

      <div className="button-group">
        {/* Button to download advisory as PDF */}
        <button onClick={downloadPDF} className="download-button">Download PDF</button>
        
        {/* Button to reset form and submit new details */}
        <button onClick={resetForm} className="reset-button">Submit New Details</button>
      </div>
    </div>
  );
};

export default Summary;
