import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Error from "../componennts/shared/Error/Error";
import Home from "../pages/Home/Home";
import Blog from "../pages/Blog/Blog";
import Login from "../pages/Login/Login";
import Registration from "../pages/Login/Registration";
import AddToy from "../pages/AddToy/AddToy";
import PrivateRoute from "./PrivateRoute";
import MyToys from "../pages/MyToys/MyToys";
import UpdateMyToy from "../pages/MyToys/UpdateMyToy";
import AllToys from "../pages/AllToys/AllToys";
import Modal from "../componennts/Modal/Modal";


const router = createBrowserRouter(
    [
        {
            path: "/",
            element:<Main></Main>,
            errorElement:<Error></Error>,
            children: [
                {
                    path: "/",
                    element: <Home></Home>
                },
                {
                    path: "/all-toys",
                    element: <AllToys></AllToys>
                },
                {
                    path:"/single-toy/:id",
                    element: <PrivateRoute><Modal></Modal></PrivateRoute>,
                    loader: ({params}) => fetch(`https://super-toy-world-server.vercel.app/single-toy/${params.id}`)
                },
                {
                    path: "/my-toys/",
                    element: <PrivateRoute><MyToys></MyToys></PrivateRoute>,
                },
                {
                    path: "/update-toy/:id",
                    element: <PrivateRoute><UpdateMyToy></UpdateMyToy></PrivateRoute>,
                },
                {
                    path: "/add-toy",
                    element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
                },
                {
                    path: "/blogs",
                    element: <Blog></Blog>
                },
                {
                    path: "/login",
                    element: <Login></Login>
                },
                {
                    path: "/registration",
                    element: <Registration></Registration>
                }
            ]
        }
    ]
);

export default router;