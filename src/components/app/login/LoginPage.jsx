import { useContext } from "react";
import { AuthContext } from "../../providers/authProviders";
import { useNavigate, Navigate, useLocation  } from "react-router-dom";

const LoginPage = () => {

    const { fakeAuthoentication, user } = useContext(AuthContext);
    const navigate = useNavigate();
    const userCheck = user();
    const location = useLocation();
    const navigateurl = location.state.from || "/"

    const handleForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const data = {
            user: form.name.value,
            pass: form.password.value,
        }
        fakeAuthoentication(data).then(res => {
            if(res){
                navigate(navigateurl);
            }
        }).catch(err => {
            form.reset();
            console.log(err)
        })
    }
    return (
        <div className="py-10 border-y-2">
            {
                !userCheck? <form onSubmit={handleForm}>
                    <div className="form-control p-3 w-full max-w-xl mx-auto">
                        <div>
                            <label className="label">
                                <span className="label-text">User name</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                required
                                placeholder="user name"
                                className="input input-bordered w-full" />
                        </div>
    
                        <div>
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                required
                                placeholder="password"
                                className="input input-bordered w-full" />
                        </div>
    
                        <input className="btn btn-outline mt-10" type="submit" value="Submit" />
    
                    </div>
                </form> : <Navigate to="/" />
            }
        </div>
    );
};

export default LoginPage;