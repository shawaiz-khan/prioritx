import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import { useState, useEffect } from "react";

export default function Dashboard() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <main className="min-h-screen flex bg-gray-50">
            <SideBar />
            <div className="flex-1 p-5 overflow-auto">
                {loading ? (
                    <div className="text-center text-gray-500">Loading...</div>
                ) : (
                    <Outlet />
                )}
            </div>
        </main>
    );
}