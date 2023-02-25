import { Outlet } from "react-router-dom";
import Category from "../components/Category-Bar/Category";
import Header from "../components/Header/index";

const Layout=()=>{

    return(
    <div>
    <Header/>
    <div className="section-01">
    <div className="c-wrapper" >
        <Category/>
        <Outlet/>
    </div>
    </div>
    
    </div>
    );

}

export default Layout;