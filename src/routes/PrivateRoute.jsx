/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    // const loading = true
    const location = useLocation();
    console.log("🚀 ~ file: PrivateRoute.jsx:11 ~ PrivateRoute ~ location:", location)
    const from = location?.state?.from?.pathname || "/";
    console.log("🚀 ~ file: PrivateRoute.jsx:13 ~ PrivateRoute ~ from:", from)

    if (loading) {
        return (
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
        )
    }
    if (user) {
        return children
    }
    return (
        <Navigate state={{ from: location }} to="/login" replace></Navigate>
    );
};

export default PrivateRoute;