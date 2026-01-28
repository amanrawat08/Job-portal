import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Navbar from "./component/layout/Navbar";
import Footer from "./component/layout/Footer";
import Register from "./pages/auth/Register";
import { categoryFilter } from "./utils/categoryFilter";
 import { useState ,useEffect } from "react";
import JobsPage from "./pages/JobsPage";
import JobDetails from "./component/comman/JobDetails";
function App() {
      const [category,setCategory] = useState();
  
  
      useEffect(()=>{
          setCategory(categoryFilter)
      },[categoryFilter])
  
  return (
    <>
      <Navbar category = {category}/>
    <Routes>
      <Route path="/" element={<Home category = {category}/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/jobs" element={<JobsPage/>} />
      <Route path="/jobs/:jobId" element={<JobDetails/>} />

    </Routes>
        <Footer/>
    </>
    
  );
}

export default App;
