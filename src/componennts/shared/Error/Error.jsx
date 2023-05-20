import { Link } from "react-router-dom";
import error from "/404.jpg"
import titleChange from "../titleChange";
const Error = () => {
    titleChange("Error");
    return (
        <div className="flex flex-col items-center my-10">
            <img src={error} alt="error" />
            <Link to="/">
                <button className="btn bg-primaryColor hover:bg-hoverColor hover:text-black border-none shadow-xl">Go to Home Page</button>
            </Link>
        </div>
    );
};

export default Error;