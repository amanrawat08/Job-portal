import { useSelector } from "react-redux"
import TypeCategory from "./TypeCategory";
import TypeEmploement from "./TypeEmploement";
import SalaryRange from "./SalaryRange";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const FiltersSection = ({ setJobs }) => {
    const categ = useSelector((state) => state.CategorySlice.categ);
    const [searchParams, setSearchParams] = useSearchParams()
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
            }else if (value[0] == 15000 && value.length >= 0) {
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
        const fetchJobs = async () => {
            const res = await axios.get("https://job-portal-web-coral.vercel.app/api/jobs/getFilteredJobs", {
                params: {
                    category,
                    jobType,
                    salaryMin,
                    salaryMax
                },
            });

            if (res.data.jobs) setJobs(res.data.jobs);
        };

        fetchJobs();
    }, [category, jobType, salaryMin]); // 👈 URL-driven





    return (
        <div className="w-[30%] border
                px-5 py-6 rounded-sm border-t-[4px] border-t-[#5bb907] bg-blue-50
                ">
            <div>
                {/**job ccategory */}
                <TypeCategory categ={categ}
                 handleJobsChange={handleJobsChange} />
                {/* type of employment */}
                {
                    <TypeEmploement handleJobsChange={handleJobsChange} />
                }
                {/* Salary Range */}
                <SalaryRange handleJobsChange={handleJobsChange} />
            </div>
        </div>

    )
}

export default FiltersSection
