import { useEffect, useState } from "react";
import { jobs } from "../../data/Jobs";
import JobCard from "../../feature/jobs/JobCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobCategories } from "../../redux/jobCategorySlice ";
import axios from "axios";
import { BACKEND_URL } from "../../utils/comman";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 

const settings = {
  dots: false,
  infinite: true,
  speed: 500, 
   autoplay: true, // correct property name
  autoplaySpeed: 2000,
  slidesToShow: 1.009,
  slidesToScroll: 1, // better with 1 for autoplay slider 
};

function JobSection() {
  const [category, setCategory] = useState([])
  const [showCategory, setShowCategory] = useState("");
  const [jobs, setJobs] = useState([]);
  const initialJobs = useSelector((state) => state.jobs.job);

  const dispatch = useDispatch();
  const { data, loading } = useSelector(
    (state) => state.jobCategories
  );

  const getCategory = async () => {
    try {
      const res = await axios.get(`${BACKEND_URL}/api/jobs/getCategoryWithJobs`, {
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
      const res = await axios.get(`${BACKEND_URL}/api/jobs/getJobByCategories/${id}`, {
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
              if (index <= 18) {
                return <button key={index} className="text-sm " onClick={() => categHandler(categ._id)}>{categ.name}</button>
              }
            })
          }
        </div>

        <div className="categ-job  grid-cols-4 gap-6 hidden md:grid">
          {
            jobs && jobs.length > 0
              ? jobs.map((job, index) => <JobCard key={index} job={job} />)
              : !showCategory &&
              initialJobs?.map((job, index) => {
                if (index > 8) return;
                return <JobCard key={index} job={job} />;
              })
          }

          {
            showCategory && jobs.length <= 0 && <h1>Loading...</h1>
          }
        </div>
        <div className="categ-job  gap-6 md:hidden">
          <JobSectionSlider jobs={jobs} showCategory={showCategory} initialJobs={initialJobs} />
        </div>
      </div>
    </section>
  );
}



 

 



const JobSectionSlider = ({ jobs, showCategory, initialJobs }) => {
  return (
    <div className="slider-container h-[350px]">
      <Slider {...settings}>
        {
          jobs && jobs.length > 0
            ? jobs.map((job, index) => <JobCard key={index} job={job} />)
            : !showCategory &&
            initialJobs?.map((job, index) => {
              if (index > 8) return;
              return <JobCard key={index} job={job} />;
            })
        }

        {
          showCategory && jobs.length <= 0 && <h1>Loading...</h1>
        }
      </Slider>
    </div>
  )
}

export default JobSection;