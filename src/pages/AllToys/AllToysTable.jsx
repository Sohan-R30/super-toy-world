/* eslint-disable react/prop-types */


const AllToysTable = ({handleDetailsToy,allToy,index}) => {
    const { _id, toyName, subCategory, price,sellarName,quantity} = allToy;
    return (
        <tr className="flex flex-col sm:table-row mt-10 shadow-2xl">
                <td className="bg-primaryColor text-white font-bold text-2xl rounded-md sm:rounded-none">{index + 1}</td>
                <td className="border md:border-none">{sellarName}</td>
                <td className="border md:border-none">{toyName}</td>
                <td className="border md:border-none">{subCategory}</td>
                <td className="text-primaryColor border md:border-none">${price}</td>
                <td className="text-primaryColor border md:border-none">{quantity}</td>
                <th className="border md:border-none">
                        <button onClick={() => handleDetailsToy(_id)}  className="btn w-full  bg-primaryColor hover:bg-[#d74c0b] border-none  text-white font-bold">View Details</button>
                </th>
        </tr>
    );
};

export default AllToysTable;