import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MyToysTable from "./MyToysTable";
import Swal from 'sweetalert2';

const MyToys = () => {
    const [myToys, setMyToys] = useState();
    const { email } = useParams();
    useEffect(() => {
        fetch(`http://localhost:2000/my-toys/${email}`)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, [email])
    
    const handleDeleteToy = (id) => {
        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#fb7e44',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
              fetch(`http://localhost:2000/delete-toy/${id}`,{
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    const remaining = myToys.filter(myToy => myToy._id !== id);
                    setMyToys(remaining);
                }
            })
            .catch(error => {
                console.log(error.message);
            })
            }
          })
    }
    return (
        <div>
            <h2>my toys {myToys?.length}</h2>
            <div className="overflow-x-auto  w-full px-10 my-20">
                <table className="table w-full">
                    {/* head */}
                    <thead >
                        <tr className="text-primaryColor font-bold">
                            <th className="bg-primaryColor " ></th>
                            <th className="bg-primaryColor " ></th>
                            <th className="bg-[#b4dfe5] text-sm" >Name</th>
                            <th className="bg-[#b4dfe5] text-sm">Sub Category</th>
                            <th className="bg-[#b4dfe5] text-sm">Price</th>
                            <th className="bg-[#b4dfe5] text-sm">Actions</th>
                            <th className="bg-[#b4dfe5] text-sm"></th>
                        </tr>
                    </thead>
                    <tbody className="text-xl">
                        {
                            myToys && myToys.map((myToy, index) => <MyToysTable 
                            handleDeleteToy={handleDeleteToy}
                            index={index}
                             myToy={myToy} 
                             key={myToy._id} >
                             </MyToysTable>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyToys;