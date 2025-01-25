import { useState, useEffect } from "react";

export default function useTaskFiltering(tasks = [], selectedPriority, selectedDueDate) {
    const [filteredTasks, setFilteredTasks] = useState([]);
    const [uniquePriorities, setUniquePriorities] = useState([]);
    const [uniqueDueDates, setUniqueDueDates] = useState([]);
    const [selectedTask, setSelectedTask] = useState(null);
    const [isExpanded, setIsExpanded] = useState(false);

    const getUniqueValues = (key) => [...new Set(tasks.map((task) => task[key]))];

    useEffect(() => {
        setUniquePriorities(getUniqueValues("priority"));
        setUniqueDueDates(getUniqueValues("dueDate"));
    }, [tasks]);

    useEffect(() => {
        let filtered = tasks;

        if (selectedPriority) {
            filtered = filtered.filter(task => task.priority === selectedPriority);
        }

        if (selectedDueDate) {
            filtered = filtered.filter(task => task.dueDate === selectedDueDate);
        }

        setFilteredTasks(filtered);
    }, [tasks]);

    const handlePreviewData = (task) => {
        setSelectedTask(task);
        setIsExpanded(true);
    };

    return {
        uniquePriorities,
        uniqueDueDates,
        filteredTasks,
        selectedTask,
        isExpanded,
        setIsExpanded,
        handlePreviewData,
    };
}