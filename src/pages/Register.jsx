import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
    const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState({});
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        if (name.length < 5) {
            setError({ ...error, name: "Name must greater 5 character." });
            return;
        }


        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        createNewUser(email, password)
            .then((result) => {
                setUser(result.user);
                updateUserProfile({ displayName: name, photoURL: photo })
                    .then((result) => {
                        navigate('/');
                    }).catch((err) => {
                        console.log(err);

                    })
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(error);
            });

    };

    return (
        <div className="flex justify-center min-h-screen items-center">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className="font-semibold text-2xl text-center">
                    Register your account
                </h2>
                <form onSubmit={handleSubmit} className="card-body">
                    <fieldset className="fieldset">
                        {/* Name  */}
                        <label className="label">Name</label>
                        <input
                            name="name"
                            type="text"
                            className="input"
                            placeholder="Name"
                            required
                        />
                        {
                            error.name && (
                                <label className="label text-red-700">{error.name}</label>
                            )
                        }

                        {/* Photo URl  */}
                        <label className="label">Photo URl </label>
                        <input
                            name="photo"
                            type="text"
                            className="input"
                            placeholder="Photo URl"
                            required
                        />

                        {/* email  */}
                        <label className="label">Email</label>
                        <input
                            name="email"
                            type="email"
                            className="input"
                            placeholder="Email"
                            required
                        />

                        {/* password  */}
                        <label className="label">Password</label>
                        <input
                            name="password"
                            type="password"
                            className="input"
                            placeholder="Password"
                            required
                        />

                        <button type="submit" className="btn btn-neutral mt-4">
                            Register
                        </button>
                        <p className="font-semibold text-center pt-5">
                            Already Have An Account ? {" "}
                            <Link className="text-secondary" to="/auth/login">
                                Login
                            </Link>
                        </p>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}

export default Register