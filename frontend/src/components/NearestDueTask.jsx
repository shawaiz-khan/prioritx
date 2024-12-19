import PropTypes from "prop-types";

const NearestDueTask = ({ task }) => (
    <div className="text-center bg-white p-4 rounded-lg shadow-md my-6">
        <h3 className="text-xl font-semibold">Task with Nearest Due Date</h3>
        <p className="text-lg">
            {task ? `${task.name} (Due: ${task.dueDate})` : "No pending tasks"}
        </p>
    </div>
);

NearestDueTask.propTypes = {
    task: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        status: PropTypes.oneOf(['completed', 'pending', 'in-progress']).isRequired,
        dueDate: PropTypes.string.isRequired,
    }).isRequired,
};

export default NearestDueTask;
