/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { useLogin } from "../hooks/useLogin";

export default function Login() {
    const {
        form,
        formErrors,
        isShowPassword,
        isLoading,
        handleForm,
        handleShowPassword,
        handleSubmit,
    } = useLogin();

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
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder={formErrors.email ? "Email is required" : "Enter your email"}
                            className={`py-2 px-3 rounded-sm outline-none border focus:ring-2 ${formErrors.email ? "placeholder-red-500 border-red-500" : "border-gray-300"
                                }`}
                            name="email"
                            onChange={handleForm}
                        />
                    </div>

                    <div className="flex flex-col gap-2 mb-4">
                        <div className="flex justify-between items-center">
                            <label htmlFor="password" className="text-md text-gray-700 font-medium m-0">
                                Password
                            </label>
                            <button onClick={handleShowPassword} type="button" className="text-gray-600">
                                {isShowPassword ? <Eye size={18} /> : <EyeOff size={18} />}
                            </button>
                        </div>
                        <input
                            id="password"
                            type={isShowPassword ? "text" : "password"}
                            placeholder={formErrors.password ? "Password is required" : "Enter your password"}
                            className={`py-2 px-3 rounded-sm outline-none border focus:ring-2 ${formErrors.password ? "placeholder-red-500 border-red-500" : "border-gray-300"
                                }`}
                            name="password"
                            onChange={handleForm}
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    className={`bg-purple-700 text-white py-2 rounded-md hover:bg-purple-600 transition flex items-center justify-center ${isLoading ? "cursor-not-allowed opacity-75" : ""}`}
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <svg
                            className="animate-spin h-5 w-5 mr-2 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                            ></circle>
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8v8H4z"
                            ></path>
                        </svg>
                    ) : (
                        "Login"
                    )}
                </button>
            </form>
        </main>
    );
}