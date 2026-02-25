
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import axios from "axios";
import { CLOUD_API_NAME, UPDATE_POSTEDJOB_URL, UPDATE_USER_URL } from "../utils/comman";

import toast from 'react-hot-toast';
import { setUserDetails } from "../redux/userSlice";
const EditProfile = () => {
  const user = useSelector((state) => state?.user?.user);
  console.log(user.name);

  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [company, setCompany] = useState(user?.company);
  const [contact, setContact] = useState(user?.contact);
  const [skills, setSkills] = useState(["html", "css", "js"]);
  const [resume, setResume] = useState()
  const dispatch = useDispatch();



  const submitHandler = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    console.log(token);


    try {
      // console.log(id, token);

      try {
        const res = await axios.put(`${UPDATE_USER_URL}`, {
          id: user._id,
          company: company,
          contact: contact || null,
          name: name,
          skills: skills.join(", "),
          role: user.role
        }, {
          "withCredentials": true,
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
          }
        }
        )
        console.log(res?.data?.user);
        toast.success(res?.data?.message)

        dispatch(setUserDetails(res?.data?.user))
      } catch (error) {
        console.log(error);

      }

    } catch (error) {
      console.log(error);

    }
  }


  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto flex max-w-6xl overflow-hidden rounded-xl bg-white shadow">
        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="mb-6 flex items-center justify-between">
            <h1 className="text-2xl font-semibold">Edit profile</h1>

            <img
              src="https://i.pravatar.cc/100"
              alt="profile"
              className="h-14 w-14 rounded-full object-cover"
            />
          </div>

          {/* Form */}
          <form className="grid grid-cols-2 gap-5 md:grid-cols-2" onSubmit={submitHandler}>
            <div>
              <label name="name">
                Name
              </label> <br />
              <input className="w-full border pl-3 py-2 active:border-0" type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)
              } />
            </div>
            <div>
              <label name="email">
                Email
              </label> <br />
              <input disabled className="w-full border pl-3 py-2 active:border-0" type="text" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
              <label name="contact">
                Contact Number
              </label> <br />
              <input pattern="^[0-9]{10}$"
                maxLength={10} className="w-full border pl-3 py-2 active:border-0" placeholder="Enter Contact number" type="number" name="name" id="name" value={contact || ""} onChange={(e) => setContact(e.target.value)} />
            </div>
            {
              user.role === "recruiter" && <div>
                <label name="company">
                  Company Name
                </label> <br />
                <input className="w-full border pl-3 py-2 active:border-0" type="text" name="company" id="company" value={company} onChange={(e) => setCompany(e.target.value)} />
              </div>
            }

            <div>
              <label name="role">
                Role
              </label> <br />
              <input disabled className="w-full border pl-3 py-2 active:border-0" type="text" name="name" id="name" value={user.role} />
            </div>


            {
              user.role === "jobseeker" && <div>
                <label name="role">
                  Upload Resume
                </label> <br />
                <input className="w-full border pl-3 py-2 active:border-0" name="name" id="name" type="file"
                  accept=".pdf,.doc,.docx" onChange={(e) => setResume(e.target.files[0])
                  } />
              </div>
            }
            {
              user.role === "jobseeker" && <div>
                <label name="skills">
                  Skills
                </label> <br />
                {console.log(skills)}
                <input className="w-full border pl-3 py-2 active:border-0" placeholder="Enter skills seperated by commas" type="text" name="skills" id="skills" value={skills} onChange={(e) => setSkills([e.target.value])} />
              </div>
            }


            <br />
            <div>
              <button
                type="submit"
                className="rounded-md bg-orange-500 px-6 py-2 text-white hover:bg-orange-600"
              >
                Save
              </button>
            </div>

          </form>
        </main>
      </div>
    </div>
  );
};

export default EditProfile;
