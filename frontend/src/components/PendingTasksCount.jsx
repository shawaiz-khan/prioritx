import PropTypes from 'prop-types';

const PendingTasksCount = ({ count }) => (
    <div className="text-center bg-white p-4 rounded-lg shadow-md my-6">
        <h3 className="text-xl font-semibold">Pending Tasks</h3>
        <p className="text-3xl font-bold">{count}</p>
    </div>
);

PendingTasksCount.propTypes = {
    count: PropTypes.number.isRequired,

};
export default PendingTasksCount;