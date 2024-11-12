import SideBar from "../components/SideBar";

export default function Dashboard() {
    return (
        <main className="min-h-screen flex bg-white">
            <SideBar />
            <div className="flex-1 p-5">
                <h1>Dashboard</h1>
            </div>
        </main>
    )
}
