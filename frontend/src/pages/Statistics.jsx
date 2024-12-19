import TaskCompletionChart from '../components/TaskCompletionChart';
import NearestDueTask from '../components/NearestDueTask';
import PendingTasksCount from '../components/PendingTasksCount';
export default function Statistics() {
    const tasks = [
        { id: 1, name: "Task 1", status: "completed", dueDate: "2024-12-21" },
        { id: 2, name: "Task 2", status: "pending", dueDate: "2024-12-20" },
        { id: 3, name: "Task 3", status: "pending", dueDate: "2024-12-22" },
    ];

    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(task => task.status === "completed").length;
    const pendingTasks = tasks.filter(task => task.status === "pending").length;

    const nearestDueTask = tasks
        .filter(task => task.status !== "completed")
        .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate))[0];

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-center mb-8">Task Statistics</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="w-full max-w-lg mx-auto">
                    <TaskCompletionChart completedTasks={completedTasks} totalTasks={totalTasks}/>
                </div>
                <div className="flex flex-col ">
                    <NearestDueTask task={nearestDueTask}/>
                    <PendingTasksCount count={pendingTasks}/>
                </div>
            </div>
        </div>
    );
}
