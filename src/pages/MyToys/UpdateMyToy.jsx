import { useForm } from "react-hook-form";
import { AuthContext } from "../../contexts/AuthProvider";
import Swal from 'sweetalert2';
import titleChange from "../../componennts/shared/titleChange";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateMyToy = () => {
    const [toyData, setToyData] = useState({});
    const [error, setError] = useState("");

    const { user } = useContext(AuthContext);
    const email = user.email;
    const { id } = useParams();
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();

    useEffect(() => {
        fetch(`http://localhost:2000/myupdate-toy?email=${email}&id=${id}`)
            .then(res => res.json())
            .then(data => {
                setToyData(data);
            })
    }, [id, email, toyData])

    const handleUpdateToy = data => {

        if (data.toyName === "") {
            return toast.warning("Added or click on Toy Name Filed");

        }
        else if (data.toyPhoto === "") {
            return toast.warning("Added or click on Toy Photo Filed");

        }
        else if (data.subCategory === "") {
            return toast.warning("Added or click on Subcategory Filed");
        }
        else if (data.price === "") {
            return toast.warning("Added or click on Price Filed");
        }
        else if (data.ratings === "") {
            return toast.warning("Added or click on Ratings Filed");
        }
        else if (data.quantity === "") {
            return toast.warning("Added or click on Quantity Filed");
        }
        else if (data.description === "") {
            return toast.warning("Added or click on Describtion Filed");
        }
        else {
            console.log(data)
            setError("");
            fetch(`http://localhost:2000/update-toy/${id}`,{
                method: "PATCH",
                headers: {"Content-Type": "application/json",},
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(dataa => {
                console.log(dataa);
                if(dataa.modifiedCount > 0){
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Update Successfully',
                        showConfirmButton: false,
                        timer: 1000
                      })
                      setTimeout(() => {
                        navigate(`/my-toys/${email}`);
                      },1000)
                }
            })
            .catch(error => {
                console.log(error.message);
            })
        }


    };
    titleChange("Update Toy")

    return (
        <div>
            <div className="mx-5 sm:mx-auto text-center flex flex-col justify-center sm:w-2/4 md:w-9/12 border my-20 bg-[#ecdbd4] rounded-md">
                <form onSubmit={handleSubmit(handleUpdateToy)} className="flex flex-col gap-5 py-10 w-full justify-center">
                    <h2 className="mx-auto text-3xl text-primaryColor font-extrabold pb-2">Update A Toy</h2>
                    {/* register your input into the hook by invoking the "register" function */}
                    <div className="w-full flex flex-col gap-2 ">
                        <div className="">
                            <div className="w-9/12 hidden md:flex md:mb-2 gap-4">
                                <label htmlFor="subCategory" className="w-2/4 text-primaryColor font-bold">Toy Name :</label>
                                <label htmlFor="subCategory" className="w-2/4 text-primaryColor font-bold">Toy Photo Url :</label>
                            </div>
                            <div className="flex flex-col md:flex-row w-9/12 mx-auto gap-4">
                                <input type="text" defaultValue={toyData.toyName} {...register("toyName")} className="border-2 mx-auto outline-primaryColor p-2 w-full md:w-2/4  rounded-md" required />
                                <input type="url" defaultValue={toyData.toyPhoto} {...register("toyPhoto")} className="border-2 mx-auto outline-primaryColor p-2 w-full md:w-2/4  rounded-md" required />
                            </div>
                        </div>

                        <label htmlFor="subCategory" className="hidden md:block my-2 w-9/12 mx-auto text-start text-primaryColor font-bold">Sub Category :</label>
                        <input type="text" defaultValue={toyData.subCategory} {...register("subCategory")} className="border-2 outline-primaryColor p-2 w-9/12 mx-auto rounded-md" required />

                        <div className="">
                            <div className="w-9/12 hidden md:flex gap-4 md:my-2 mx-auto">
                                <label htmlFor="subCategory" className="w-2/4 text-justify text-primaryColor font-bold">Price :</label>
                                <label htmlFor="subCategory" className="w-2/4 text-justify text-primaryColor font-bold">Ratings :</label>
                                <label htmlFor="subCategory" className="w-2/4 text-justify text-primaryColor font-bold">Quantity :</label>
                            </div>
                            <div className="flex flex-col md:flex-row gap-4 w-9/12 mx-auto">
                                <input type="text" defaultValue={toyData.price}  {...register("price",{valueAsNumber: true})} className="border-2 outline-primaryColor p-2 w-full md:w-2/4  rounded-md" required />
                                <input type="text" defaultValue={toyData.ratings} {...register("ratings",{valueAsNumber: true})} className="border-2 outline-primaryColor p-2 w-full md:w-2/4  rounded-md" required />
                                <input type="text" defaultValue={toyData.quantity} {...register("quantity",{valueAsNumber: true})} className="border-2 outline-primaryColor p-2 w-full md:w-2/4  rounded-md" required />
                            </div>
                        </div>

                        <label htmlFor="description" className="hidden md:block my-2 w-9/12 mx-auto text-start text-primaryColor font-bold">Toy Description :</label>
                        <textarea rows={10} className="w-9/12  mx-auto rounded-md outline-primaryColor px-2" {...register("description")} defaultValue={toyData.description} required></textarea>
                    </div>
                    {
                        error && (
                            <p className="text-error text-xl">{error}</p>
                        )
                    }

                    {/* include validation with required or other standard HTML validation rules */}
                    {/* <input {...register("exampleRequired", { required: true })} /> */}
                    {/* errors will return when field validation fails  */}
                    {errors.exampleRequired && <span>This field is required</span>}

                    <input type="submit" value="Update Toy" className="btn  bg-primaryColor hover:bg-[#d74c0b] border-none  text-white font-bold w-9/12 mx-auto" />
                </form>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </div>
    );
};

export default UpdateMyToy;