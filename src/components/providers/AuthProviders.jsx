import { createContext } from "react";


export const AuthContext = createContext(null);
const AuthProviders = ({ children }) => {

    const fakeAuthoentication = (authData) => {
        const { user, pass } = authData;
        if (user === "user" && pass === "1234") {
            localStorage.setItem("login", JSON.stringify(authData))
        }
    }


    const authContaxtValue = {
        fakeAuthoentication,
    }
    return (
        <AuthContext.Provider value={authContaxtValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;