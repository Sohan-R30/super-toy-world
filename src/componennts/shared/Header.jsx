import { useContext, useState } from "react";
import logo from "/superhero2.png";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";


const Header = () => {
    const [hiddenNav, setHiddenNav] = useState(true);
    const [showProfileName, setShowProfileName] = useState(true);
    const { user,signOutUser } = useContext(AuthContext)
    const handleSignOutUser = () => {
        signOutUser()
            .then(() => {
                setHiddenNav(!hiddenNav)
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    return (
        <div className="flex justify-between flex-wrap items-center gap-10 my-10 mx-1">
            <div className="flex justify-center items-center gap-2 mx-auto">
                <img className="w-20" src={logo} alt="logo" />
                <Link to="/" className="text-3xl font-bold text-primaryColor">Super Toy World</Link>
            </div>
            <div className="rounded-lg text-2xl text-primaryColor md:hidden border shadow-xl p-3 mx-auto">
                <p onClick={() => setHiddenNav(!hiddenNav)}><FaBars /></p>
            </div>
            <div className={`${hiddenNav ? "hidden" : "grid"} " text-center mx-auto grid-cols-1 sm:grid sm:grid-cols-5 gap-5 text-xl font-bold text-primaryColor w-full sm:w-auto "`}>
                <Link onClick={() => setHiddenNav(!hiddenNav)} to="/" className="">Home</Link>
                <Link onClick={() => setHiddenNav(!hiddenNav)} to="all-toys" className="">All Toys</Link>
                <Link onClick={() => setHiddenNav(!hiddenNav)} to={`/my-toys/:${user?.email}`} className="">My Toys</Link>
                <Link onClick={() => setHiddenNav(!hiddenNav)} to="add-toy" className="">Add a Toy</Link>
                <Link onClick={() => setHiddenNav(!hiddenNav)} to="blogs" className="">blogs</Link>
            </div>
            <div className="text-center mx-auto">
                {
                    user ? (
                        <div className="flex justify-center items-center gap-5">
                            <p className={`${showProfileName ? "hidden" : ""} text-xl font-bold text-primaryColor`}>{user?.displayName}</p>
                            <div className="avatar">
                            <div 
                            onMouseEnter={() => setShowProfileName(!showProfileName)} 
                            onMouseLeave={() => setShowProfileName(!showProfileName)} 
                            className="w-14 rounded-full ring ring-primaryColor ring-offset-base-100 ring-offset-2">
                                    <img src={user?.photoURL} alt="profile picture" />
                                </div>
                            </div>
                            <button  onClick={handleSignOutUser} className="btn bg-primaryColor hover:bg-[#d74c0b] border-none shadow-xl">Sign Out</button>
                        </div>
                    ) : (
                        <Link to="login">
                            <button onClick={() => setHiddenNav(!hiddenNav)} className="btn bg-primaryColor hover:bg-[#d74c0b] border-none shadow-xl">Login</button>
                        </Link>
                    )
                }
            </div>
        </div >
    );
};


export default Header;