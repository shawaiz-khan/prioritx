import { Link } from 'react-router-dom';

export default function RouteTest() {
    return (
        <div className="flex flex-col items-center space-y-4 p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Route Navigation</h1>

            <div className="space-y-2">
                <Link
                    to="/"
                    className="text-lg text-blue-600 hover:text-blue-800 font-medium transition duration-300 ease-in-out"
                >
                    Home
                </Link>

                <Link
                    to="/login"
                    className="text-lg text-blue-600 hover:text-blue-800 font-medium transition duration-300 ease-in-out"
                >
                    Login
                </Link>

                <Link
                    to="/sign-up"
                    className="text-lg text-blue-600 hover:text-blue-800 font-medium transition duration-300 ease-in-out"
                >
                    Sign Up
                </Link>

                <Link
                    to="/setting"
                    className="text-lg text-blue-600 hover:text-blue-800 font-medium transition duration-300 ease-in-out"
                >
                    Settings
                </Link>

                <Link
                    to="/dashboard"
                    className="text-lg text-blue-600 hover:text-blue-800 font-medium transition duration-300 ease-in-out"
                >
                    Dashboard
                </Link>

                <Link
                    to="/dashboard/todo"
                    className="text-lg text-blue-600 hover:text-blue-800 font-medium transition duration-300 ease-in-out"
                >
                    Tasks
                </Link>

                <Link
                    to="/dashboard/todo/add"
                    className="text-lg text-blue-600 hover:text-blue-800 font-medium transition duration-300 ease-in-out"
                >
                    Add Task
                </Link>

                <Link
                    to="/dashboard/completed"
                    className="text-lg text-blue-600 hover:text-blue-800 font-medium transition duration-300 ease-in-out"
                >
                    Completed
                </Link>

                <Link
                    to="/dashboard/pending"
                    className="text-lg text-blue-600 hover:text-blue-800 font-medium transition duration-300 ease-in-out"
                >
                    Pending
                </Link>

                <Link
                    to="/test"
                    className="text-lg text-blue-600 hover:text-blue-800 font-medium transition duration-300 ease-in-out"
                >
                    Test
                </Link>
            </div>
        </div>
    );
}