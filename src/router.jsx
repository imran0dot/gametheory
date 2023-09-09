import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./components/app/home/HomePage";
import LoginPage from "./components/app/login/LoginPage";

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
        }
    
    ]
    }
]);