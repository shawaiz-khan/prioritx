/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <main className="min-h-screen flex justify-center items-center">
            <form
                action="#"
                className="bg-light-container border border-gray-300 p-6 w-96 h-auto flex flex-col rounded-md justify-center gap-10"
            >
                <div>
                    <h1 className="text-3xl font-medium text-gray-900 mb-2">Login</h1>
                    <p className="text-gray-600">
                        Don't have an account?{' '}
                        <Link to="/sign-up" className="text-purple-700 font-medium">
                            Sign Up
                        </Link>
                    </p>
                </div>

                <div>
                    <div className='flex flex-col gap-2 mb-4'>
                        <label htmlFor="email" className="text-md text-gray-700 font-medium m-0">Username or Email</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            className="py-2 px-3 rounded-sm outline-none focus:ring-2 focus:ring-purple-700 m-0 border border-gray-300"
                        />
                    </div>

                    <div className='flex flex-col gap-2 mb-4'>
                        <label htmlFor="password" className="text-md text-gray-700 font-medium m-0">Password</label>
                        <input
                            id="password"
                            type="password"
                            placeholder="Enter your password"
                            className="py-2 px-3 rounded-sm outline-none focus:ring-2 focus:ring-purple-700 m-0 border border-gray-300"
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