
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { REGISTER_USER_URL } from "../../utils/comman";
import { useDispatch } from "react-redux";
import { setUserDetails } from "../../redux/userSlice";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");
  const [resume, setResume] = useState(null);
  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {

      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("role", role);
      formData.append("company", company);
      if (resume) {
        formData.append("resume", resume)
      }

      for (let pair of formData.entries()) {
        console.log(pair[0], pair[1]);
      } for (let pair of formData.entries()) {
        console.log(pair[0], pair[1]);
      } (formData);

      const res = await axios.post(`${REGISTER_USER_URL}`, formData, {
        withCredentials: true,
      });

      console.log(res);
      const { _id, name: user, email: userEmail, role: role2, company: company2 } = res?.data?.user;
      console.log(role, name, email, password, company2);
      dispatch(setUserDetails({ _id, user, userEmail, role2, company2 }));
      setEmail("")
      setName("")
      setPassword("")
      setRole("")
      setCompany("")
    } catch (error) {
      console.log(error)
    }

  }

  return (
    <div className="min-h-screen p-3 flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 px-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 md:p-10">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">
          Create your account
        </h2>
        <p className="text-slate-600 mb-6">
          Sign up to start applying for jobs.
        </p>


        {/* Register Form */}
        <form className="space-y-5" onSubmit={submitHandler}>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Full Name
            </label>
            <input value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Your full name"
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Email Address
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="name@email.com"
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Role
            </label>
            <select className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" name="role" value={role} onChange={(e) => setRole(e.target.value)} id="role">
              <option value="">Select Role</option>
              <option value="jobseeker">Job Seeker</option>
              <option value="recruiter">Recruiter</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Create a password"
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {
            role === "recruiter" && <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Company Name
              </label>
              <input
                type="text"
                placeholder="Enter Company name"
                disabled={role !== "recruiter"}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>
          }

          {
            role === "jobseeker" && <div>
              <label name="role" className="block text-sm font-medium text-slate-700 mb-1">
                Upload Resume
              </label>
              <input className="w-full border pl-3 py-2 active:border-0" name="resume" type="file"
                accept=".pdf,.doc,.docx" onChange={(e) => setResume(e.target.files[0])} />
            </div>
          }

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl shadow-lg transition">
            Create Account
          </button>
        </form>

        <p className="text-center text-sm text-slate-600 mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-600 font-medium hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
