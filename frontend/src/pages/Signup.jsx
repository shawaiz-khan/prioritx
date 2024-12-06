import { Eye, EyeOff } from "lucide-react";
import useSignup from "../hooks/useSignup";
import { Link } from "react-router-dom";

export default function Signup() {
    const {
        isShowPassword,
        formErrors,
        errorMessage,
        loading,
        handleShowPassword,
        handleForm,
        handleSubmit,
    } = useSignup();

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
                            className={`py-2 px-3 rounded-sm outline-none border ${formErrors.name ? "border-red-500" : "border-gray-300"
                                } focus:ring-2`}
                            name="name"
                            onChange={handleForm}
                        />
                        {formErrors.name && <p className="text-red-500 text-sm">{formErrors.name}</p>}
                    </div>
                    <div className="flex flex-col gap-2 flex-1">
                        <label htmlFor="email" className="text-md text-gray-700 font-medium">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            className={`py-2 px-3 rounded-sm outline-none border ${formErrors.email ? "border-red-500" : "border-gray-300"
                                } focus:ring-2`}
                            name="email"
                            onChange={handleForm}
                        />
                        {formErrors.email && <p className="text-red-500 text-sm">{formErrors.email}</p>}
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
                        className={`py-2 px-3 rounded-sm outline-none border ${formErrors.username ? "border-red-500" : "border-gray-300"
                            } focus:ring-2`}
                        name="username"
                        onChange={handleForm}
                    />
                    {formErrors.username && <p className="text-red-500 text-sm">{formErrors.username}</p>}
                </div>

                <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                        <label htmlFor="password" className="text-md text-gray-700 font-medium">
                            Password
                        </label>
                        <button onClick={handleShowPassword} type="button" className="text-gray-600">
                            {isShowPassword ? <Eye size={18} /> : <EyeOff size={18} />}
                        </button>
                    </div>
                    <input
                        id="password"
                        type={isShowPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        className={`py-2 px-3 rounded-sm outline-none border ${formErrors.password ? "border-red-500" : "border-gray-300"
                            } focus:ring-2`}
                        name="password"
                        onChange={handleForm}
                    />
                    {formErrors.password && <p className="text-red-500 text-sm">{formErrors.password}</p>}
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="confirmPassword" className="text-md text-gray-700 font-medium">
                        Confirm Password
                    </label>
                    <input
                        id="confirmPassword"
                        type={isShowPassword ? "text" : "password"}
                        placeholder="Re-enter your password"
                        className={`py-2 px-3 rounded-sm outline-none border ${formErrors.confirmPassword ? "border-red-500" : "border-gray-300"
                            } focus:ring-2`}
                        name="confirmPassword"
                        onChange={handleForm}
                    />
                    {formErrors.confirmPassword && (
                        <p className="text-red-500 text-sm">{formErrors.confirmPassword}</p>
                    )}
                </div>

                {errorMessage && <div className="text-red-500 text-center">{errorMessage}</div>}

                <button
                    type="submit"
                    className={`bg-purple-700 text-white py-2 rounded-md hover:bg-purple-600 transition flex items-center justify-center ${loading ? "cursor-not-allowed opacity-75" : ""
                        }`}
                    disabled={loading}
                >
                    {loading ? (
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
                        "Sign Up"
                    )}
                </button>
            </form>
        </main>
    );
}