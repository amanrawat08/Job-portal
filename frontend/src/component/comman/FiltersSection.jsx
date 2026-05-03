import { useSelector } from "react-redux"
import TypeCategory from "./TypeCategory";
import TypeEmploement from "./TypeEmploement";
import SalaryRange from "./SalaryRange";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../../utils/comman";

const FiltersSection = ({ setJobs, setLoading }) => {
    const categ = useSelector((state) => state.CategorySlice.categ);  
    const [searchParams, setSearchParams] = useSearchParams();

    const category = searchParams.get("category");
    const jobType = searchParams.get("jobType");
    const salaryMin = searchParams.get("minSalary");
    const salaryMax = searchParams.get("maxSalary");


    const handleJobsChange = (value, changedURL) => {
        const params = new URLSearchParams(searchParams);
        if (changedURL === "category") {
            params.set("category", value);
        } else if (changedURL === "jobType") {
            params.set("jobType", value);
        } else if (changedURL === "minSalary") {
            value = (value.split("-"));
            if (value[0] == 100000) {
                params.delete("minSalary");
                params.set("maxSalary", value[0]);
            } else if (value[0] == 15000 && value.length >= 0) {
                params.delete("maxSalary");
                params.set("minSalary", value[0]);
            } else if (value.length > 0) {
                params.set("minSalary", value[0]);
                params.set("maxSalary", value[1]);
            }

        }

        setSearchParams(params)
    }

    useEffect(() => { 
        setLoading(true)
        const fetchJobs = async () => {
            const res = await axios.get(`${BACKEND_URL}/api/jobs/getFilteredJobs`, {
                params: {
                    category,
                    jobType,
                    salaryMin,
                    salaryMax
                },
            });
            setJobs(res.data.jobs);
            setLoading(false)
            
        };

        fetchJobs();
    }, [category, jobType, salaryMin]); 

    return (
        <div className="xl:w-[30%] w-full border
                px-5 py-6 rounded-sm border-t-[4px] border-t-[#5bb907] bg-blue-50
                ">
            <div>
                {/**job ccategory */}
                <TypeCategory categ={categ}
                    handleJobsChange={handleJobsChange} currCategory={category} />
                {/* type of employment */}
                {
                    <TypeEmploement handleJobsChange={handleJobsChange} currJobType={jobType} />
 
                }
                {/* Salary Range */}
                <SalaryRange handleJobsChange={handleJobsChange} salaryMax={salaryMax} salaryMin={salaryMin}/>
            </div>
        </div>

    )
}

export default FiltersSection
