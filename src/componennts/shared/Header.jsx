import { useState } from "react";
import logo from "/superhero.png";
import { FaBars } from "react-icons/fa";


const Header = () => {
    const [hiddenNav, setHiddenNav] = useState(true)
    return (
        <div className="flex justify-between flex-wrap items-center gap-10 my-10">
            <div className="flex justify-between items-center gap-2 mx-auto">
                <img className="w-20" src={logo} alt="logo" />
                <p className="text-3xl font-bold text-primaryColor">Super Toy World</p>
            </div>
            <div className="rounded-lg text-2xl text-primaryColor lg:hidden border shadow-xl p-3 mx-auto">
                <p onClick={() => setHiddenNav(!hiddenNav)}><FaBars/></p>
            </div>
            <div className={`${hiddenNav ? "hidden" : "grid"} " text-center mx-auto grid-cols-1 sm:grid sm:grid-cols-5 gap-5 text-xl font-bold text-primaryColor w-full sm:w-auto "`}>
                <p className="">Home</p>
                <p className="">All Toys</p>
                <p className="">My Toys</p>
                <p className="">Add a Toy</p>
                <p className="">blogs</p>
            </div>
            <div className="text-center mx-auto">
                <button className="btn bg-primaryColor hover:bg-[#fb7e44] border-none shadow-xl">Login</button>
                {/* <div className="avatar">
                    <div className="w-12">
                        <img src={logo} alt="profile picture" />
                    </div>
                </div>
                <button className="btn btn-sm  bg-primaryColor hover:bg-[#fb7e44] border-none">Login</button> */}
            </div>
        </div>
    );
};


export default Header;