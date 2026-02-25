import { MdAccountCircle } from "react-icons/md";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const AccountCenter = () => {
    const navigate = useNavigate();
    const id = useSelector((state)=>state?.user?.user?._id); 
    
    return <div className="relative group">
        <MdAccountCircle className="cursor-pointer text-3xl color-main" />

        <ul
            className="
                absolute left-4 top-8 w-40
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
            <li className="px-3 py-2 border-b hover:bg-gray-100 cursor-pointer" onClick={()=>navigate(`/editProfile/${id}`)}>
                Edit Profile
            </li>
            <li className="px-3 py-2 hover:bg-gray-100 cursor-pointer">
                View Applicants
            </li>
        </ul>
    </div>

}

export default AccountCenter;