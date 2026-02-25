import React from 'react'

const SalaryRange = ({handleJobsChange}) => {
  return (
    <div className=" mt-4 border p-3 bg-white">
                    <div className="mb-5 pb-1 border-b-2 text-xl font-semibold ">
                        Salary Range
                    </div>
                    <form className=" " onChange={(e)=>handleJobsChange(e.target.value, e.target.name)
                    }>
                        <label className=""  >
                            <input type="radio" name="minSalary" value="15000" />
                            <span className="ml-2 ">below 15,000</span>
                            <br />
                        </label>
                        <label className=""  >
                            <input type="radio" name="minSalary" value="16000-30000" />
                            <span className="ml-2 ">
                                16,000 - 30,000
                            </span>
                            <br />
                        </label>
                        <label className=""  >
                            <input type="radio" name="minSalary" value="30000-50000" />
                            <span className="ml-2 ">30,000-50,000</span>
                            <br />
                        </label>
                        <label className=""  >
                            <input type="radio" name="minSalary" value="50000-800000" />
                            <span className="ml-2 ">50,000 - 80,000</span>
                            <br />
                        </label>
                        <label className=""  >
                            <input type="radio" name="minSalary" value="100000" />
                            <span className="ml-2 ">Above 1,00,000</span>
                            <br />
                        </label>
                    </form>

                </div>
  )
}

export default SalaryRange
