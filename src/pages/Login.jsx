import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
    const { logIn, setUser } = useContext(AuthContext);
    const [error, setError] = useState({});

    const location = useLocation();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        logIn(email, password)
            .then((result) => {
                setUser(result.user);
                navigate(location?.state ? location.state : "/");
            })
            .catch((err) => {
                setError({ ...error, login: err.message });
            });
    };

    return (
        <div className="flex justify-center min-h-screen items-center">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className="font-semibold text-2xl text-center">
                    Login your account
                </h2>
                <form onSubmit={handleSubmit} className="card-body">
                    <fieldset className="fieldset">
                        {/* email  */}
                        <label className="label">Email</label>
                        <input
                            name="email"
                            type="email"
                            className="input"
                            placeholder="Email"
                            required
                        />
                        {/* passowrd  */}
                        <label className="label">Password</label>
                        <input
                            name="password"
                            type="password"
                            className="input"
                            placeholder="Password"
                            required
                        />
                        <div>
                            <a className="link link-hover">Forgot password?</a>
                        </div>

                        {
                            error.login && (
                                <p className="font-semibold text-center pt-5">
                                    {error.login}
                                </p>
                            )
                        }

                        <button type="submit" className="btn btn-neutral mt-2">
                            Login
                        </button>

                        <p className="font-semibold text-center pt-5">
                            Dont’t Have An Account ?{" "}
                            <Link className="text-secondary" to="/auth/register">
                                Register
                            </Link>
                        </p>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}

export default Login