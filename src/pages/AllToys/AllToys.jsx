import { useEffect, useState } from "react";
import titleChange from "../../componennts/shared/titleChange";
import AllToysTable from "./AllToysTable";


const AllToys = () => {
    const [allToys, setAllToys] = useState([]);


    const handleDetailsToy = (id) => {
        console.log("details btn " + id);
    }

    useEffect(() => {
     fetch("http://localhost:2000/all-toys")
        .then(res => res.json())
        .then(data => {
            setAllToys(data)
            console.log(data)
        })   
    },[])
    titleChange("All Toys")
    return (
        <div className="text-center">
            <div className="text-2xl">
                <p >Here are the total toys <span className="text-[#178291]">{allToys?.length} Toy</span></p>
                <p>If you Want to see Toy details then click on <span className="text-primaryColor font-bold">View Details</span> Button </p>
                <p>Also you can search by the Name of Toys</p>
            </div>
            <div className="my-5 mx-10">
                <input type="text" placeholder="Toy Name" className="input input-bordered input-warning w-full max-w-xs" />
            </div>
            <div className="overflow-x-auto px-10 sm:px-10 py-10 sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-7xl my-2 mx-auto shadow-2xl">
                            <table className="table w-full">
                                {/* head */}
                                <thead className="	">
                                    <tr className="text-primaryColor font-bold hidden sm:table-row">
                                        <th className="bg-primaryColor " ></th>
                                        <th className="bg-[#b4dfe5] text-sm" >Seller Name</th>
                                        <th className="bg-[#b4dfe5] text-sm" >Toy Name</th>
                                        <th className="bg-[#b4dfe5] text-sm">Sub Category</th>
                                        <th className="bg-[#b4dfe5] text-sm">Price</th>
                                        <th className="bg-[#b4dfe5] text-sm">Quantity</th>
                                        <th className="bg-[#b4dfe5] text-sm">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="text-xl">

                                    {
                                        allToys?.length === 0 ? <p className="text-error text-2xl text-center"> Data Not Found </p> : (
                                            allToys && allToys.map((allToy, index) => <AllToysTable
                                                handleDetailsToy={handleDetailsToy}
                                                index={index}
                                                allToy={allToy}
                                                key={allToy._id} >
                                            </AllToysTable>)
                                        )

                                    }
                                </tbody>
                            </table>
                        </div>
        </div>
    );
};

export default AllToys;