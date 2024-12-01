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
        confirmPassword: "",
    });
    const [formErrors, setFormErrors] = useState({});
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

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePasswordStrength = (password) => {
        const passwordStrengthRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        return passwordStrengthRegex.test(password);
    };

    const validateForm = () => {
        const errors = {};

        if (!form.email.trim()) {
            errors.email = "Email is required.";
        } else if (!validateEmail(form.email)) {
            errors.email = "Please enter a valid email.";
        }

        if (!form.username.trim()) errors.username = "Username is required.";
        if (!form.name.trim()) errors.name = "Name is required.";

        if (!form.password.trim()) errors.password = "Password is required.";
        else if (!validatePasswordStrength(form.password)) {
            errors.password =
                "Password must be at least 8 characters long and contain both letters and numbers.";
        }

        if (!form.confirmPassword.trim()) errors.confirmPassword = "Please confirm your password.";
        else if (form.password !== form.confirmPassword) {
            errors.confirmPassword = "Passwords do not match.";
        }

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            setLoading(true);
            try {
                const response = await axios.post(`https://localhost:3000/api/users/register`, form);
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
        } else {
            console.log("Form contains errors.");
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
                            placeholder={formErrors.name ? "Name is required" : "Enter your name"}
                            className={`py-2 px-3 rounded-sm outline-none border focus:ring-2 ${formErrors.name ? "outline-red-500 placeholder-red-500" : "border-gray-300"
                                }`}
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
                            placeholder={formErrors.email ? "Email is required" : "Enter your email"}
                            className={`py-2 px-3 rounded-sm outline-none border focus:ring-2 ${formErrors.email ? "outline-red-500 placeholder-red-500" : "border-gray-300"
                                }`}
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
                        placeholder={
                            formErrors.username ? "Username is required" : "Enter your username"
                        }
                        className={`py-2 px-3 rounded-sm outline-none border focus:ring-2 ${formErrors.username ? "outline-red-500 placeholder-red-500" : "border-gray-300"
                            }`}
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
                        placeholder={formErrors.password ? "Password is required" : "Enter your password"}
                        className={`py-2 px-3 rounded-sm outline-none border focus:ring-2 ${formErrors.password ? "outline-red-500 placeholder-red-500" : "border-gray-300"
                            }`}
                        name="password"
                        onChange={handleForm}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                        <label htmlFor="confirmPassword" className="text-md text-gray-700 font-medium">
                            Confirm Password
                        </label>
                    </div>
                    <input
                        id="confirmPassword"
                        type={isShowPassword ? "text" : "password"}
                        placeholder={
                            formErrors.confirmPassword
                                ? formErrors.confirmPassword
                                : "Re-enter your password"
                        }
                        className={`py-2 px-3 rounded-sm outline-none border focus:ring-2 ${formErrors.confirmPassword ? "outline-red-500 placeholder-red-500" : "border-gray-300"
                            }`}
                        name="confirmPassword"
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