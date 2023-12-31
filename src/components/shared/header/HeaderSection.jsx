import { Link } from "react-router-dom";

const HeaderSection = () => {
    return (
        <div>
            <div className="navbar bg-base-100 border-b-2">
                <div className="flex-1">
                    <Link to="/" className="btn btn-ghost normal-case text-3xl font-bold">TheGoodGameTheory</Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 text-2xl font-bold">
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/beers">Beers</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default HeaderSection;