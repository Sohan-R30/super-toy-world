import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MyToysTable from "./MyToysTable";
import Swal from 'sweetalert2';
import { ThreeDots } from "react-loader-spinner";
import { AuthContext } from "../../contexts/AuthProvider";
import titleChange from "../../componennts/shared/titleChange";
import Select from 'react-select'

const options = [
    { value: 'ascending', label: 'Price Low To High' },
    { value: 'descending', label: 'Price High To Low' }
]

const MyToys = () => {
    const [myToys, setMyToys] = useState();
    const [isLoading, setIsloading] = useState(true);
    const [selectedOption, setSelectedOption] = useState(null);
    const { user } = useContext(AuthContext);
    useEffect(() => {
        fetch(`http://localhost:2000/my-toys?email=${user.email}&sortby=${selectedOption?.value}`)
            .then(res => res.json())
            .then(data => {
                setMyToys(data)
                setIsloading(false)
                console.log(data)
            })
    }, [user, isLoading,selectedOption])

    titleChange("My Toys")
console.log(selectedOption);
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
                fetch(`http://localhost:2000/delete-toy/${id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
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
            {
                isLoading ? (
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

                ) : (
                    <>
                        <div className="text-center px-10">
                            <h2 className="text-4xl font-bold"><span className="text-[#178291]">Hi,</span> <span className="text-primaryColor">{user?.displayName?.toUpperCase()}</span></h2>
                            <div className="text-xl">
                                <p >You already have been added <span className="text-[#178291]">{myToys?.length} Toy</span></p>
                                <p>If you Want to add more Toy then click on navigation bar <Link to="/add-toy" className="text-primaryColor font-bold">ADD A TOY</Link> </p>
                                <div className="max-w-sm mx-auto mt-10">
                                    <Select options={options}
                                        placeholder="Sort By"
                                        className="text-sm font-bold"
                                        defaultValue={selectedOption}
                                        onChange={setSelectedOption}
                                        styles={{
                                            control: (baseStyles, state) => ({
                                              ...baseStyles,
                                              borderColor: state.isSelected ? '' : '#fb7e44',
                                              backgroundColor: state.isFocused ? '' : '#fb7e44',
                                            }),
                                          }}
                                          
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="overflow-x-auto px-10 sm:px-10 py-10 sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-7xl my-16 mx-auto shadow-2xl">
                            <table className="table w-full">
                                {/* head */}
                                <thead className="	">
                                    <tr className="text-primaryColor font-bold hidden sm:table-row">
                                        <th className="bg-primaryColor " ></th>
                                        <th className="bg-primaryColor " ></th>
                                        <th className="bg-[#b4dfe5] text-sm" >Seller Name</th>
                                        <th className="bg-[#b4dfe5] text-sm" >Toy Name</th>
                                        <th className="bg-[#b4dfe5] text-sm">Sub Category</th>
                                        <th className="bg-[#b4dfe5] text-sm">Price</th>
                                        <th className="bg-[#b4dfe5] text-sm">Quantity</th>
                                        <th className="bg-[#b4dfe5] text-sm">Actions</th>
                                        <th className="bg-[#b4dfe5] text-sm"></th>
                                    </tr>
                                </thead>
                                <tbody className="text-xl">

                                    {
                                        myToys?.length === 0 ? <p className="text-error text-2xl text-center"> Data Not Found </p> : (
                                            myToys && myToys.map((myToy, index) => <MyToysTable
                                                handleDeleteToy={handleDeleteToy}
                                                index={index}
                                                myToy={myToy}
                                                key={myToy._id} >
                                            </MyToysTable>)
                                        )

                                    }
                                </tbody>
                            </table>
                        </div>
                    </>
                )
            }


        </div>
    );
};

export default MyToys;