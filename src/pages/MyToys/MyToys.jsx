import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MyToysTable from "./MyToysTable";

const MyToys = () => {
    const [myToys, setMyToys] = useState();
    const { email } = useParams();
    useEffect(() => {
        fetch(`http://localhost:2000/my-toys/${email}`)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, [email])
    return (
        <div>
            <h2>my toys {myToys?.length}</h2>
            <div className="overflow-x-auto  w-full px-10 my-20">
                <table className="table w-full">
                    {/* head */}
                    <thead >
                        <tr className="text-primaryColor font-bold">
                            <th className="bg-primaryColor text-sm" ></th>
                            <th className="bg-primaryColor text-sm" ></th>
                            <th className="bg-[#b4dfe5]  text-sm" >Name</th>
                            <th className="bg-[#b4dfe5] text-sm">Sub Category</th>
                            <th className="bg-[#b4dfe5] text-sm">Price</th>
                            <th className="bg-[#b4dfe5] text-sm">Actions</th>
                            <th className="bg-[#b4dfe5] text-sm"></th>
                        </tr>
                    </thead>
                    <tbody className="text-xl">
                        {
                            myToys && myToys.map((myToy, index) => <MyToysTable index={index} myToy={myToy} key={myToy._id}></MyToysTable>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyToys;