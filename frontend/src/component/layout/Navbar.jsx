import BottomHeader from "../comman/BottomHeader";
import TopHeader from "../comman/TopHeader";

function Navbar({category}){
    return <div>
        <div >
         <TopHeader/>
        <BottomHeader category={category}/>
        </div>
    </div>
}

export default Navbar;