import React, { useState, useEffect } from "react";
import Navigation from "./Navigation";
import "./MyApplications.css";

const MyApplications = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      const sampleApplications = [
        { id: 1, title: "Frontend Developer", company: "Tech Solutions", status: "Na čekanju" },
        { id: 2, title: "Praksa u Frontend-u", company: "Web Innovators", status: "Pozvan na intervju" },
        { id: 3, title: "Mobile App Developer", company: "Creative Studio", status: "Odbijeno" },
      ];
      setApplications(sampleApplications);
    };

    fetchApplications();
  }, []);

  return (
    <>
      <Navigation />
      <div className="my-applications-container">
        <h1 className="page-title">Moje Prijave</h1>
        {applications.length === 0 ? (
          <p className="no-applications">Nemate podnetih prijava.</p>
        ) : (
          <div className="applications-list">
            {applications.map((application) => (
              <div className="application-card" key={application.id}>
                <h2 className="application-title">{application.title}</h2>
                <p className="application-company">Firma: {application.company}</p>
                <p className="application-status">Status: {application.status}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default MyApplications;
