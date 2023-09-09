import { Link } from "react-router-dom";

const HeaderSection = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-3xl">GOOD Game</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/data">Data</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default HeaderSection;