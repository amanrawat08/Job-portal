
import {useNavigate} from 'react-router-dom'
import { fetchJobCategories } from '../../redux/jobCategorySlice ';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
function JobCategory() { 
  const dispatch = useDispatch()
  const { categ, loading } = useSelector(
    (state) => state.CategorySlice
  );

  console.log();
  

  useEffect(() => { 
  }, [dispatch]);
  const navigate = useNavigate(); 
 // console.log(data.categories);
  
  return (
    <section>
      <div className="max-w-7xl mx-auto  px-8 sm:px-6 lg:px-8 py-12 ">
        <div className="text-center mb-12">
          <h1 className="heading">Trending Jobs <span className="heading-design">Category</span> </h1>
          <p className="subTitle">To choose your trending job dream & to make future bright.</p>
        </div>
        <div className="categ-job grid grid-cols-4 gap-6 justify-between">
            {
                 categ?.map((job, index)=>{
                    if (index > 7) return 
                    return <div className=" card border cursor-pointer basis-1/5 border-[rgb(236 236 236)] rounded-sm px-5 py-8 categ-card" key={index} 
                    onClick={()=>navigate(`/jobs?category=${encodeURIComponent(job.slug)}`)}
                    >
                                
                    <div>
                        <img src="account-finance.svg" alt="" />
                    </div>
                    <div className="">
 
                        <h4 className="font-semibold text-base pt-3 color-main " >{job.name}</h4>
                        {
                          /*
                          
                          <span className="text-sm text-gray-500 pt-4">
                          Job Available: <span className="color-secondary font-bold">{job.jobsAvailable}</span> 
  
                          </span>
                          
                          */
                        }
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
