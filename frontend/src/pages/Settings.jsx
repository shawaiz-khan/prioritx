export default function Settings() {
    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
            <div className="bg-white w-full max-w-4xl rounded-lg shadow-lg p-8 space-y-6">
                <h1 className="text-2xl font-bold text-gray-800 text-center">Account Settings</h1>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col">
                        <label htmlFor="fullName" className="mb-1 text-sm font-medium text-gray-700">
                            Full Name
                        </label>
                        <input
                            id="fullName"
                            type="text"
                            className="py-2 px-4 rounded-md outline-none focus:ring-2 focus:ring-purple-600 border border-gray-300"
                            placeholder="Enter your full name"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="username" className="mb-1 text-sm font-medium text-gray-700">
                            Username
                        </label>
                        <input
                            id="username"
                            type="text"
                            className="py-2 px-4 rounded-md outline-none focus:ring-2 focus:ring-purple-600 border border-gray-300"
                            placeholder="Choose a username"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="email" className="mb-1 text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            className="py-2 px-4 rounded-md outline-none focus:ring-2 focus:ring-purple-600 border border-gray-300"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="password" className="mb-1 text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            className="py-2 px-4 rounded-md outline-none focus:ring-2 focus:ring-purple-600 border border-gray-300"
                            placeholder="Enter your password"
                        />
                    </div>
                </form>
                <div className="flex justify-end space-x-4">
                    <button className="px-6 py-2 rounded-md text-gray-700 bg-gray-200 hover:bg-gray-300">
                        Cancel
                    </button>
                    <button className="px-6 py-2 rounded-md text-white bg-purple-600 hover:bg-purple-700">
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
}