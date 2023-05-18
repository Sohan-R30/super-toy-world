import { useContext, useState } from "react";
import titleChange from "../../componennts/shared/titleChange";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../contexts/AuthProvider";


const AddToy = () => {
    const [error, setError] = useState("");

    const { user } = useContext(AuthContext)

    const { register, handleSubmit,reset, formState: { errors } } = useForm();

    const handleAddToy = data => {
        console.log(data);
        setError("");
        fetch("http://localhost:2000/add-toy",{
            method: "POST",
            headers: {"Content-Type": "application/json",},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(dataa => {
            reset();
            console.log(dataa);
            if(dataa.insertedId){
                alert("data added");
            }
        })
        .catch(error => {
            console.log(error.message);
        })
    };
    titleChange("Add Toy")
    return (
        <div className="mx-5 sm:mx-auto text-center flex flex-col justify-center sm:w-2/4 md:w-9/12 border my-20 bg-[#ecdbd4] rounded-md">
            <form onSubmit={handleSubmit(handleAddToy)} className="flex flex-col gap-5 py-10 w-full justify-center">
                <h2 className="mx-auto text-3xl text-primaryColor font-extrabold pb-2">Add A Toy</h2>
                {/* register your input into the hook by invoking the "register" function */}
                <div className="w-full flex flex-col gap-2 ">
                    <div className="">
                        <div className="w-9/12 hidden md:flex md:mb-2 gap-4">
                            <label htmlFor="subCategory" className="w-2/4 text-primaryColor font-bold">Toy Name :</label>
                            <label htmlFor="subCategory" className="w-2/4 text-primaryColor font-bold">Toy Photo Url :</label>
                        </div>
                        <div className="flex flex-col md:flex-row w-9/12 mx-auto gap-4">
                            <input type="text" placeholder="Toy Name" {...register("toyName")} className="border-2 mx-auto outline-primaryColor p-2 w-full md:w-2/4  rounded-md" required />
                            <input type="url" placeholder="Toy Photo" {...register("toyPhoto")} className="border-2 mx-auto outline-primaryColor p-2 w-full md:w-2/4  rounded-md" required />
                        </div>
                    </div>

                    <label htmlFor="sellarName" className="hidden md:block md:my-2 w-9/12 mx-auto text-start text-primaryColor font-bold">Sellar Name :</label>
                    <input type="text" defaultValue={user?.displayName} {...register("sellarName")} className="border-2 outline-primaryColor p-2 w-9/12 mx-auto rounded-md" readOnly />

                    <label htmlFor="sellarEmail" className="hidden md:block my-2 w-9/12 mx-auto text-start text-primaryColor font-bold">Sellar Email :</label>
                    <input type="text" defaultValue={user?.email} {...register("sellarEmail")} className="border-2 outline-primaryColor p-2 w-9/12 mx-auto rounded-md" readOnly />

                    <label htmlFor="subCategory" className="hidden md:block my-2 w-9/12 mx-auto text-start text-primaryColor font-bold">Sub Category :</label>
                    <input type="text" placeholder="Sub Category" {...register("subCategory")} className="border-2 outline-primaryColor p-2 w-9/12 mx-auto rounded-md" required />

                    <div className="">
                        <div className="w-9/12 hidden md:flex gap-4 md:my-2 mx-auto">
                            <label htmlFor="subCategory" className="w-2/4 text-justify text-primaryColor font-bold">Price :</label>
                            <label htmlFor="subCategory" className="w-2/4 text-justify text-primaryColor font-bold">Ratings :</label>
                            <label htmlFor="subCategory" className="w-2/4 text-justify text-primaryColor font-bold">Quantity :</label>
                        </div>
                        <div className="flex flex-col md:flex-row gap-4 w-9/12 mx-auto">
                            <input type="text" placeholder="Toy Price" {...register("price")} className="border-2 outline-primaryColor p-2 w-full md:w-2/4  rounded-md" required />
                            <input type="text" placeholder="Ratings" {...register("ratings")} className="border-2 outline-primaryColor p-2 w-full md:w-2/4  rounded-md" required />
                            <input type="text" placeholder="Available Quantity" {...register("quantity")} className="border-2 outline-primaryColor p-2 w-full md:w-2/4  rounded-md" required />
                        </div>
                    </div>

                    <label htmlFor="description" className="hidden md:block my-2 w-9/12 mx-auto text-start text-primaryColor font-bold">Toy Description :</label>
                    <textarea rows={10} className="w-9/12  mx-auto rounded-md outline-primaryColor px-2" {...register("description")} placeholder="Description" required></textarea>
                </div>
                {
                    error && (
                        <p className="text-warning">{error}</p>
                    )
                }

                {/* include validation with required or other standard HTML validation rules */}
                {/* <input {...register("exampleRequired", { required: true })} /> */}
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit" value="Add Toy" className="btn  bg-primaryColor hover:bg-[#d74c0b] border-none  text-white font-bold w-9/12 mx-auto" />
            </form>
        </div>
    );
};

export default AddToy;