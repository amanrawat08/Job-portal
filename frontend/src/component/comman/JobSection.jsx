import { useState } from "react";
import { jobs } from "../../data/Jobs";
import JobCard from "./JobCard";
import { Link } from "react-router-dom";
function JobSection() {
    const [category, setCategory] = useState("all");
    const categoryFilter = Object.entries(
        jobs.reduce((acc,job)=>{
        acc[job.title] = (acc[job.title] || 0 ) + 1;
        return acc;
    },{})
    ).map(([title, count])=>({title, count}));
    const filterJobs = category === "all" ? jobs : jobs.filter((job)=>job.title === category) ;
     
  return (
    <section className="bg-color">
      <div className="max-w-7xl mx-auto  px-8 sm:px-6 lg:px-8 py-12 ">
        <div className="text-center mb-12">
          <h1 className="heading capitalize">JOBES  <span className="heading-design">Latest</span> Job </h1>
          <p className="subTitle">To choose your trending job dream & to make future bright.</p>
        </div>
        <div className="categ-btn flex flex-wrap gap-3 justify-center mb-10">
            <button onClick={()=>setCategory("all")}>All</button>
            {
                categoryFilter.map((categ,index)=>{

                    return <button key={index} onClick={()=>setCategory(categ.title)}>{categ.title}</button>

                })   
            }
        </div>
        <div className="categ-job grid grid-cols-4 gap-6">
            {
                filterJobs.map((job,index)=>{
                    if(index < 8) return  <JobCard key={index} job={job}/>
                    
                })

            }
            
        </div>
      </div>
    </section>
  );
}

export default JobSection;
