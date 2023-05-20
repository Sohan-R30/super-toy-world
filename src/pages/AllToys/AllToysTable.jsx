/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const AllToysTable = ({ handleDetailsToy, allToy, index, setOpenModal }) => {
    const { _id, toyName, subCategory, price, sellarName, quantity } = allToy || {};
    return (
        <tr className="flex flex-col sm:table-row mt-10 shadow-2xl">
            <td className="bg-secondaryColor text-white font-bold text-2xl rounded-md sm:rounded-none">{index + 1}</td>
            <td className="border md:border-none">{sellarName}</td>
            <td className="border md:border-none">{toyName}</td>
            <td className="border md:border-none">{subCategory}</td>
            <td className="text-primaryColor border md:border-none">${price}</td>
            <td className="text-primaryColor border md:border-none">{quantity}</td>
            <th className="border md:border-none">
                <Link to={`/single-toy/${_id}`}>
                    <button onClick={() => {
                        handleDetailsToy(_id)
                        setOpenModal(true)
                    }} className="btn w-full  bg-primaryColor hover:bg-hoverColor hover:text-black border-none  text-white font-bold">View Details</button>
                </Link>
            </th>
        </tr>
    );
};

export default AllToysTable;