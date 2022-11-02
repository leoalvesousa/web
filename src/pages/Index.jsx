import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { Dashboard } from "./dashboard";
import { Home } from "./home";
import { Login } from "./login";
import { Profile } from "./profile";
import { Signup } from "./signup";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/signup",
        element: <Signup />,
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
    },
    {
        path: "/profile",
        element: <Profile />,
    },
]);

export const Router = () => <RouterProvider router={router} />;
