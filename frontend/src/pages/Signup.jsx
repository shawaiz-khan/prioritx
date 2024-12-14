import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import axios from "axios";

export default function Signup() {
    const navigate = useNavigate();
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [form, setForm] = useState({
        email: "",
        username: "",
        password: "",
        name: "",
    });
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleShowPassword = (e) => {
        e.preventDefault();
        setIsShowPassword((prev) => !prev);
    };

    const handleForm = (e) => {
        setForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post(`http://localhost:3000/api/users/register`, form);
            setLoading(false);
            if (response.status === 201) {
                console.log("Form submitted successfully:", form);
                navigate("/login");
            }
        } catch (err) {
            setLoading(false);
            console.error("Error: ", err);
            if (err.response && err.response.data) {
                setErrorMessage(err.response.data.message);
            } else {
                setErrorMessage("An error occurred during registration.");
            }
        }
    };

    return (
        <main className="min-h-screen flex justify-center items-center">
            <form
                onSubmit={handleSubmit}
                className="bg-light-container border border-gray-300 p-6 w-fit h-auto flex flex-col rounded-md justify-center gap-6"
            >
                <div>
                    <h1 className="text-3xl font-medium text-gray-900 mb-2">Sign Up</h1>
                    <p className="text-gray-600">
                        Already have an account?{" "}
                        <Link to="/login" className="text-purple-700 font-medium">
                            Login
                        </Link>
                    </p>
                </div>

                <div className="flex gap-3">
                    <div className="flex flex-col gap-2 flex-1">
                        <label htmlFor="name" className="text-md text-gray-700 font-medium">
                            Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Enter your name"
                            className="py-2 px-3 rounded-sm outline-none border border-gray-300 focus:ring-2"
                            name="name"
                            onChange={handleForm}
                        />
                    </div>
                    <div className="flex flex-col gap-2 flex-1">
                        <label htmlFor="email" className="text-md text-gray-700 font-medium">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            className="py-2 px-3 rounded-sm outline-none border border-gray-300 focus:ring-2"
                            name="email"
                            onChange={handleForm}
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="username" className="text-md text-gray-700 font-medium">
                        Username
                    </label>
                    <input
                        id="username"
                        type="text"
                        placeholder="Enter your username"
                        className="py-2 px-3 rounded-sm outline-none border border-gray-300 focus:ring-2"
                        name="username"
                        onChange={handleForm}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                        <label htmlFor="password" className="text-md text-gray-700 font-medium">
                            Password
                        </label>
                        <button onClick={handleShowPassword} type="button">
                            {isShowPassword ? <Eye size={18} /> : <EyeOff size={18} />}
                        </button>
                    </div>
                    <input
                        id="password"
                        type={isShowPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        className="py-2 px-3 rounded-sm outline-none border border-gray-300 focus:ring-2"
                        name="password"
                        onChange={handleForm}
                    />
                </div>

                {errorMessage && <div className="text-red-500 text-center">{errorMessage}</div>}

                <button
                    type="submit"
                    className="bg-purple-700 text-white py-2 rounded-md hover:bg-purple-600 transition"
                    disabled={loading}
                >
                    {loading ? "Submitting..." : "Sign Up"}
                </button>
            </form>
        </main>
    );
}