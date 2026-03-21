 
const TypeCategory = ({categ, handleJobsChange}) => {
    return (
        <div className="  border p-3 bg-white">
            <div className="mb-5 pb-1 border-b-2 text-xl font-semibold ">
                Job Category
            </div>
            <form className="categoies h-72 overflow-hidden overflow-y-scroll">
                {
                    categ.map((categ) => {
                        return <label className="" key={categ.name}>
                            <input type="radio" name="category" value={categ.slug} onChange={(e)=>handleJobsChange(e.target.value, e.target.name)
                            } />
                            <span className="ml-2 ">{categ.name}</span>
                            <br />
                        </label>
                    })
                }
            </form>

        </div>
    )
}

export default TypeCategory
