import {useNavigate} from 'react-router-dom'
import { fetchJobCategories } from '../../redux/jobCategorySlice ';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    loop: true,
    gap: 20,
    autoplay: true,
    lazyLoad: true,
    speed: 2000,
    nav: true,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };


  
  function JobCategory() { 
    
    const dispatch = useDispatch()
    
    const navigate = useNavigate(); 
  const { categ, loading } = useSelector(
    (state) => state.CategorySlice
  );


  useEffect(() => { 
    // agar future me API call karna ho toh yahan karna
    // dispatch(fetchJobCategories())
  }, [dispatch]);

  return (
    <section>
      <div className="max-w-7xl mx-auto  px-8 sm:px-6 lg:px-8 py-12 ">
        <div className="text-center mb-12">
          <h1 className="heading">Trending Jobs <span className="heading-design">Category</span> </h1>
          <p className="subTitle">To choose your trending job dream & to make future bright.</p>
        </div>

        <div className="categ-job  gap-6  hidden md:grid lg:grid-cols-5">
          {
            categ?.map((job, index)=>{
              if (index > 7) return;

              return (
                <div
                  key={index}
                  className="card border cursor-pointer basis-1/5 border-[rgb(236 236 236)] rounded-sm px-5 py-8 categ-card"
                  onClick={()=>navigate(`/jobs?category=${encodeURIComponent(job.slug)}`)}
                >
                  <div>
                    <img src="account-finance.svg" alt="" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-base sm:text-sm pt-3 color-main">
                      {job.name}
                    </h4>
                  </div>
                </div>
              )
            })
          }
        </div>

        <MobileJobCategory categ={categ} />
      </div>
    </section>
  );
}

const MobileJobCategory = ({ categ } ) => {
  const navigate = useNavigate();
  return <div className="slider-container sm:hidden">
      <Slider {...settings}>
        {
            categ?.map((job, index)=>{
              if (index > 7) return;

              return (
                <div
                  key={index}
                  className="card border cursor-pointer basis-1/5 border-[rgb(236 236 236)] rounded-sm px-5 py-8 categ-card min-h-[170px] m-2 "
                  onClick={()=>navigate(`/jobs?category=${encodeURIComponent(job.slug)}`)}
                >
                  <div>
                    <img src="account-finance.svg" alt="" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-base pt-3 color-main">
                      {job.name}
                    </h4>
                  </div>
                </div>
              )
            })
          }
         
      </Slider>
    </div>
}

export default JobCategory;