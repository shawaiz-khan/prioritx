import { Link } from 'react-router-dom';
import { HomeIcon, LoginIcon, UserAddIcon, SettingsIcon, DashboardIcon, TaskIcon, CheckCircleIcon, PendingIcon } from 'lucide-react'; // Import Lucid React Icons

export default function RouteTest() {
    return (
        <div className="flex flex-col items-center space-y-4">
            <h1 className="text-3xl font-bold mb-6">Route Navigation</h1>

            <div className="space-y-2">
                <Link
                    to="/"
                    className="flex items-center text-lg text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out"
                >
                    <HomeIcon className="mr-2" /> Home
                </Link>

                <Link
                    to="/login"
                    className="flex items-center text-lg text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out"
                >
                    <LoginIcon className="mr-2" /> Login
                </Link>

                <Link
                    to="/sign-up"
                    className="flex items-center text-lg text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out"
                >
                    <UserAddIcon className="mr-2" /> Sign Up
                </Link>

                <Link
                    to="/setting"
                    className="flex items-center text-lg text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out"
                >
                    <SettingsIcon className="mr-2" /> Settings
                </Link>

                <Link
                    to="/dashboard"
                    className="flex items-center text-lg text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out"
                >
                    <DashboardIcon className="mr-2" /> Dashboard
                </Link>

                <Link
                    to="/dashboard/todo"
                    className="flex items-center text-lg text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out"
                >
                    <TaskIcon className="mr-2" /> Tasks
                </Link>

                <Link
                    to="/dashboard/todo/add"
                    className="flex items-center text-lg text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out"
                >
                    <CheckCircleIcon className="mr-2" /> Add Task
                </Link>

                <Link
                    to="/dashboard/completed"
                    className="flex items-center text-lg text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out"
                >
                    <CheckCircleIcon className="mr-2" /> Completed
                </Link>

                <Link
                    to="/dashboard/pending"
                    className="flex items-center text-lg text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out"
                >
                    <PendingIcon className="mr-2" /> Pending
                </Link>

                <Link
                    to="/test"
                    className="flex items-center text-lg text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out"
                >
                    <PendingIcon className="mr-2" /> Test
                </Link>
            </div>
        </div>
    );
}
