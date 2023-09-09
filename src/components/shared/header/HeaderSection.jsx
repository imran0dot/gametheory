import { Link } from "react-router-dom";

const HeaderSection = () => {
    return (
        <div>
            <div className="navbar bg-base-100 border-b-2">
                <div className="flex-1">
                    <Link to="/" className="btn btn-ghost normal-case text-3xl">GOOD GAME</Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/shop">Data</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default HeaderSection;