import { useState } from 'react';

export default function AddTask() {
    const [newTask, setNewTask] = useState({
        title: '',
        description: '',
        completed: false,
        dueDate: '',
        priority: 'medium',
    });
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setNewTask({ ...newTask, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        const taskToSend = { ...newTask, completed: false };

        try {
            const res = await fetch('http://localhost:3000/api/tasks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(taskToSend),
            });

            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }

            const savedTask = await res.json();
            console.log('Task added:', savedTask);

            setNewTask({
                title: '',
                description: '',
                completed: false,
                dueDate: '',
                priority: 'medium',
            });
        } catch (err) {
            console.error('Error adding task:', err.message);
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <main className="p-5 flex justify-center items-center min-h-screen bg-light-background">
            <form
                className="bg-light-container flex flex-col w-3/4 p-5 rounded-md gap-4 border-2"
                onSubmit={handleSubmit}
            >
                <div className="w-fit">
                    <h1 className="px-2 text-3xl font-semibold mb-2">Add New Task</h1>
                    <span className="block border-t-2 border-purple-600 mb-4"></span>
                </div>
                <label htmlFor="title" className="flex flex-col gap-2">
                    <span className="text-xl font-medium">Task Title</span>
                    <input
                        id="title"
                        name="title"
                        type="text"
                        className="px-3 py-2 focus:outline-purple-600 rounded-sm border border-gray-300"
                        placeholder="Enter task title"
                        required
                        onChange={handleOnChange}
                        value={newTask.title}
                    />
                </label>
                <label htmlFor="description" className="flex flex-col gap-2">
                    <span className="text-xl font-medium">Description</span>
                    <textarea
                        id="description"
                        name="description"
                        className="px-3 py-2 focus:outline-purple-600 rounded-sm border border-gray-300 h-40 resize-none"
                        placeholder="Enter task description"
                        required
                        onChange={handleOnChange}
                        value={newTask.description}
                    ></textarea>
                </label>
                <div className="flex justify-between gap-4">
                    <label htmlFor="due-date" className="flex flex-col gap-2 w-full sm:w-1/2">
                        <span className="text-xl font-medium">Due Date</span>
                        <input
                            id="due-date"
                            name="dueDate"
                            type="date"
                            className="px-3 py-2 focus:outline-purple-600 rounded-sm border border-gray-300 h-10"
                            required
                            onChange={handleOnChange}
                            value={newTask.dueDate}
                        />
                    </label>
                    <label htmlFor="priority" className="flex flex-col gap-2 w-full sm:w-1/2">
                        <span className="text-xl font-medium">Priority</span>
                        <select
                            id="priority"
                            name="priority"
                            className="px-3 py-2 focus:outline-purple-600 rounded-sm border border-gray-300 h-10"
                            required
                            onChange={handleOnChange}
                            value={newTask.priority}
                        >
                            <option value="high">High</option>
                            <option value="medium">Medium</option>
                            <option value="low">Low</option>
                        </select>
                    </label>
                </div>
                {error && <p className="text-red-600">{error}</p>}
                <button
                    type="submit"
                    className={`mt-4 px-6 py-2 ${isLoading ? 'bg-gray-400' : 'bg-purple-600 hover:bg-purple-700'} text-white font-semibold rounded-md`}
                    disabled={isLoading}
                >
                    {isLoading ? 'Submitting...' : 'Submit'}
                </button>
            </form>
        </main>
    );
}