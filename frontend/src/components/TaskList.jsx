/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import FilterDropdown from "../components/FilterDropdown";
import TaskItem from "../components/TaskItem";

export default function TaskList({
    uniquePriorities,
    uniqueDueDates,
    selectedPriority,
    setSelectedPriority,
    selectedDueDate,
    setSelectedDueDate,
    handlePreviewData,
    handleCompleted,
    isExpanded,
}) {
    const [tasks, setTasks] = useState([]);
    const [filteredTasks, setFilteredTasks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const getTasks = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/tasks');
            if (!response.ok) {
                throw new Error('Failed to fetch tasks');
            }
            const data = await response.json();
            setTasks(data);
            setFilteredTasks(data);
            setIsLoading(false);
        } catch (err) {
            setError(err.message);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        let filtered = tasks;

        if (selectedPriority) {
            filtered = filtered.filter(task => task.priority === selectedPriority);
        }

        if (selectedDueDate) {
            filtered = filtered.filter(task => task.dueDate === selectedDueDate);
        }

        setFilteredTasks(filtered);
    }, [tasks, selectedPriority, selectedDueDate]);

    const handleDelete = (_id) => {
        setTasks(tasks.filter(task => task._id !== _id));
        setFilteredTasks(filteredTasks.filter(task => task._id !== _id));
    };

    useEffect(() => {
        getTasks();
    }, []);

    return (
        <div className={`flex flex-col bg-light-background h-screen p-5 ${isExpanded ? "w-2/4" : "w-full"} flex-shrink-0`}>
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

            {error && <div className="text-red-600">Error: {error}</div>}

            {isLoading ? (
                <div>Loading tasks...</div>
            ) : (
                <div className={`grid ${isExpanded ? "grid-cols-2" : "grid-cols-4"} gap-4`}>
                    {filteredTasks.length === 0 ? (
                        <div>No tasks found...</div>
                    ) : (
                        filteredTasks.map((task) => (
                            <TaskItem
                                key={task._id}
                                task={task}
                                handleCompleted={handleCompleted}
                                handlePreviewData={handlePreviewData}
                                handleDelete={handleDelete}
                            />
                        ))
                    )}
                </div>
            )}
        </div>
    );
}