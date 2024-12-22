import PropTypes from "prop-types";

const NearestDueTask = ({ task }) => (
    <div className="text-center bg-white p-4 rounded-lg shadow-md my-6">
        <h3 className="text-xl font-semibold">Nearest Due Date</h3>
        <p className="text-lg">
            {task ? `${task.title} (Due: ${task.formattedDueDate || "N/A"})` : "No pending tasks"}
        </p>
    </div>
);

NearestDueTask.propTypes = {
    task: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
        dueDate: PropTypes.string.isRequired,
        formattedDueDate: PropTypes.string,
    }),
};

export default NearestDueTask;