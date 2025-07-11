import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Components/Login';
import Register from './Components/Register';
import AllAds from './Components/AllAds';
import CompaniesPage from './Components/CompaniesPage';
import CompanyDetail from './Components/CompanyDetail';
import JobAdPage from './Components/JobAdPage';
import JobCategories from './Components/JobCategories';
import Students from './Components/Students';
import CompanyProfile from './Components/CompanyProfile';
import MyAds from './Components/MyAds';
import AddAd from './Components/AddAd';
import MyApplications from './Components/MyApplications';
import AllPosts from './Components/AllPosts';
import SinglePost from './Components/SinglePost';
import CreatePost from './Components/CreatePost';
import JobSearchPage from './Components/JobSearchPage';
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
            <Route path="/all-ads/:id" element={<JobAdPage />} />
            <Route path="/categories" element={<JobCategories />} />
             <Route path="/students" element={<Students />} />
            <Route path="/account" element={<CompanyProfile />} />
            <Route path="/nasi-oglasi" element={<MyAds />} />
            <Route path="/dodaj-oglas" element={<AddAd />} />
            <Route path="/moje-prijave" element={<MyApplications />} />
             <Route path="/svi-postovi" element={<AllPosts />} />
            <Route path="/svi-postovi/:id" element={<SinglePost />} />
            <Route path="/napisi-post" element={<CreatePost />} />
            <Route path="/public-api" element={<JobSearchPage />} />
         </Routes>
      </div>
    </Router>
  );
}

export default App;
