import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import { updateProfile } from "firebase/auth";
import titleChange from "../../componennts/shared/titleChange";


const Registration = () => {
    const [error, setError] = useState("");

    const {createUser,auth} = useContext(AuthContext)

    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    
    const navigate = useNavigate();

    titleChange("Registration");


    const onSubmit = data => {
        console.log(data);
        setError("");
        createUser(data.email, data.password)
            .then(result => {
                console.log(result.user);
                navigate(-2)
                reset();
                updateProfile(auth.currentUser, {
                    displayName: data.name,
                    photoURL: data.photo
                })
            })
            .catch(error => {
                setError(error.message);
            })
    };
    return (
        <div className="mx-5 sm:mx-auto text-center flex flex-col justify-center sm:w-2/4 md:w-9/12 border my-28 bg-formColor rounded-md">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 py-10 w-full justify-center">
                <h2 className=" text-4xl text-primaryColor font-extrabold pb-2">Register</h2>
                {/* register your input into the hook by invoking the "register" function */}
                <input type="text" placeholder="Your Name" {...register("name")} className="border-2 outline-primaryColor p-2 w-9/12 mx-auto rounded-md"  />
                <input type="email" placeholder="Your Email" {...register("email")} className="border-2 outline-primaryColor p-2 w-9/12 mx-auto rounded-md" required />
                <input type="password" placeholder="Your Password" {...register("password")} className="border-2 outline-primaryColor p-2 w-9/12 mx-auto rounded-md" required />
                <input type="url" placeholder="Your Photo" {...register("photo")} className="border-2 outline-primaryColor p-2 w-9/12 mx-auto rounded-md" required />

                {
                    error && (
                        <p className="text-error text-xl">{error}</p>
                    )
                }
                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit" value="Register" className="btn  bg-primaryColor hover:bg-hoverColor hover:text-black border-none  text-white font-bold w-9/12 mx-auto" />
            </form>
            <div className="">
                <div className="divider p-2 w-9/12 mx-auto">OR</div>
                <p className="mx-auto py-5">Already have an account ? <Link to="/login" className="text-primaryColor">Login Please</Link></p>
            </div>
        </div>
    );
};

export default Registration;