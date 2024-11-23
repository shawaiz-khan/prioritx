/* eslint-disable react/prop-types */
export default function PreviewPane({ task }) {
    if (!task) {
        return <div>No task selected</div>;
    }

    return (
        <div>
            <h2 className="text-xl font-semibold">{task.title}</h2>
            <p>{task.description}</p>
            <p>Due Date: {task.dueDate}</p>
            <p>Priority: {task.priority}</p>
        </div>
    );
}
