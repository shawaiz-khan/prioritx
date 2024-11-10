import { useLoginContext } from "../contexts/LoginContext";

export default function Test() {
    const { isLoggedIn, toggleLogin } = useLoginContext();

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
                <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
                    {isLoggedIn ? 'You are Logged In' : 'You are Logged Out'}
                </h1>
                <button
                    onClick={toggleLogin}
                    className="w-full py-2 px-4 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition duration-300"
                >
                    Click Me
                </button>
            </div>
        </div>
    );
}