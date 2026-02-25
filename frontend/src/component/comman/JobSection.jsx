import { useEffect, useState } from "react";
import { jobs } from "../../data/Jobs";
import JobCard from "../../feature/jobs/JobCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobCategories } from "../../redux/jobCategorySlice ";
function JobSection() {
  const [category, setCategory] = useState("");
  const [categoryShown, setCategoryShown] = useState([]);

  //our new code....
  const dispatch = useDispatch();
  const { data, loading } = useSelector(
    (state) => state.jobCategories
  );

  useEffect(() => {
    dispatch(fetchJobCategories());
  }, [dispatch]);
  
  const categHandler = (id) => {
    setCategory(id)
    let categories = data?.categories?.filter((value) => value._id === category);
    setCategoryShown(categories[0]?.jobs);

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
            data?.categories?.map((categ, index) => {

              return <button key={index} onClick={() => categHandler(categ._id)}>{categ._id}</button>

            })
          }


        </div>
        <div className="categ-job grid grid-cols-4 gap-6">
          {
            categoryShown?.map((job, index) => {
              return <JobCard key={index} job={job} />

            })


          }

        </div>
      </div>
    </section>
  );
}

export default JobSection;
