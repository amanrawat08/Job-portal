import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "./component/layout/Footer";
import Navbar from "./component/layout/Navbar"; 
import { selectCategoryFilter } from "./feature/jobs/selectCategoryFilter";
import { fetchingCateg } from "./redux/CategorySlice";
import { loadUser } from "./redux/userSlice";
import ShowApplicantPopUp from "./component/comman/ShowApplicantPopUp";
import ScrollToTop from "./hooks/ScrollToTop";
import ProtectRoutes from "./feature/auth/ProtectRoutes";
import { Toaster } from "react-hot-toast";
import Loading from "./component/comman/Loading";
 
 
const CreateJob = lazy(() => import("./pages/recuiter/CreateJob"));
const ShowPostedJobs = lazy(() => import("./pages/recuiter/ShowPostedJobs"));
const DeleteJob = lazy(() => import("./pages/recuiter/DeleteJob"));
const EditProfile = lazy(() => import("./pages/EditProfile"));
const JobDetails = lazy(() => import("./feature/jobs/JobDetails"));
const FilterJobs = lazy(() => import("./pages/FilterJobs"));
const ViewJobApplied = lazy(() => import("./pages/ViewJobApplied"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ContactPage = lazy(() => import("./component/comman/ContactPage"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Home = lazy(()=>import('./pages/Home'));
const Login = lazy(()=>import('./feature/auth/Login'));
const Register = lazy(()=>import('./feature/auth/Register'));
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
      <Suspense fallback={
    <div className="flex justify-center items-center h-screen">
    <Loading/>
    </div>
  }>
          <Routes>
            
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/jobs/jobDetail/:id" element={<JobDetails />} />
            <Route path="/jobs" element={<FilterJobs />} />


            <Route path="/editProfile/:id" element={<ProtectRoutes role={["recruiter", "jobseeker"]}><EditProfile /></ProtectRoutes>}/>
 
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
            <Route path="/about" element={<AboutPage/>} />
            <Route path="/contact" element={<ContactPage/>} />
            <Route path="*" element={<NotFound />} />


          </Routes>
      </Suspense>
      <Footer/>
       
    </>

  );
}

export default App;
