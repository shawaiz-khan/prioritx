/* eslint-disable react/prop-types */
import { Check, Trash2 } from "lucide-react";

export default function TaskItem({ task, handleCompleted = null, handlePreviewData, handleDelete }) {
    const { _id, title, description, dueDate, completed } = task;
    const shortDescription = description.length > 50 ? description.slice(0, 50) + '...' : description;

    const formatDate = (date) => {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return new Date(date).toLocaleDateString('en-GB', options);
    };

    const handleDeleteClick = async () => {
        try {
            const response = await fetch(`http://localhost:3000/api/tasks/${_id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Failed to delete task');
            }

            handleDelete(_id);
        } catch (err) {
            console.error('Error deleting task:', err.message);
        }
    };

    return (
        <div className="bg-light-background border-2 rounded-md p-4 flex flex-col justify-between gap-2">
            <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                    <h1 className="font-semibold">{title}</h1>
                    <button
                        className={`w-6 h-6 flex items-center justify-center border rounded-full ${completed ? 'bg-purple-600 text-white' : 'bg-white text-purple-600'}`}
                        onClick={() => handleCompleted(_id)}
                    >
                        <Check size={15} />
                    </button>
                </div>
                <p className="font-normal">{shortDescription}</p>
            </div>
            <div className="flex justify-between items-center">
                <div className="flex justify-start items-center">
                    <button
                        onClick={() => handlePreviewData(task)}
                        className="text-sm bg-purple-600 hover:bg-purple-700 py-1 px-3 rounded-md text-white"
                    >
                        See Details
                    </button>
                    <button
                        onClick={handleDeleteClick}
                        className="text-sm bg-transparent py-1 px-2 rounded-md text-white"
                    >
                        <Trash2 size={22} className="text-red-600" />
                    </button>
                </div>
                <p className="text-gray-400 text-xs">{formatDate(dueDate)}</p>
            </div>
        </div>
    );
}