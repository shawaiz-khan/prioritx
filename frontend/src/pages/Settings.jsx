import { useState, useEffect } from "react";
import axios from "axios";
import { useUserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

export default function Settings() {
    const { userData, setUserData } = useUserContext();
    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: "",
        email: "",
        username: "",
        password: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        if (!userData) {
            navigate("/login");
            return;
        }

        setForm({
            name: userData.name || "",
            email: userData.email || "",
            username: userData.username || "",
            password: ""
        });
    }, [userData, navigate]);

    const handleForm = (e) => {
        setForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const updatedForm = { ...form };
        if (!form.password) {
            delete updatedForm.password;
        }

        try {
            setIsSubmitting(true);
            const res = await axios.put(`http://localhost:3000/api/users/${userData.id}`, updatedForm);

            if (res.status === 200) {
                setUserData(res.data.user);
                alert("Account updated successfully!");
            }
        } catch (err) {
            console.error("Error updating user:", err);
            alert("Error updating user. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6 font-sans">
            <div className="bg-white flex-col w-full max-w-4xl rounded-lg shadow-lg p-16 h-[60vh] flex justify-between items-start">
                <div className="w-fit">
                    <h1 className="px-2 text-3xl font-semibold mb-2">Account Settings</h1>
                    <span className="block border-t-2 border-purple-600 mb-4"></span>
                </div>
                <div className="w-full h-auto space-y-6">
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col">
                            <label htmlFor="name" className="mb-1 text-sm font-medium text-gray-700">
                                Full Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleForm}
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
                                name="username"
                                value={form.username}
                                onChange={handleForm}
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
                                name="email"
                                value={form.email}
                                onChange={handleForm}
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
                                name="password"
                                value={form.password}
                                onChange={handleForm}
                                className="py-2 px-4 rounded-md outline-none focus:ring-2 focus:ring-purple-600 border border-gray-300"
                                placeholder="Enter a new password (optional)"
                            />
                        </div>
                        <div className="flex justify-end space-x-4 col-span-full">
                            <button
                                type="button"
                                className="px-6 py-2 rounded-md text-gray-700 bg-gray-200 hover:bg-gray-300"
                                onClick={() => navigate("/dashboard")}
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="px-6 py-2 rounded-md text-white bg-purple-600 hover:bg-purple-700"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? "Saving..." : "Save Changes"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}