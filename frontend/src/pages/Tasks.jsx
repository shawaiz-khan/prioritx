import { useState } from 'react';
import tasks from '../data/SampleTasks';

export default function Tasks() {
    const [isExpanded, setIsExpanded] = useState(false);

    const handlePreviewPane = () => {
        setIsExpanded((prev) => !prev);
    }

    return (
        <div className="min-h-screen bg-light-background flex">
            <div className={`flex flex-col bg-light-container h-screen p-5 ${isExpanded ? "w-2/4" : "w-full"} flex-shrink-0`}>
                <h1>All Tasks</h1>
                <div className='flex gap-5 items-center flex-wrap'>
                    {tasks.map((task) => {
                        const { id, title, description, completed, pending, dueDate, priority } = task;
                        return (
                            <div key={id} className='bg-red-200 border my-4 p-3'>
                                <h1>{title}</h1>
                                <p>{description}</p>
                                <p>{completed}</p>
                                <p>{pending}</p>
                                <p>{dueDate}</p>
                                <p>{priority}</p>
                                <button onClick={handlePreviewPane}>Read More</button>
                            </div>
                        )
                    })}
                </div>
            </div>

            <aside className={`border-l p-5 ${isExpanded ? 'w-1/2' : 'w-0'} flex-shrink-0 overflow-hidden transition-all duration-300 ease-in-out`}>
                <h1>Preview Pane</h1>
            </aside>
        </div>
    )
}