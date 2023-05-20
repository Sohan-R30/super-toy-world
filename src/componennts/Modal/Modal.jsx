/* eslint-disable react/prop-types */

import { useContext, useEffect } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import titleChange from "../shared/titleChange";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css';
import { AuthContext } from "../../contexts/AuthProvider";
import { ThreeDots } from "react-loader-spinner";

const CustomStar = (
    <polygon points="478.53 189 318.53 152.69 239.26 0 160 152.69 0 189 111.02 303.45 84 478.53 239.26 396.63 394.53 478.53 367.51 303.45 478.53 189" />
)

const myStyles = {
    itemShapes: CustomStar,
    activeFillColor: '#fb7e44',
    inactiveFillColor: '#0809094d'
}

const Modal = ({ setOpenModal }) => {
    const navigate = useNavigate();
    const {user} = useContext(AuthContext)
    const singleToy = useLoaderData();
    const { description, price, quantity, ratings, sellarEmail, sellarName, subCategory, toyName, toyPhoto } = singleToy || {};
    console.log("🚀 ~ file: Modal.jsx:12 ~ Modal ~ singleToy:", singleToy)

    titleChange(toyName)
    useEffect(() => {
        document.body.style.overflowY = "hidden";
        return () => document.body.style.overflowY = "scroll";
    }, [])
    return (
        <>
            {
                user ? (
                    <>
            <div onClick={() => {
                navigate(-1)
                setOpenModal(false)
            }}
                className="fixed top-0 left-0 right-0 bottom-0 bg-[#c8c8c8e6]">
            </div>

            <div className="fixed top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 bg-white w-9/12 max-w-5xl min-h-[90vh] shadow-2xl rounded-2xl">
                <div className="fixed top-0 right-0 left-0 flex justify-end">
                    <button onClick={() => {
                        navigate(-1)
                        setOpenModal(false)
                    }} className=" bg-primaryColor hover:bg-hoverColor hover:text-black border-none text-4xl  text-white font-bold rounded-bl-full pb-6 px-8">x</button>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center m-2 md:m-10">
                    <div className="sm:flex sm:mt-16 gap-5">
                        <img className="w-40 md:w-80 lg:w-96" src={toyPhoto} alt={toyName} />
                        <div className="sm:hidden">
                            <p className='text-xl flex items-center gap-2'><Rating
                                itemStyles={myStyles}
                                style={{ maxWidth: 150, }}
                                value={ratings}
                                readOnly
                            />
                                {ratings}
                            </p>

                            <p className="md:text-3xl font-bold">{toyName}</p>
                            <p className="md:text-xl font-bold">Price : <span className="text-primaryColor">${price}</span></p>
                            <p className="text-md font-bold">Sub Category : {subCategory}</p>
                            <p className="text-md font-bold">Available Quantity : <span className="text-primaryColor">{quantity}</span></p>
                        </div>
                    </div>

                    <div>
                        <div className="hidden sm:flex flex-col gap-5">
                            <p className='text-xl flex items-center gap-2'><Rating
                                itemStyles={myStyles}
                                style={{ maxWidth: 150, }}
                                value={ratings}
                                readOnly
                            />
                                {ratings}
                            </p>

                            <p className="md:text-3xl font-bold">{toyName}</p>
                            <p className="md:text-xl font-bold">Price : <span className="text-primaryColor">${price}</span></p>
                            <p className="text-md font-bold">Sub Category : {subCategory}</p>
                            <p className="text-md font-bold">Available Quantity : <span className="text-primaryColor">{quantity}</span></p>
                        </div>
                        <div className="">
                            <div className="sm:divider"></div>
                            <p className="md:mb-2 md:text-xl font-bold">Toy Description </p>
                            <p className="md:leading-7 md:tracking-wide sm:hidden">{description?.slice(0,100)}</p>
                            <p className="md:leading-7 md:tracking-wide hidden sm:block">{description}</p>
                            <div className="divider"></div>
                            <p className="md:text-2xl font-bold">Seller Name : {sellarName?.toUpperCase()}</p>
                            <p className="md:text-xl font-bold">Seller Email : <span className="text-primaryColor border-b border-primaryColor">{sellarEmail}</span></p>
                        </div>
                    </div>
                </div>




                <div className="hidden fixed bottom-5 md:bottom-10 right-10 left-10 sm:flex sm:justify-end md:justify-start  xl:justify-center">
                    <button onClick={() => {
                        navigate(-1)
                        setOpenModal(false)
                    }} className="btn w-1/4 bg-primaryColor hover:bg-hoverColor hover:text-black border-none md:text-4xl  text-white font-bold">close</button>
                </div>
            </div>
        </>
                ) : (
                    <div className="flex justify-center">
                        <ThreeDots
                            height="80"
                            width="80"
                            radius="9"
                            color="#fb7e44"
                            ariaLabel="three-dots-loading"
                            wrapperStyle={{}}
                            wrapperClassName=""
                            visible={true}
                        />
                    </div>
                )
            }
        </>
    );
};

export default Modal;