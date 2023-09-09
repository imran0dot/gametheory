import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./components/app/home/HomePage";
import LoginPage from "./components/app/login/LoginPage";
import DataPage from "./components/app/data/dataPage";
import PrivateRoute from "./components/providers/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [{
            path: "/",
            element: <HomePage />
        },
        {
            path: "/login",
            element: <LoginPage />
        },
        {
            path: "/beers",
            element: <PrivateRoute><DataPage /></PrivateRoute>
        },


        ]
    }
]);