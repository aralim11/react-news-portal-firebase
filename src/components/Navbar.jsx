import { Link } from "react-router-dom"
import userIcon from "../assets/user.png"
import { useContext } from "react"
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    return (
        <div className="flex justify-between">
            <div className="">{user && user.email}</div>
            <div className="nav space-x-5">
                <Link to="/">Home</Link>
                <Link to="/career">Career</Link>
                <Link to="/about">About</Link>
            </div>
            <div className="login flex gap-2 items-center">
                <div>
                    <img src={userIcon} alt="User Logo" />
                </div>
                {
                    user && user?.email ? <button onClick={logOut} className="btn btn-neutral rounded-none">Logout</button> : <Link to={`/auth/login`} className="btn btn-neutral rounded-none">Login</Link>
                }
                {
                    !user && <Link to={`/auth/register`} className="btn btn-neutral rounded-none">Register</Link>
                }
            </div>
        </div>
    )
}

export default Navbar