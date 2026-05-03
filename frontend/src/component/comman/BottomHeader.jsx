import { MdKeyboardArrowDown } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import AccountCenter from "./AccountCenter";
import { useState } from "react";

function BottomHeader() {
  const user = useSelector((state) => state.user.user);
  const category = useSelector((state) => state.CategorySlice.categ);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="BottomHeaderOuter border-b relative">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-8 py-3  ">

        <div className="flex items-center justify-between md:w-full">



          {/* 🔹 Desktop Menu */}
          <ul className="hidden md:flex items-center gap-10">

            <Link to="/">Home</Link>

            {
              user?.role !== "recruiter" ? (
                <li className="relative group flex items-center gap-1 cursor-pointer hover:text-[#5bb907]">
                  <span>Find Jobs</span>
                  <MdKeyboardArrowDown />

                  {/* Dropdown */}
                  <ul className="absolute top-full left-0 bg-white border rounded shadow-md w-[600px] flex flex-wrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    {
                      category?.map((categ) => (
                        <li
                          key={categ._id}
                          onClick={() =>
                            navigate(`/jobs?category=${encodeURIComponent(categ.slug)}`)
                          }
                          className="w-1/2 md:w-1/3 px-4 py-2 text-sm border hover:bg-[#5bb907] hover:text-white cursor-pointer"
                        >
                          {categ.name}
                        </li>
                      ))
                    }
                  </ul>
                </li>
              ) : (
                <Link to="/showPostedJobs">Show Posted Jobs</Link>
              )
            }

            
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </ul>

          {/* 🔹 Right Section (Desktop) */}
          <div className="hidden md:flex items-center gap-6">

            {
              !user && (
                <Link to="/login">
                  <button className="border rounded-full px-5 py-2 hover:bg-[#5bb907] hover:text-white transition">
                    Log In
                  </button>
                </Link>
              )
            }
            {
                (user  && <h5>Hey, {user?.name}</h5>)
                
              }
            {
              user && <AccountCenter />
            }

            <div>
              
              {
                (!user || user?.role === "recruiter") && user?.role !== "jobseeker" && (
                  <Link
                    to={user?.role === "recruiter" ? "/createJob" : "/login"}
                    className="bg-[#5bb907] text-white px-4 py-2 rounded-full text-center"
                  >
                    Post A Job
                  </Link>
                )
              }
              
            </div>
          </div>

          {/* 🔹 Hamburger */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>

        {/* 🔹 Mobile Menu */}
        <div className={`${isOpen ? "block" : "hidden"} md:hidden mt-4 min-h-[70vh] border-t pt-4`}>

          <ul className="flex flex-col gap-4">

            <Link to="/" onClick={() => toggleMenu()}>Home</Link>



            <Link to="/about" onClick={() => toggleMenu()}>About</Link>
             {
                (!user || user?.role === "recruiter") && user?.role !== "jobseeker" && (
                  <Link
                    to={user?.role === "recruiter" ? "/createJob" : "/login"}
                    className="      "
                  >
                    Post A Job
                  </Link>
                )
              }
            <Link to="/contact" onClick={() => toggleMenu()}>Contact</Link>

             {
              user?.role !== "recruiter" ? (
                <>
                  <span className="font-medium">Find Jobs Category</span>
                  <div className="grid grid-cols-2 gap-2 h-52 overflow-y-scroll border p-2 rounded">
                    {
                      category?.map((categ) => (
                        <div
                          key={categ._id}
                          onClick={() => {
                            toggleMenu();
                            return navigate(`/jobs?category=${encodeURIComponent(categ.slug)}`)
                          }}
                          className="text-sm border p-2 rounded hover:bg-[#5bb907] hover:text-white"
                        >
                          {categ.name}
                        </div>
                      ))
                    }
                  </div>
                </>
              ) : (
                <Link to="/showPostedJobs" onClick={() => toggleMenu()}>Show Posted Jobs </Link>
              )
            }

           
           


          </ul>
        </div>


        <div className="md:hidden mt-4 border-t pt-4 absolute top-[-18px] right-5 p-4">
          {/* Auth */}
          {
            !user && (
              <Link to="/login">
                <button className="border rounded-full px-4 py-2 w-full">
                  Log In
                </button>
              </Link>
            )
          }

          {
            user && <AccountCenter />
          }
          {
            console.log(user?.role !== "jobseeker")

          }

          {/*
            (!user || user?.role === "recruiter") && user?.role !== "jobseeker" && (
              <Link
                to={user?.role === "recruiter" ? "/createJob" : "/login"}
                className="bg-[#5bb907] text-white px-4 py-2 rounded-full text-center"
              >
                Post A Job
              </Link>
            )
          */}
        </div>

      </div>
    </div>
  );
}

export default BottomHeader;