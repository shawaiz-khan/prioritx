import { useState } from 'react';
import tasks from '../data/SampleTasks';

export default function Tasks() {
    const [isExpanded, setIsExpanded] = useState(false);

    const handlePreviewPane = () => {
        setIsExpanded((prev) => !prev);
    }

    return (
        <div className="min-h-screen bg-light-background flex overflow-hidden">
            <div className={`flex flex-col bg-light-container h-screen p-5 ${isExpanded ? "w-2/4" : "w-full"} flex-shrink-0`}>
                <div className={`items-center grid ${isExpanded ? 'grid-cols-2' : 'grid-cols-4'} gap-2`}>
                    {tasks.map((task) => {
                        const { id, title, description, dueDate } = task;
                        const shortDescription = description.length > 100 ? description.slice(0, 100) + '...' : description;
                        return (
                            <div key={id} className='bg-light-background border-2 rounded-md p-3 w-full flex flex-col gap-2'>
                                <h1 className='font-semibold'>{title}</h1>
                                <p className='font-normal'>{shortDescription}</p>
                                <div className='flex justify-between items-center'>
                                    <button onClick={handlePreviewPane} className='text-sm bg-purple-600 hover:bg-purple-700 py-1 px-2 rounded-md text-light-background'>Read More</button>
                                    <p className='text-gray-400 text-xs'>{dueDate}</p>
                                </div>
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