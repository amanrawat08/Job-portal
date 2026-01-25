import { jobs } from "../../data/Jobs";
function JobCategory() {
    const jobCategories = jobs.reduce((acc, job)=>{
        acc[job.title] = (acc[job.title] || 0 ) + 1; 
        return acc
    },[]) 
  return (
    <section>
      <div className="max-w-7xl mx-auto  px-8 sm:px-6 lg:px-8 py-12 ">
        <div className="text-center mb-12">
          <h1 className="heading">Trending Jobs <span className="heading-design">Category</span> </h1>
          <p className="subTitle">To choose your trending job dream & to make future bright.</p>
        </div>
        <div className="categ-job grid grid-cols-4 gap-6 justify-between">
            {
                 Object.entries(jobCategories).map((job, index)=>{
                    if (index > 7) return 
                    return <div className=" card border cursor-pointer basis-1/5 border-[rgb(236 236 236)] rounded-sm px-5 py-8 categ-card" key={index}>
                                
                    <div>
                        <img src="account-finance.svg" alt="" />
                    </div>
                    <div className="">
 
                        <h4 className="font-bold text-base pt-3 color-main ">{job[0]}</h4>
                        <span className="text-sm text-gray-500 pt-4">
                        Job Available: <span className="color-secondary font-bold">{job[1]}</span> 

                        </span>
                    </div>
            </div>
                 })
            }
            
        </div>
      </div>
    </section>
  );
}

export default JobCategory;
