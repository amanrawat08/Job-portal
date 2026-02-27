import { MdAccountCircle } from "react-icons/md";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const AccountCenter = () => {
    const navigate = useNavigate();
    const user = useSelector((state)=>state?.user?.user); 
     
    
    return <div className="relative group">
        <MdAccountCircle className="cursor-pointer text-3xl color-main" />

        <ul
            className="
                absolute   top-8 w-40 right-5  
                bg-white border rounded-md shadow-md
                opacity-0 invisible
                translate-y-2 scale-95
                transition-all duration-200 ease-out
                group-hover:opacity-100
                group-hover:visible
                group-hover:translate-y-0
                group-hover:scale-100
                "
        >
            <li className="px-3 py-2 border-b hover:bg-gray-100 cursor-pointer" onClick={()=>navigate(`/editProfile/${user?._id}`)}>
                Edit Profile
            </li>
             {
                user.role==="jobseeker"  && user.resume && <li className=" hover:bg-gray-100 cursor-pointer border-b">
                <a href={user.resume} className="w-100 block h-100 px-3 py-2" target="_blank" rel="noopener noreferrer">
                    View Resume
                </a>
            </li>
             }

             {
                user.role==="jobseeker" && <li className="px-3 py-2 hover:bg-gray-100 cursor-pointer" onClick={()=>navigate(`/userJobApplied/${user._id}`)}> 
                    Job Applied
                </li>
             }
            
        </ul>
    </div>

}

export default AccountCenter;