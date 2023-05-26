import { useEffect, useState } from "react";
import titleChange from "../../componennts/shared/titleChange";
import AllToysTable from "./AllToysTable";
import Modal from "../../componennts/Modal/Modal";


const AllToys = () => {
    const [error, setError] = useState("")
    const [allToys, setAllToys] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [openModal, setOpenModal] = useState(false);
    const [totalToys, setTotalToys] = useState(0);
    const [toyPerPage, setTotalPerPage] = useState(20);
    const [currentPage, setCurrentPage] = useState(1);

    const totalPage = Math.ceil(totalToys / toyPerPage);

    const pageNumbers = [...Array(totalPage).keys()];
    const options = [5, 10, 20, 50]





    const handleOnChanged = (event) => {
        event.preventDefault();
        const searchValue = event.target.value;
        if (searchValue === "") {
            fetch("https://super-toy-world-server.vercel.app/all-toys")
                .then(res => res.json())
                .then(data => {
                    setAllToys(data)
                })
                .catch(error => {
                    setError(error.message)
                })
            return;
        }
        setSearchText(searchValue);
        fetch(`https://super-toy-world-server.vercel.app/searchInAllToys/${searchText}`)
            .then(res => res.json())
            .then(data => setAllToys(data))
            .catch(error => {
                setError(error.message);
            })
    }
    // setCurrentPage(currentPage - 1)
    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
        else {
            return;
        }
    }
    const handleNextPage = () => {
        if (currentPage < totalPage) {
            setCurrentPage(currentPage + 1)
        }
        else if (currentPage === totalPage) {
            setCurrentPage(1)
        }
        else {
            return
        }
    }

    useEffect(() => {
        fetch(`https://super-toy-world-server.vercel.app/all-toys?page=${currentPage}&limit=${toyPerPage}`)
            .then(res => res.json())
            .then(data => {
                setAllToys(data)
            })
            .catch(error => {
                setError(error.message)
            })

    }, [currentPage, toyPerPage])
    useEffect(() => {
        fetch("https://super-toy-world-server.vercel.app/totalToys")
            .then(res => res.json())
            .then(data => {
                setTotalToys(data?.totalToys)
            })
            .catch(error => {
                setError(error.message)
            })

    }, [])

    titleChange("All Toys");

    return (
        <>
        <p className='text-danger hidden'>{error}</p>
            <div className="text-center mt-5">
                <div className="text-2xl">
                    <p >Here are the total toys <span className="text-[#18c2d8]">{allToys?.length} Toy</span></p>
                    <p>If you Want to see Toy details then click on <span className="text-primaryColor font-bold">View Details</span> Button </p>
                    <p>Also you can search by the Name of Toys</p>
                </div>
                <div className="my-5 mx-10">
                    <input onChange={handleOnChanged} type="text" name="search" placeholder="Toy Name" className="input input-bordered input-warning w-full max-w-xs" />
                </div>
                <div className="overflow-x-auto px-10 sm:px-10 py-10 sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-7xl my-2 mx-auto shadow-2xl">
                    <table className="table w-full">
                        {/* head */}
                        <thead className="	">
                            <tr className="text-primaryColor font-bold hidden sm:table-row">
                                <th className="bg-secondaryColor" ></th>
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
                                allToys?.length === 0 ? <tr className="text-error text-2xl text-center"> <td colSpan={7}>Data Not Found</td> </tr> : (
                                    allToys && allToys.map((allToy, index) => <AllToysTable
                                        setOpenModal={setOpenModal}
                                        index={index}
                                        allToy={allToy}
                                        key={allToy._id} >
                                    </AllToysTable>)
                                )

                            }
                        </tbody>
                    </table>
                </div>
                <div className="flex justify-center items-center gap-5 my-14">
                    <div className=" my-10 ">
                        <button disabled={currentPage === 1} onClick={handlePrevPage} className="btn ml-2 bg-primaryColor border-none hover:bg-hoverColor rounded-lg outline-none">«</button>
                        {
                            pageNumbers.map(pageNumber => <button
                                key={pageNumber + 1}
                                onClick={() => setCurrentPage(pageNumber + 1)}
                                className={`${currentPage === (pageNumber + 1) ? "btn bg-[#b4dfe5] hover:bg-[#b4dfe5]" : "btn bg-primaryColor"} "btn ml-2  border-none rounded-lg outline-none"`}>
                                {pageNumber + 1}
                            </button>)
                        }
                        <button onClick={handleNextPage} className="btn ml-2 bg-primaryColor border-none hover:bg-[#b4dfe5] rounded-lg outline-none">»</button>
                    </div>
                    <div>
                        <select value={toyPerPage} onChange={(e) => {
                            e.preventDefault();
                            setTotalPerPage(parseInt(e.target.value))
                            setCurrentPage(1);
                        }} className="py-2 select-bordered select max-w-xs rounded-lg text-primaryColor">
                            <option disabled>Item Per Page </option>
                            {
                                options.map(option => (
                                    <option
                                        key={option}
                                        value={option} >
                                        {option}
                                    </option>
                                ))
                            }
                        </select>
                    </div>
                </div>
            </div>
            <div>
                {
                    openModal && <Modal setOpenModal={setOpenModal}></Modal>
                }
            </div>
        </>
    );
};

export default AllToys;