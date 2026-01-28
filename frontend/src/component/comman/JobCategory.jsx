
import {useNavigate} from 'react-router-dom'
function JobCategory({category}) { 
    const navigate = useNavigate();
  return (
    <section>
      <div className="max-w-7xl mx-auto  px-8 sm:px-6 lg:px-8 py-12 ">
        <div className="text-center mb-12">
          <h1 className="heading">Trending Jobs <span className="heading-design">Category</span> </h1>
          <p className="subTitle">To choose your trending job dream & to make future bright.</p>
        </div>
        <div className="categ-job grid grid-cols-4 gap-6 justify-between">
            {
                 category?.map((job, index)=>{
                    if (index > 7) return 
                    return <div className=" card border cursor-pointer basis-1/5 border-[rgb(236 236 236)] rounded-sm px-5 py-8 categ-card" key={index} 
                    onClick={()=>navigate(`/jobs?category=${encodeURIComponent(job.title)}`)}
                    >
                                
                    <div>
                        <img src="account-finance.svg" alt="" />
                    </div>
                    <div className="">
 
                        <h4 className="font-bold text-base pt-3 color-main " >{job.title}</h4>
                        <span className="text-sm text-gray-500 pt-4">
                        Job Available: <span className="color-secondary font-bold">{job.count}</span> 

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
