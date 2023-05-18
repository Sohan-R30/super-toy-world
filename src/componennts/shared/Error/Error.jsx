import { Link } from "react-router-dom";
import error from "/404.jpg"
const Error = () => {
    return (
        <div className="flex flex-col items-center my-10">
            <img src={error} alt="error" />
            <Link to="/">
                <button className="btn bg-primaryColor hover:bg-[#d74c0b] border-none shadow-xl">Go to Home Page</button>
            </Link>
        </div>
    );
};

export default Error;