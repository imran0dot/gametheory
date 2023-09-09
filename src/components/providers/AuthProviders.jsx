import { createContext } from "react";


export const AuthContext = createContext(null);
const AuthProviders = ({ children }) => {

    const fakeAuthoentication = async (authData) => {
        const { user, pass } = authData;
        return new Promise((resolve, reject) => {
            if (user === "user" && pass === "1234") {
                localStorage.setItem("loginUser", JSON.stringify(authData))
                resolve(true);
            } else {
                throw reject(false);
            }
        })

    }

    const user = () => {
        const logedUser = localStorage.getItem("loginUser");
        
        if (logedUser) {
            return true
        } else {
           return false
        }
    }


    const authContaxtValue = {
        fakeAuthoentication,
        user,
    }
    return (
        <AuthContext.Provider value={authContaxtValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;