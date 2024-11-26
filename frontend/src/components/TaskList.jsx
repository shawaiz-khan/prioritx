/* eslint-disable react/prop-types */
import FilterDropdown from "../components/FilterDropdown";
import TaskItem from "../components/TaskItem";

export default function TaskList({
    filteredTasks,
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

            <div className={`grid ${isExpanded ? "grid-cols-2" : "grid-cols-4"} gap-4`}>
                {filteredTasks.map((task) => (
                    <TaskItem
                        key={task.id}
                        task={task}
                        handleCompleted={handleCompleted}
                        handlePreviewData={handlePreviewData}
                    />
                ))}
            </div>
        </div>
    );
}
