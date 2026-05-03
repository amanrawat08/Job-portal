
const TypeCategory = ({ categ, handleJobsChange, currCategory }) => {


    return (
        <div className="  border p-3 bg-white">
            
            <div className="mb-5 pb-1 border-b-2 text-xl font-semibold ">
                Job Category
            </div>
            <select
                name="category"
                value={currCategory || ""}
                onChange={(e) =>
                    handleJobsChange(e.target.value, e.target.name)
                }
                className="w-full border rounded-md p-2 sm:p-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-teal-500  block xl:hidden"
            >
                <option value="">Select Category</option>

                {categ.map((item) => (
                    <option key={item.slug} value={item.slug}>
                        {item.name}
                    </option>
                ))}

            </select>
            <form className="categoies h-72 overflow-hidden overflow-y-scroll hidden xl:block">
                {
                    categ.map((categ) => {
                        return <label key={categ.name}>
                            <input
                                type="radio"
                                name="category"
                                value={categ.slug}
                                checked={currCategory === categ.slug}
                                onChange={(e) =>
                                    handleJobsChange(e.target.value, e.target.name)
                                }
                            />
                            <span className="ml-2">{categ.name}</span>
                            <br />
                        </label>
                    })
                }
            </form>

        </div>
    )
}

export default TypeCategory
