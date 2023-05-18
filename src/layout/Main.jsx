import { Outlet } from "react-router-dom";
import Footer from "../componennts/shared/Footer";
import Header from "../componennts/shared/Header";

const Main = () => {
    return (
        <>
            <Header></Header>
            <div className='min-h-[50vh]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Main;