const LoginPage = () => {
    const handleForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const data = {
            name: form.name.value,
            password: form.password.value,
        }
        console.log(data);
    }
    return (
        <div className="py-10 border-y-2">
            <form onSubmit={handleForm}>
                <div className="form-control w-full max-w-xl mx-auto">
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
            </form>
        </div>
    );
};

export default LoginPage;