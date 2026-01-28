import { useEffect, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
import { categoryFilter } from "../../utils/categoryFilter";
function BottomHeader({category}) {
    

//console.log(categoryFilter)
     
    return (
        <div className="BottomHeaderOuter">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
                <div className="flex items-center justify-between">
                    <ul className="flex items-center justify-center gap-11">
                        <Link to="/" className="cursor-pointer">Home</Link>
                        <li className="cursor-pointer transition-all duration-100 delay-100 relative group hover:text-[#5bb907] flex items-center justify-center gap-1">
                            {" "}
                            <span>Find Jobs</span> <MdKeyboardArrowDown />
                            <ul
                                className="sub-lists absolute  text-black top-full bg-white rounded-sm border border-gray-100 group-hover:duration-100 opacity-0 invisible translate-y-2
group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
transition-all duration-200 ease-out w-[220px]
"
                            >
                                {
                                    category?.map((categ,index)=>{
                                        return (
                                            <Link to={`/jobs?category=${encodeURIComponent(categ.title)}` } key={categ.title}>
                                            
                                                    <li className="hover:text-[#5bb907]  px-7 py-2 border-b-[1px] transition-all duration-150 ease-in-out  " >
                                            {categ.title} <span className="text-[#5bb907]">({categ.count})</span>
                                        </li>
                                            </Link>
                                        )
                                    })
                                }
                                
                                
                            </ul>
                        </li>

                        <li className="cursor-pointer">About</li>
                        <li className="cursor-pointer">Blogs</li>
                        <li className="cursor-pointer">Contact</li>
                    </ul>
                    <div className="flex gap-8">
                        <Link to="/login">
                            <button
                            className="border rounded-full border-black font-semibold px-6 bg-white  py-3
                        hover:bg-[#5bb907] hover:text-white hover:border-[#5bb907] transition delay-300 duration-75  ease-in-out  "
                        >
                            Log In
                        
                        
                        </button>
                        </Link>
                        <button className="bg-[#5bb907] rounded-full font-semibold text-white px-6 py-3   hover:bg-[#032f59] hover:text-white  transition delay-300 duration-75  ease-in-out">
                            Post A Job
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BottomHeader;
