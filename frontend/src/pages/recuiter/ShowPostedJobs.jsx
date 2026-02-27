
import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useRecuiterJobs from "../../hooks/useRecuiterJobs";
import { useCallback, useState } from "react";
import { setEditJobDetails } from "../../redux/RecuiterJobSlice";
import UploadJobCard from "./UploadJobCard";
import ShowApplicantPopUp from "../../component/comman/ShowApplicantPopUp";

const ShowPostedJobs = () => {
  useRecuiterJobs();
  const jobs = useSelector((state) => (state?.recuiterJobs?.jobs));
  const navigate = useNavigate();
  const dispatch = useDispatch(); 
 
  

  const handleData = useCallback((data, _id) => {
    dispatch(setEditJobDetails(data)) 
    navigate(`/createJob/${_id}`);
  }, [dispatch]) 
  
  return (
    <div className="my-14">
      <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <ul className="flex flex-wrap gap-3  ">
          {jobs?.length > 0 ?
            jobs?.map((data) => {
              return  <li className="w-80 flex items-center justify-between   mb-4 rounded" key={data._id}><UploadJobCard data={data} handleData={handleData}  /></li>
            }) : <h1>No Jobs Listed</h1>
          }
         
        </ul>
      </div> 
    </div>
  );
};

export default ShowPostedJobs;
