/* eslint-disable react/prop-types */


const MyToysTable = ({ myToy, index }) => {
    console.log(myToy);
    const { toyName, toyPhoto, sellarName, sellarEmail, subCategory, price, ratings, quantity, description } = myToy;
    return (
            <tr>
                <td className="bg-primaryColor text-white">{index}</td>
                <td>
                    <div className="avatar">
                        <div className="mask mask-squircle w-20">
                            <img src={toyPhoto} alt={toyName} />
                        </div>
                    </div>
                </td>
                <td>{toyName}</td>
                <td>{subCategory}</td>
                <td className="text-primaryColor">${price}</td>
                <th>
                    <button className="btn  bg-primaryColor hover:bg-[#d74c0b] border-none  text-white font-bold">Update</button>
                </th>
                <th>
                    <button className="btn btn-square bg-primaryColor hover:bg-[#d74c0b] border-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </th>
            </tr>
    );
};

export default MyToysTable;