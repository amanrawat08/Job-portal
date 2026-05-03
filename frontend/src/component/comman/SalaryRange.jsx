

const SalaryRange = ({ handleJobsChange, salaryMin, salaryMax }) => {

    const salaryOptions = [
        { label: "Below 15,000", value: "15000" },
        { label: "16,000 - 30,000", value: "16000-30000" },
        { label: "30,000 - 50,000", value: "30000-50000" },
        { label: "50,000 - 80,000", value: "50000-80000" },
        { label: "Above 1,00,000", value: "100000" },
    ];
    console.log(`Salary min ${salaryMin} , Salary max ${salaryMax}`);


    return (
        <div className=" mt-4 border p-3 bg-white">
            <div className="mb-5 pb-1 border-b-2 text-xl font-semibold ">
                Salary Range
            </div>



            <form onChange={(e) => handleJobsChange(e.target.value, e.target.name)}>

  {/* 📱 Mobile Dropdown */}
  <div className="sm:hidden">
    <select
      name="minSalary"
      value={
        salaryMax
          ? `${salaryMin}-${salaryMax}`
          : salaryMin || ""
      }
      onChange={(e) =>
        handleJobsChange(e.target.value, "minSalary")
      }
      className="w-full border rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
    >
      <option value="">Select Salary</option>

      {salaryOptions.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  </div>

  {/* 💻 Desktop Radio */}
  <div className="hidden sm:block space-y-2 mt-2">
    {salaryOptions.map((opt) => (
      <label key={opt.value} className="flex items-center gap-2 cursor-pointer">
        
        <input
          type="radio"
          name="minSalary"
          value={opt.value}
          checked={
            opt.value.includes("-")
              ? `${salaryMin}-${salaryMax}` === opt.value
              : salaryMin == opt.value || salaryMax == opt.value
          }
          className="accent-teal-500"
        />

        <span>{opt.label}</span>
      </label>
    ))}
  </div>

</form>




        </div>
    )
}

export default SalaryRange
