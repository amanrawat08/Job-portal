import { useParams } from "react-router-dom"
import Banner from "../../component/comman/Banner";
import LeftDetails from "../../component/comman/LeftDetails";
import RightDetails from "../../component/comman/RightDetails";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobById } from "../../redux/JobSlice";
import { useEffect } from "react";

const JobDetails = ()=>{
    const {id} = useParams()
    const dispatch = useDispatch();
   const job = useSelector((state)=>state?.jobs?.jobDetails?.job);
   const recuiterData = useSelector((state)=>state?.jobs?.jobDetails?.rData);
   const loading = useSelector((state)=>state?.jobs?.loading);
 // console.log(recuiterData);
    
    

    useEffect(() => {
    if (id) {
      dispatch(fetchJobById(id));
    }
  }, [dispatch, id]);
    

  if(loading){
    return <p>Loading</p>
  }
   
    return <h1>
        <Banner/>
        <div className="max-w-7xl mx-auto  px-8 sm:px-6 lg:px-8 py-12 flex">
            <div className="w-[80%]">
                    <LeftDetails title={job?.title} company={job?.company} location={job?.location} jobType={job?.jobType} salaryMin={job?.salaryMin} salaryMax={job?.salaryMax} createAt = {job?.createdAt} description= {job?.description} responsibilities = {job?.responsibilities} requirements = {job?.requirements}/>
            </div>

            <div className="w-[20%]">
                <RightDetails workMode={job?.workMode} status={job?.status} rname={recuiterData?.name} remail={recuiterData?.email} jobid = {id}/>
            </div>
        </div>
        </h1>
}

export default JobDetails