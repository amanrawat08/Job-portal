
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom"; 
import { useSelector } from "react-redux";
import AccountCenter from "./AccountCenter";
function BottomHeader() {
    const user = useSelector((state)=>state.user.user);
    const category = useSelector((state)=>state.CategorySlice.categ);
    const navigate = useNavigate()
    //console.log(categoryFilter)
    return (
        <div className="BottomHeaderOuter">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
                <div className="flex items-center justify-between">
                    <ul className="flex items-center justify-center gap-11">
                        <Link to="/" className="cursor-pointer">Home</Link>
                        {
                            user?.role!=="recruiter" ?
                             <li className="cursor-pointer transition-all duration-100 delay-100 relative group hover:text-[#5bb907] flex items-center justify-center gap-1">
                            {" "}
                            <span>Find Jobs</span> <MdKeyboardArrowDown />
                            <ul
                                className="sub-lists absolute  text-black top-full bg-white rounded-sm border border-gray-100 group-hover:duration-100 opacity-0 invisible translate-y-2
group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
transition-all duration-200 ease-out w-[800px] flex flex-wrap -left-10 z-50
"
                            >
                                {
                                    category?.map((categ, index) => {
                                        return (
                                                <li className="hover:text-white w-[25%]  px-7 py-2 border-[1px] transition-all duration-150 ease-in-out  text-sm border-gray-100 hover:bg-[#5bb907]" key={categ._id} onClick={()=>navigate(`/jobs?category=${encodeURIComponent(categ.slug)}`)}>

                                                    {categ.name} 
                                                </li>
                                             
                                        )
                                    })
                                }


                            </ul>
                        </li> : <Link to="/showPostedJobs" className="cursor-pointer"> Show Posted Jobs </Link>
                        }
                        <li className="cursor-pointer">About</li>
                        <li className="cursor-pointer">Blogs</li>
                        <li className="cursor-pointer">Contact</li>
                    </ul>
                    <div className="flex gap-8 items-center">
                        {
                            (!user) &&
                                <Link to="/login">
                                    <button
                                        className="border rounded-full border-black font-semibold px-6 bg-white  py-3
                                hover:bg-[#5bb907] hover:text-white hover:border-[#5bb907] transition delay-300 duration-75  ease-in-out  "
                                    >
                                        Log In
        
        
                                    </button>
                                </Link>
                        }
                        {
                            (user) &&  <AccountCenter/>
                        }
                        {
                            user?.role!=="jobseeker" &&
                        <Link to="/createJob" className="bg-[#5bb907] rounded-full font-semibold text-white px-5 py-3   hover:bg-[#032f59] hover:text-white  transition delay-300 duration-75  ease-in-out">
                            Post A Job
                        </Link>
                        }
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BottomHeader;
