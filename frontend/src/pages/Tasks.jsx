import { useState } from "react";
import FilterDropdown from "../components/FilterDropdown";
import TaskItem from "../components/TaskItem";
import tasks from '../data/SampleTasks';
import PreviewPane from "../components/PreviewPane";

export default function Tasks() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [taskList, setTaskList] = useState(tasks);
    const [selectedPriority, setSelectedPriority] = useState('');
    const [selectedDueDate, setSelectedDueDate] = useState('');

    const handlePreviewPane = () => {
        setIsExpanded((prev) => !prev);
    };

    const handleCompleted = (id) => {
        setTaskList((prevTasks) =>
            prevTasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const uniquePriorities = [...new Set(tasks.map((task) => task.priority))];
    const uniqueDueDates = [...new Set(tasks.map((task) => task.dueDate))];

    const filteredTasks = taskList.filter((task) => {
        const matchesPriority = selectedPriority ? task.priority === selectedPriority : true;
        const matchesDueDate = selectedDueDate ? task.dueDate === selectedDueDate : true;
        return matchesPriority && matchesDueDate;
    });

    return (
        <div className="min-h-screen flex overflow-hidden">
            <div className={`flex flex-col bg-light-background h-screen p-5 ${isExpanded ? 'w-2/4' : 'w-full'} flex-shrink-0`}>
                <div className="flex justify-between items-center gap-4 mb-5 w-full">
                    <FilterDropdown
                        label="Filter by Priority"
                        options={uniquePriorities.map((priority) => ({
                            value: priority,
                            label: priority.charAt(0).toUpperCase() + priority.slice(1),
                        }))}
                        value={selectedPriority}
                        onChange={(e) => setSelectedPriority(e.target.value)}
                    />
                    <FilterDropdown
                        label="Filter by Due Date"
                        options={uniqueDueDates.map((date) => ({
                            value: date,
                            label: date,
                        }))}
                        value={selectedDueDate}
                        onChange={(e) => setSelectedDueDate(e.target.value)}
                    />
                </div>

                <div className={`grid ${isExpanded ? 'grid-cols-2' : 'grid-cols-4'} gap-4`}>
                    {filteredTasks.map((task) => (
                        <TaskItem
                            key={task.id}
                            task={task}
                            handleCompleted={handleCompleted}
                            handlePreviewPane={handlePreviewPane}
                        />
                    ))}
                </div>
            </div>

            <aside className={`border-l p-5 flex-shrink-0 overflow-auto`}>
                <PreviewPane />
            </aside>

        </div>
    );
}