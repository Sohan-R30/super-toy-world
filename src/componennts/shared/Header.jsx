import { useState } from "react";
import logo from "/superhero2.png";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";


const Header = () => {
    const [hiddenNav, setHiddenNav] = useState(true)
    return (
        <div className="flex justify-between flex-wrap items-center gap-10 my-10">
            <div className="flex justify-center items-center gap-2 mx-auto">
                <img className="w-20" src={logo} alt="logo" />
                <Link to="/" className="text-3xl font-bold text-primaryColor">Super Toy World</Link>
            </div>
            <div className="rounded-lg text-2xl text-primaryColor md:hidden border shadow-xl p-3 mx-auto">
                <p onClick={() => setHiddenNav(!hiddenNav)}><FaBars/></p>
            </div>
            <div className={`${hiddenNav ? "hidden" : "grid"} " text-center mx-auto grid-cols-1 sm:grid sm:grid-cols-5 gap-5 text-xl font-bold text-primaryColor w-full sm:w-auto "`}>
                <Link to="/" className="">Home</Link>
                <Link to="all-toys" className="">All Toys</Link>
                <Link to="my-toys" className="">My Toys</Link>
                <Link to="add-toy" className="">Add a Toy</Link>
                <Link to="blogs" className="">blogs</Link>
            </div>
            <div className="text-center mx-auto">
                <Link to="login">
                    <button className="btn bg-primaryColor hover:bg-[#d74c0b] border-none shadow-xl">Login</button>
                </Link>
                {/* <div className="avatar">
                    <div className="w-12">
                        <img src={logo} alt="profile picture" />
                    </div>
                </div>
                <button className="btn btn-sm  bg-primaryColor hover:bg-[#d74c0b] border-none">Login</button> */}
            </div>
        </div>
    );
};


export default Header;