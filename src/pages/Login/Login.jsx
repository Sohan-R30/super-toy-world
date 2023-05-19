import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import titleChange from "../../componennts/shared/titleChange";

const Login = () => {
    const [error, setError] = useState("");
    const {signInUser,googleSignInUser} = useContext(AuthContext)


    const navigate = useNavigate();
    console.log("🚀 ~ file: Login.jsx:13 ~ Login ~ navigate:", navigate)
    const location = useLocation();
    console.log("🚀 ~ file: Login.jsx:15 ~ Login ~ location:", location)
    const from = location?.state?.from?.pathname || "/"
    console.log("🚀 ~ file: Login.jsx:17 ~ Login ~ from:", from)

    titleChange("Login");

    const { register, handleSubmit,reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
        setError("");
        signInUser(data.email, data.password)
            .then(result => {
                reset();
                console.log(result.user);
                navigate(from, {replace: true})

            })
            .catch(error => {
                setError(error.message);
            })

    };

    const handleGoogleSingIn = () => {
        googleSignInUser()
            .then(result => {
                console.log(result.user);
                navigate(from, {replace: true})
            })
            .catch(error => {
                setError(error.message)
            })
    }


    return (
        <div className=" mx-5 sm:mx-auto text-center flex flex-col justify-center sm:w-2/4 md:w-9/12 border my-28 bg-[#ecdbd4] rounded-md">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 py-10 w-full justify-center">
                <h2 className="mx-auto text-2xl text-primaryColor font-extrabold pb-2">Login</h2>
                {/* register your input into the hook by invoking the "register" function */}
                <input type="email" placeholder="Your Email" {...register("email")} className="border-2 outline-primaryColor p-2 w-9/12 mx-auto rounded-md" required />
                <input type="password" placeholder="Your Password" {...register("password")} className="border-2 outline-primaryColor p-2 w-9/12 mx-auto rounded-md" required />

                {/* include validation with required or other standard HTML validation rules */}
                {/* <input {...register("exampleRequired", { required: true })} /> */}
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}

                {
                    error && (
                        <p className="text-error text-xl">{error}</p>
                    )
                }

                <input type="submit" value="Login" className="btn  bg-primaryColor hover:bg-[#d74c0b] border-none  text-white font-bold w-9/12 mx-auto" />
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