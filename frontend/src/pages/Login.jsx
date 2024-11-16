/* eslint-disable react/no-unescaped-entities */
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function Login() {
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [form, setForm] = useState({ email: "", password: "" });
    const [formErrors, setFormErrors] = useState({ email: null, password: null });

    const navigate = useNavigate();

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

    const validateForm = () => {
        const errors = {};
        if (!form.email.trim()) {
            errors.email = "Email is required.";
        }
        if (!form.password.trim()) {
            errors.password = "Password is required.";
        }
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log("Form submitted successfully:", form);
            navigate('/dashboard');
        } else {
            console.log("Form contains errors.");
        }
    };

    return (
        <main className="min-h-screen flex justify-center items-center">
            <form
                onSubmit={handleSubmit}
                className="bg-light-container border border-gray-300 p-6 w-96 h-auto flex flex-col rounded-md justify-center gap-10"
            >
                <div>
                    <h1 className="text-3xl font-medium text-gray-900 mb-2">Login</h1>
                    <p className="text-gray-600">
                        Don't have an account?{" "}
                        <Link to="/sign-up" className="text-purple-700 font-medium">
                            Sign Up
                        </Link>
                    </p>
                </div>

                <div>
                    <div className="flex flex-col gap-2 mb-4">
                        <label htmlFor="email" className="text-md text-gray-700 font-medium m-0">
                            Username or Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder={formErrors.email ? "Email is required" : "Enter your email"}
                            className={`py-2 px-3 rounded-sm outline-none border focus:ring-2 ${formErrors.email ? "placeholder-red-500" : "border-gray-300"}`}
                            name="email"
                            onChange={handleForm}
                        />
                    </div>

                    <div className="flex flex-col gap-2 mb-4">
                        <div className="flex justify-between items-center">
                            <label htmlFor="password" className="text-md text-gray-700 font-medium m-0">
                                Password
                            </label>
                            <button onClick={handleShowPassword} type="button">
                                {isShowPassword ? <Eye size={18} /> : <EyeOff size={18} />}
                            </button>
                        </div>
                        <input
                            id="password"
                            type={isShowPassword ? "text" : "password"}
                            placeholder={formErrors.password ? "Password is required" : "Enter your password"}
                            className={`py-2 px-3 rounded-sm outline-none border focus:ring-2 ${formErrors.password ? "placeholder-red-500" : "border-gray-300"}`}
                            name="password"
                            onChange={handleForm}
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    className="bg-purple-700 text-white py-2 rounded-md hover:bg-purple-600 transition"
                >
                    Login
                </button>
            </form>
        </main>
    );
}