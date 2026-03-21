import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./feature/auth/Login";
import Footer from "./component/layout/Footer";
import Navbar from "./component/layout/Navbar";
import Register from "./feature/auth/Register";
import { useDispatch, useSelector } from "react-redux";
import { selectCategoryFilter } from "./feature/jobs/selectCategoryFilter";
import { Toaster } from "react-hot-toast";
import RecuiterHome from "./pages/recuiter/RecuiterHome";
import CreateJob from "./pages/recuiter/CreateJob";
import ProtectRoutes from "./feature/auth/ProtectRoutes";
import ShowPostedJobs from "./pages/recuiter/ShowPostedJobs";
import DeleteJob from "./pages/recuiter/DeleteJob";
import EditProfile from "./pages/EditProfile";
import JobDetails from "./feature/jobs/JobDetails";
import { useEffect } from "react";
import { fetchingCateg } from "./redux/CategorySlice";
import FilterJobs from "./pages/FilterJobs";
import ShowApplicantPopUp from "./component/comman/ShowApplicantPopUp";
import ViewJobApplied from "./pages/ViewJobApplied";
import { loadUser } from "./redux/userSlice";
import ScrollToTop from "./hooks/ScrollToTop";
function App() {
  const category = useSelector(selectCategoryFilter)

  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("token");
    
    if (token) {
      dispatch(loadUser()); // 🔥 refresh par user restore
      
    }
    dispatch(fetchingCateg());
  })
  return (
    <>
      <Navbar category={category} />
      <Toaster />
      <ScrollToTop/>
      <Routes>
        {/*
      <Route path="/jobs" element={<JobsPage/>} />
      <Route path="/jobs/:jobId" element={<JobDetails/>} /> 
      */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/jobs/jobDetail/:id" element={<JobDetails />} />
        <Route path="/jobs" element={<FilterJobs />} />


        <Route path="/editProfile/:id" element={<ProtectRoutes role={["recruiter", "jobseeker"]}><EditProfile /></ProtectRoutes>}/>

        <Route path="/recuiter" element={<ProtectRoutes role={["recruiter"]}><RecuiterHome /></ProtectRoutes>} />
        <Route path="/createJob" element={<ProtectRoutes role={["recruiter"]}><CreateJob />
        </ProtectRoutes>} />
        <Route path="/showPostedJobs" element={<ProtectRoutes role={["recruiter"]}><ShowPostedJobs />
        </ProtectRoutes>} />
        <Route path="/createJob/:id" element={<ProtectRoutes role={["recruiter"]}><CreateJob />
        </ProtectRoutes>} />
        <Route path="/delete-job/:id" element={<ProtectRoutes role={["recruiter"]}><DeleteJob />
        </ProtectRoutes>} />
        <Route path="/showPostedJobs/applicant/:id" element={<ProtectRoutes role={["recruiter"]}><ShowApplicantPopUp />
        </ProtectRoutes>} />
        <Route path="/userJobApplied/:id" element={<ProtectRoutes role={["jobseeker"]}><ViewJobApplied />
        </ProtectRoutes>} />



      </Routes>
      <Footer/>
       
    </>

  );
}

export default App;
