import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    const alumniEmail = "ana.petrovic@example.com";
    const alumniPassword = "123";

    const studentEmail = "marko.jovanovic@example.com";
    const studentPassword = "123";

    const companyEmail = "info@techsolutions.com";
    const companyPassword = "123";

    const adminEmail = "admin@example.com";
    const adminPassword = "123";

    if (email && password) {
      if (email === alumniEmail && password === alumniPassword) {
        sessionStorage.setItem("userRole", "alumni");
        navigate("/all-ads");
      } else if (email === studentEmail && password === studentPassword) {
        sessionStorage.setItem("userRole", "student");
        navigate("/all-ads");
      } else if (email === companyEmail && password === companyPassword) {
        sessionStorage.setItem("userRole", "company");
        navigate("/account");
      } else if(email === adminEmail && password === adminPassword){
        sessionStorage.setItem("userRole", "admin");
        navigate("/all-ads");
      }
      else {
        alert("Neispravan email ili lozinka.");
      }
    } else {
      alert("Molimo vas da unesete email i lozinku.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">Dobrodošli!</h1>
        <p className="login-subtitle">Prijavite se da biste nastavili.</p>
        <form className="login-form" onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="form-input"
              placeholder="Unesite svoj email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Lozinka</label>
            <input
              type="password"
              id="password"
              className="form-input"
              placeholder="Unesite svoju lozinku"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          
          <button type="submit" className="login-button">
            Prijavi se
          </button>
        </form>
        <p className="login-footer">
          Nemate nalog? <a href="register">Registrujte se</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
