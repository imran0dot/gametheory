import { useContext } from "react";
import { AuthContext } from "./AuthProviders";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user } = useContext(AuthContext);
    const userCheck = user();
    return (
        <div>
            {
                userCheck? children : <Navigate to="/login"  state={{from: location.pathname}}/>
            }
        </div>
    );
};

export default PrivateRoute;