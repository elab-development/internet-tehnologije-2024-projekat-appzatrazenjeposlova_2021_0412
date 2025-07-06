import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Components/Login';
import Register from './Components/Register';
import AllAds from './Components/AllAds';
import CompaniesPage from './Components/CompaniesPage';
import CompanyDetail from './Components/CompanyDetail';

function App() {
  return (
    <Router>
      <div className="App">
         <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
             <Route path="/all-ads" element={<AllAds/>}/>
            <Route path="/kompanije" element={<CompaniesPage/>}/>
            <Route path="/kompanije/:id" element={<CompanyDetail />} />


         </Routes>
      </div>
    </Router>
  );
}

export default App;
