import { useState, useEffect } from "react";
import TaskCompletionChart from '../components/TaskCompletionChart';
import NearestDueTask from '../components/NearestDueTask';
import PendingTasksCount from '../components/PendingTasksCount';
import axios from "axios";
import { useUserContext } from "../contexts/UserContext";

export default function Statistics() {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const { userData } = useUserContext();

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/tasks/user-tasks?userId=${userData.id}`);
                if (response.status === 200) {
                    setTasks(response.data);
                }
            } catch (error) {
                console.error("Error fetching tasks:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchTasks();
    }, [userData.id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(task => task.status === "completed").length;
    const pendingTasks = tasks.filter(task => task.status === "pending").length;

    const nearestDueTask = tasks
        .filter(task => task.status !== "completed")
        .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate))[0];

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-center">Task Statistics</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="w-full max-w-lg mx-auto">
                    <TaskCompletionChart completedTasks={completedTasks} totalTasks={totalTasks} />
                </div>
                <div className="flex flex-col ">
                    <NearestDueTask task={nearestDueTask} />
                    <PendingTasksCount count={pendingTasks} />
                </div>
            </div>
        </div>
    );
}