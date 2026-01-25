import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Navbar from "./component/layout/Navbar";
import Footer from "./component/layout/Footer";
import Register from "./pages/auth/Register";

 
function App() {
  return (
    <>
      <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />

    </Routes>
        <Footer/>
    </>
    
  );
}

export default App;
