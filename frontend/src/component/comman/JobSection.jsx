import { useEffect, useState } from "react";
import { jobs } from "../../data/Jobs";
import JobCard from "../../feature/jobs/JobCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobCategories } from "../../redux/jobCategorySlice ";
import axios from "axios";
function JobSection() {
  const [category, setCategory] = useState([])
  const [showCategory, setShowCategory] = useState("");
  const [jobs, setJobs] = useState([]);
  const initialJobs = useSelector((state)=>state.jobs.job);
  // our new code....
  const dispatch = useDispatch();
  const { data, loading } = useSelector(
    (state) => state.jobCategories
  );

  const getCategory = async () => {

    try {
      const res = await axios.get(`https://job-portal-6cpj.onrender.com/api/jobs/getCategoryWithJobs`, {
      withCredentials: true
    });

    setCategory(res.data.categories);
    } catch (error) {
      console.log(error);
      
    }

    
  }

  useEffect(() => {
    getCategory()
  }, [initialJobs]);

  

  const categHandler = async (id) => {
    setShowCategory(id);
    try {
     // console.log(id);
      const res = await axios.get(`http://localhost:3000/api/jobs/getJobByCategories/${id}`, {
        withCredentials: true
      });
      setJobs(res.data.jobs);

    } catch (error) {
      console.log(error);

    }

  }

  return (
    <section className="bg-color">
      <div className="max-w-7xl mx-auto  px-8 sm:px-6 lg:px-8 py-12 ">
        <div className="text-center mb-12">
          <h1 className="heading capitalize">JOBES  <span className="heading-design">Latest</span> Job </h1>
          <p className="subTitle">To choose your trending job dream & to make future bright.</p>
        </div>
        <div className="categ-btn flex flex-wrap gap-3 justify-center mb-10">

          {
            category.map((categ, index) => {
              if(index<=18){
                return <button key={index} className="text-sm " onClick={() => categHandler(categ._id)}>{categ.name}</button>
              }

            })
          }

        </div>
        <div className="categ-job grid grid-cols-4 gap-6  ">
          {
            jobs && jobs.length > 0 ? jobs?.map((job, index) => {
              return <JobCard key={index} job={job} />

            }) : !showCategory &&
              initialJobs?.map((job, index) => {
                if(index>8){
                  return
                }
                return <JobCard key={index} job={job} />
              })
          }

          {
            showCategory && jobs.length <= 0 && <h1>No jobs Found</h1>
          }

        </div>
      </div>
    </section>
  );
}

export default JobSection;
