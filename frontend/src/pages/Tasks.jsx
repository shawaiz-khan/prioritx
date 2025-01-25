import useTaskFiltering from "../hooks/useTaskFiltering";
import TaskList from "../components/TaskList";
import PreviewPane from "../components/PreviewPane";

export default function Tasks() {
    const {
        selectedPriority,
        setSelectedPriority,
        selectedDueDate,
        setSelectedDueDate,
        selectedTask,
        isExpanded,
        setIsExpanded,
        handlePreviewData,
    } = useTaskFiltering();

    return (
        <div className="min-h-screen flex overflow-hidden">
            <TaskList
                selectedPriority={selectedPriority}
                setSelectedPriority={setSelectedPriority}
                selectedDueDate={selectedDueDate}
                setSelectedDueDate={setSelectedDueDate}
                handlePreviewData={handlePreviewData}
                isExpanded={isExpanded}
            />
            <aside className={`border-l p-5 flex-shrink-0 overflow-auto transition-all ${isExpanded ? "w-1/2" : "hidden"}`}>
                <PreviewPane task={selectedTask} closeTask={() => setIsExpanded(false)} />
            </aside>
        </div>
    );
}