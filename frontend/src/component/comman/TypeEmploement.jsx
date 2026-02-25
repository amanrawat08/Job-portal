import React from 'react'

const TypeEmploement = ({handleJobsChange}) => {
    return (
        <div className=" mt-4   border p-3 bg-white">
            <div className="mb-5 pb-1 border-b-2 text-xl font-semibold ">
                Type Of Employment
            </div>
            <form className=" " onChange={(e)=>handleJobsChange(e.target.value, e.target.name)} >
                <label className=""  >
                    <input type="radio" name="jobType" value="Internship"  />
                    <span className="ml-2 ">Internship</span>
                    <br />
                </label>
                <label className=""  >
                    <input type="radio" name="jobType" value="Part-time"  />
                    <span className="ml-2 ">Part-time</span>
                    <br />
                </label>
                <label className=""  >
                    <input type="radio" name="jobType" value="Full-time"  />
                    <span className="ml-2 ">Full-time</span>
                    <br />
                </label>
                <label className=""  >
                    <input type="radio" name="jobType" value="Contract"  />
                    <span className="ml-2 ">Contract</span>
                    <br />
                </label>
            </form>

        </div>
    )
}

export default TypeEmploement
