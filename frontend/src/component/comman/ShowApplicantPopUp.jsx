import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import { APPLICANT_JOB_URL, UPDATE_APPLICANT_STATUS_URL } from "../../utils/comman";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
const ShowApplicantPopUp = () => {
  const { id } = useParams();
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate()
  const [applicants, setApplicants] = useState([]);
  const [jobTitle, setJobTitle] = useState("");
  const token = localStorage.getItem("token");

  // console.log(`${APPLICANT_JOB_URL}/${id}`);




  const getApplicantRelatedToJob = async () => {
    try {
      const res = await axios.get(
        `${APPLICANT_JOB_URL}/${id}`,
        {
          withCredentials: true,
          user,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(res?.data?.applicants);


      setApplicants(res?.data?.applicants);
      setJobTitle(res?.data?.jobTitle)

    } catch (error) {
      console.log(
        error.response?.data?.message || "Something went wrong!!"
      );
    }
  };


  const updateApplicantStatus = async (e, userId) => {

   //console.log(userId);


    try {
      const res = await axios.patch(`${UPDATE_APPLICANT_STATUS_URL}/${id}`,
        {
          status: e,
          userId
        }, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
      )

      if (res) {
        getApplicantRelatedToJob()
      }
    } catch (error) {
      console.log("Something went wrong");

    }
  }

  useEffect(() => {

    getApplicantRelatedToJob();
  }, [id]);

  //console.log(applicants);



  return (
    <div className="fixed  bg-white  top-[10%] right-[10%] rounded-lg bottom-[10%] left-[10%] border 
    px-4 py-4
    ">
      <div className="title mb-4 text-2xl font-semiBold font-mono">
        {jobTitle}
      </div>
      <div className="h-[90%] overflow-hidden overflow-y-auto ">
        <ul className="">
          {
            applicants.length > 0 ? applicants?.map((jobseeker) => {
              //   console.log(jobseeker); 

              return (
                <li className="border px-4 mb-3 py-2 flex justify-between" key={jobseeker?.applicant?._id} >
                  <div className="flex gap-3">
                    <h4 className="capitalize">
                      {jobseeker?.applicant?.name}
                    </h4>
                    <div className="text-red-600">
                      <a
                        href={jobseeker?.applicant?.resume}
                        target="_blank"
                        download
                        rel="noopener noreferrer"
                      >
                        View Resume
                      </a> 
                    </div>
                  </div>
                  <div className="flex gap-5">
                    {
                      jobseeker?.status === "shortlisted" && (<button className="text-green-700 flex items-center font-semibold">
                        <TiTick className="text-lg" />  shortlisted</button>)
                    }
                    {
                      jobseeker?.status === "rejected" && <button className="text-red-700 flex items-center font-semibold">
                        <ImCross className="text-red-700 text-sm flex items-center font-semibold" /><span className="ml-1">rejected</span> </button>
                    }
                  </div>
                  {
                    jobseeker?.status === "applied" && <div className="flex gap-4">
                      <button className="text-green-700 flex items-center font-semibold" onClick={(e) => updateApplicantStatus("shortlisted", jobseeker?.applicant?._id)}>
                        <TiTick className="text-lg" />  shortlisted</button>
                      <button className="text-red-700 flex items-center font-semibold" onClick={(e) => updateApplicantStatus("rejected", jobseeker?.applicant?._id)}>
                        <ImCross className="text-red-700 text-sm flex items-center font-semibold" /><span className="ml-1">rejected</span> </button>
                    </div>
                  }
                </li>
              )
            }) : (
              <div>
                No applicant
              </div>
            )
          }



        </ul>

      </div>

      <ImCross className="cursor-pointer absolute right-4 top-4  " onClick={() => navigate("/showPostedJobs")} />

    </div>
  )
}

export default ShowApplicantPopUp
