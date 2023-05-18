import logo from "/superhero2.png";
import { AiFillMail } from "react-icons/ai";
import { FaFacebook, FaLinkedin, FaTwitter, FaStore, FaPhone, FaClock } from "react-icons/fa";

const Footer = () => {
    return (
        <div className=" bg-primaryColor text-white px-5 sm:px-10 py-5">
            <div className="flex items-center gap-2 mx-auto">
                <div className="flex items-center">
                    <img className="w-20" src={logo} alt="logo" />
                    <p className="text-3xl font-bold ">Super Toy World</p>
                </div>
            </div>
            <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 lg:justify-items-center gap-10">
                <div>
                    <h2 className="text-3xl font-bold border-b-4 pb-2">Contact</h2>
                    <div className="text-xl sm:text-2xl flex flex-col gap-3 pt-2">
                        <div className="flex items-center gap-2">
                            <FaStore />
                            <p>Mohammadpur, Dhaka</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaPhone />
                            <p> 01712312313</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaClock />
                            <p> 9.00 AM - 6.00 PM</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <AiFillMail />
                            <p> supertoyworld@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="text-3xl font-bold border-b-4 pb-2">About Us</h2>
                    <div className=" text-xl sm:text-2xl pt-2">
                        <p>Privacy Policy</p>
                        <p>Terms & Conditions</p>
                    </div>
                </div>
                <div>
                    <h2 className="text-3xl font-bold border-b-4 pb-2">Social Links</h2>
                    <div className="text-xl sm:text-3xl flex gap-5 pt-2 lg:justify-center">
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                    </div>
                </div>
            </div>
            <div className="text-xl sm:text-2xl border-t-2 pt-2">
                <p>&copy; 2023 super toy world</p>
            </div>
        </div>

    );
};

export default Footer;