import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import titleChange from "../../componennts/shared/titleChange";

const Login = () => {
    const [error, setError] = useState("");
    const {signInUser,googleSignInUser} = useContext(AuthContext)


    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || "/"

    titleChange("Login");

    const { register, handleSubmit,reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        setError("");
        signInUser(data.email, data.password)
            .then(() => {
                reset();
                navigate(from, {replace: true})

            })
            .catch(error => {
                setError(error.message);
            })

    };

    const handleGoogleSingIn = () => {
        googleSignInUser()
            .then(() => {
                navigate(from, {replace: true})
            })
            .catch(error => {
                setError(error.message)
            })
    }


    return (
        <div className=" mx-5 sm:mx-auto text-center flex flex-col justify-center sm:w-2/4 md:w-9/12 border my-28 bg-formColor rounded-md">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 py-10 w-full justify-center">
                <h2 className=" text-4xl text-primaryColor font-extrabold pb-2">Login</h2>
                {/* register your input into the hook by invoking the "register" function */}
                <input type="email" placeholder="Your Email" {...register("email")} className="border-2 outline-primaryColor p-2 w-9/12 mx-auto rounded-md" required />
                <input type="password" placeholder="Your Password" {...register("password")} className="border-2 outline-primaryColor p-2 w-9/12 mx-auto rounded-md" required />
               
                {errors.exampleRequired && <span>This field is required</span>}
                {
                    error && (
                        <p className="text-error text-xl">{error}</p>
                    )
                }

                <input type="submit" value="Login" className="btn  bg-primaryColor hover:bg-hoverColor hover:text-black border-none  text-white font-bold w-9/12 mx-auto" />
            </form>
            <div>
                <div className="divider p-2 w-9/12 mx-auto">OR</div>
                <button onClick={handleGoogleSingIn} className="btn btn-ghost border-primaryColor hover:bg-primaryColor hover:text-white  w-9/12 mx-auto">Google Login</button>
                <p className="mx-auto py-5">Don&lsquo;t have an account ? <Link to="/registration" className="text-primaryColor">Register Please</Link></p>
            </div>
        </div>
    );
};

export default Login;