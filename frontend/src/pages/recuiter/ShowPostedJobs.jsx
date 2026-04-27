
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useRecuiterJobs from "../../hooks/useRecuiterJobs";
import { useCallback, useState } from "react";
import { setEditJobDetails } from "../../redux/RecuiterJobSlice";
import UploadJobCard from "./UploadJobCard";
import Loading from "../../component/comman/Loading";

const ShowPostedJobs = () => {
  useRecuiterJobs();
  const jobs = useSelector((state) => (state?.recuiterJobs?.jobs));
  const loading = useSelector((state) => (state?.recuiterJobs?.loading));
  const navigate = useNavigate();
  const dispatch = useDispatch(); 
 

  const handleData = useCallback((data, _id) => {
    dispatch(setEditJobDetails(data)) 
    navigate(`/createJob/${_id}`);
  }, [dispatch, jobs]) ;
  
  return (
    <div className="my-14">
      <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <ul className="flex flex-wrap gap-3  ">
          {
            loading && <div>Please Wait a sec...🥹</div>
          }
          {jobs?.length > 0 &&
            jobs?.map((data) => {
              return  <li className="w-80 flex items-center justify-between   mb-4 rounded" key={data._id}><UploadJobCard data={data} handleData={handleData}  /></li>
            })  
          }

          {
            jobs?.length == 0 && loading == false && <div>No jobs Found!!!</div>
          }
         
        </ul>
      </div> 
    </div>
  );
};

export default ShowPostedJobs;
