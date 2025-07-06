import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./JobAdPage.css";
import Navigation from "./Navigation";

const JobAdPage = () => {
  const { state } = useLocation();
  const ad = state?.ad;
  const navigate = useNavigate();
  const [role, setRole] = useState(null);
  const [applications, setApplications] = useState([
    {
      id: 1,
      username: "Marko Jovanović",
      email: "marko.jovanovic@example.com",
      cv: "/path/to/cv1.pdf",
      status: "Na Čekanju",
    },
    {
      id: 2,
      username: "Ana Petrović",
      email: "ana.petrovic@example.com",
      cv: "/path/to/cv2.pdf",
      status: "Odbijen",
    },
    {
      id: 3,
      username: "Nikola Kovačević",
      email: "nikola.kovacevic@example.com",
      cv: "/path/to/cv3.pdf",
      status: "Pozvan na intervju",
    },
    {
      id: 4,
      username: "Jelena Marković",
      email: "jelena.markovic@example.com",
      cv: "/path/to/cv4.pdf",
      status: "Na Čekanju",
    },
    {
      id: 5,
      username: "Stefan Ivković",
      email: "stefan.ivkovic@example.com",
      cv: "/path/to/cv5.pdf",
      status: "Pozvan na intervju",
    },
  ]);
  

  useEffect(() => {
    const storedRole = sessionStorage.getItem("userRole") || "student";
    if (storedRole) {
      setRole(storedRole);
    } else {
      alert("Uloga nije definisana! Molimo prijavite se ponovo.");
    }
  }, []);

  const handleDeleteJobAd = () => {
    alert("Oglas obrisan!");
  };

  const handleCloseJobAd = () => {
    alert("Oglas zatvoren!");
  };

  const handleChangeApplicationStatus = (id, newStatus) => {
    setApplications((prev) =>
      prev.map((app) =>
        app.id === id ? { ...app, status: newStatus } : app
      )
    );
  };

  const handleApplyForJob = (e) => {
    e.preventDefault();
    alert("Prijava uspešno poslata!");
  };

  return (
    <>
      <Navigation />
      <div className="job-ad-page">
        <div className="job-banner">
          <img
            src={ad?.image || "https://via.placeholder.com/1200x300"}
            alt="Job Banner"
            className="banner-image"
          />
        </div>

        <div className="job-description">
          <h1>{ad?.title || "Naslov oglasa"}</h1>
          <p>Opis posla: {ad?.description || "Ovo je opis posla za određeni oglas."}</p>
          <p>Potrebna znanja: {ad?.requiredSkills || "Kotlin, Swift, React Native"}</p>
          <p>Kategorija: {ad?.category || "Posao"}</p>
          <p>Podkategorija: {ad?.jobCategory || "Mobile Development"}</p>
          <p>Lokacija: {ad?.location || "Novi Sad, Srbija"}</p>
        </div>

        {role === "admin" && (
          <div className="admin-section">
            <h2>Prijave za oglas</h2>
            <table className="applications-table">
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Email</th>
                  <th>CV</th>
                  <th>Status prijave</th>
                </tr>
              </thead>
              <tbody>
                {applications.map((app) => (
                  <tr key={app.id}>
                    <td>{app.username}</td>
                    <td>{app.email}</td>
                    <td>
                      <a href={app.cv} target="_blank" rel="noopener noreferrer">
                        Otvori CV
                      </a>
                    </td>
                    <td>{app.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button onClick={handleDeleteJobAd} className="delete-job-btn">
              Obriši oglas
            </button>
          </div>
        )}

        {role === "company" && (
          <div className="company-section">
            <h2>Prijave za oglas</h2>
            <table className="applications-table">
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Email</th>
                  <th>CV</th>
                  <th>Status prijave</th>
                  <th>Akcije</th>
                </tr>
              </thead>
              <tbody>
                {applications.map((app) => (
                  <tr key={app.id}>
                    <td>{app.username}</td>
                    <td>{app.email}</td>
                    <td>
                      <a href={app.cv} target="_blank" rel="noopener noreferrer">
                        Otvori CV
                      </a>
                    </td>
                    <td>{app.status}</td>
                    <td>
                      {app.status === "Na Čekanju" && (
                        <>
                          <button
                            className="invite-btn"
                            onClick={() =>
                              handleChangeApplicationStatus(app.id, "Pozvan na intervju")
                            }
                          >
                            Pozovi na intervju
                          </button>
                          <button
                            className="reject-btn"
                            onClick={() =>
                              handleChangeApplicationStatus(app.id, "Odbijen")
                            }
                          >
                            Odbij
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button onClick={handleCloseJobAd} className="close-job-btn">
              Zatvori oglas
            </button>
          </div>
        )}

        {role === "student" && (
          <div className="student-section">
            <h2>Prijavi se za oglas</h2>
            <form onSubmit={handleApplyForJob}>
              <input type="file" accept="application/pdf" required />
              <button type="submit">Prijavi se</button>
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export default JobAdPage;
