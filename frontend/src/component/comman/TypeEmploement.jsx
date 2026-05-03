import React from 'react'

const TypeEmploement = ({ handleJobsChange, currJobType }) => {
    return (
        <div className=" mt-4   border p-3 bg-white">
            <div className="mb-5 pb-1 border-b-2 text-xl font-semibold ">
                Type Of Employment
            </div>
            {/*
            <form className=" " onChange={(e) => handleJobsChange(e.target.value, e.target.name)} >
                <label className=""  >
                    <input type="radio" name="jobType" value="Internship" checked={currJobType === "Internship"} />
 
                    <span className="ml-2 ">Internship</span>
                    <br />
                </label>
                <label className=""  > 
                    <input type="radio" name="jobType" value="Part-time" checked={currJobType === "Part-time"} />
 
                    <span className="ml-2 ">Part-time</span>
                    <br />
                </label>
                <label className=""  > 
                    <input type="radio" name="jobType" value="Full-time" checked={currJobType === "Full-time"} />
 
                    <span className="ml-2 ">Full-time</span>
                    <br />
                </label>
                <label className=""  >
 
                    <input type="radio" name="jobType" value="Contract" checked={currJobType === "Contract"} />
 
                    <span className="ml-2 ">Contract</span>
                    <br />
                </label>
            </form> */}

            <form
                onChange={(e) => handleJobsChange(e.target.value, e.target.name)}
            >

                {/* 📱 Mobile Dropdown */}
                <div className="sm:hidden">
                    <select
                        name="jobType"
                        value={currJobType || ""}
                        onChange={(e) =>
                            handleJobsChange(e.target.value, e.target.name)
                        }
                        className="w-full border rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                    >
                        <option value="">Select Job Type</option>
                        <option value="Internship">Internship</option>
                        <option value="Part-time">Part-time</option>
                        <option value="Full-time">Full-time</option>
                        <option value="Contract">Contract</option>
                    </select>
                </div>

                {/* 💻 Desktop Radio Buttons */}
                <div className="hidden sm:block space-y-2 mt-2">

                    <label className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="radio"
                            name="jobType"
                            value="Internship"
                            checked={currJobType === "Internship"}
                            className="accent-teal-500"
                        />
                        <span>Internship</span>
                    </label>

                    <label className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="radio"
                            name="jobType"
                            value="Part-time"
                            checked={currJobType === "Part-time"}
                            className="accent-teal-500"
                        />
                        <span>Part-time</span>
                    </label>

                    <label className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="radio"
                            name="jobType"
                            value="Full-time"
                            checked={currJobType === "Full-time"}
                            className="accent-teal-500"
                        />
                        <span>Full-time</span>
                    </label>

                    <label className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="radio"
                            name="jobType"
                            value="Contract"
                            checked={currJobType === "Contract"}
                            className="accent-teal-500"
                        />
                        <span>Contract</span>
                    </label>

                </div>

            </form>

        </div>
    )
}

export default TypeEmploement
