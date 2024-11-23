import { X } from "lucide-react";

/* eslint-disable react/prop-types */
export default function PreviewPane({ task, closeTask }) {
    if (!task) {
        return <div>No task selected</div>;
    }

    const { title, description, priority, dueDate } = task;
    const newPriority = priority.charAt(0).toUpperCase() + priority.slice(1);

    return (
        <div className="w-full h-full">
            <button onClick={closeTask} className="mb-5"><X className="hover:text-purple-700" /></button>
            <article className="flex flex-col gap-5">
                <h2 className="text-3xl font-bold">{title}</h2>
                <p className="text-md">{description}</p>
                <div>
                    <p><span className="font-semibold">Priority:</span> {newPriority}</p>
                    <p><span className="font-semibold">Due Date:</span> {dueDate}</p>
                </div>
            </article>
        </div>
    );
}
