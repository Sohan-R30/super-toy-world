/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const MyToysTable = ({ myToy, index, handleDeleteToy }) => {
    const { _id, toyName, toyPhoto, subCategory, price,sellarName,quantity} = myToy;



    return (
        <tr className="flex flex-col sm:table-row mt-10 shadow-2xl">
                <td className="bg-primaryColor text-white font-bold text-2xl rounded-md sm:rounded-none">{index + 1}</td>
                <td className="border md:border-none">
                    <div className="avatar">
                        <div className="mask mask-squircle w-20">
                            <img src={toyPhoto} alt={toyName} />
                        </div>
                    </div>
                </td>
                <td className="border md:border-none">{sellarName}</td>
                <td className="border md:border-none">{toyName}</td>
                <td className="border md:border-none">{subCategory}</td>
                <td className="text-primaryColor border md:border-none">${price}</td>
                <td className="text-primaryColor border md:border-none">{quantity}</td>
                <th className="border md:border-none">
                    <Link to={`/update-toy/${_id}`}>
                        <button className="btn w-full  bg-primaryColor hover:bg-[#d74c0b] border-none  text-white font-bold">Update</button>
                    </Link>
                </th>
                <th className="border md:border-none">
                    <button onClick={() => handleDeleteToy(_id)} className="btn w-full btn-square bg-primaryColor hover:bg-[#d74c0b] border-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </th>
        </tr>
    );
};

export default MyToysTable;