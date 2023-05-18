import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Error from "../componennts/shared/Error/Error";
import Home from "../pages/Home/Home";
import Blog from "../pages/Blog/Blog";
import Login from "../pages/Login/Login";
import Registration from "../pages/Login/Registration";
import AddToy from "../pages/AddToy/AddToy";


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
                    element: <h2>all toys</h2>
                },
                {
                    path: "/my-toys",
                    element: <h2>my toys</h2>
                },
                {
                    path: "/add-toy",
                    element: <AddToy></AddToy>
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