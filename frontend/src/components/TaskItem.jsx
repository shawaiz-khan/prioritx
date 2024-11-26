/* eslint-disable react/prop-types */
import { Check } from "lucide-react";

export default function TaskItem({ task, handleCompleted = null, handlePreviewData }) {
    const { id, title, description, dueDate, completed } = task;
    const shortDescription = description.length > 50 ? description.slice(0, 50) + '...' : description;

    return (
        <div className="bg-light-background border-2 rounded-md p-4 flex flex-col gap-2">
            <div className="flex justify-between items-center">
                <h1 className="font-semibold">{title}</h1>
                <button
                    className={`w-6 h-6 flex items-center justify-center border rounded-full ${completed ? 'bg-purple-600 text-white' : 'bg-white text-purple-600'}`}
                    onClick={() => handleCompleted(id)}
                >
                    <Check size={15} />
                </button>
            </div>
            <p className="font-normal">{shortDescription}</p>
            <div className="flex justify-between items-center">
                <button
                    onClick={() => handlePreviewData(task)}
                    className="text-sm bg-purple-600 hover:bg-purple-700 py-1 px-3 rounded-md text-white"
                >
                    See Details
                </button>
                <p className="text-gray-400 text-xs">{dueDate}</p>
            </div>
        </div>
    );
}