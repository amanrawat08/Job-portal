import Herosection from "../component/comman/Herosection";
import JobCategory from "../component/comman/JobCategory";
import JobSection from "../component/comman/JobSection";
import Search_PostBtn from "../component/comman/Search_PostBtn";
import WorkProcess from "../component/comman/JobSteps";
import Navbar from "../component/layout/Navbar";
import CounterArea from "../component/comman/CounterArea";
import Blog_Section from "../component/comman/Blog_Section";
import Footer from "../component/layout/Footer";

function Home(){
    return <div>
        
        <Herosection/>
        <Search_PostBtn/>
        <JobCategory/>
        <JobSection/>
        {/* <WorkProcess/>*/}
        <Blog_Section/>
        <CounterArea/>
    </div>
}

export default Home;