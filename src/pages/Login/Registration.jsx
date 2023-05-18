import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";


const Registration = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
<div className="mx-5 sm:mx-auto text-center flex flex-col justify-center sm:w-2/4 md:w-9/12 border my-28 bg-[#ecdbd4] rounded-md">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 py-10 w-full justify-center">
                <h2 className="mx-auto text-2xl text-primaryColor font-extrabold pb-2">Register</h2>
                {/* register your input into the hook by invoking the "register" function */}
                <input type="text" placeholder="Your Name" {...register("name")} className="border-2 outline-primaryColor p-2 w-9/12 mx-auto rounded-md" required />
                <input type="email" placeholder="Your Email" {...register("email")} className="border-2 outline-primaryColor p-2 w-9/12 mx-auto rounded-md" required />
                <input type="password" placeholder="Your Password" {...register("password")} className="border-2 outline-primaryColor p-2 w-9/12 mx-auto rounded-md" required />
                <input type="url" placeholder="Your Photo" {...register("photo")} className="border-2 outline-primaryColor p-2 w-9/12 mx-auto rounded-md" required />

                {/* include validation with required or other standard HTML validation rules */}
                {/* <input {...register("exampleRequired", { required: true })} /> */}
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit" value="Register" className="btn  bg-primaryColor hover:bg-[#d74c0b] border-none  text-white font-bold w-9/12 mx-auto" />
            </form>
            <div className="">
                <div className="divider p-2 w-9/12 mx-auto">OR</div>
                <p className="mx-auto py-5">Already have an account ? <Link to="/login" className="text-primaryColor">Login Please</Link></p>
            </div>
        </div>
    );
};

export default Registration;