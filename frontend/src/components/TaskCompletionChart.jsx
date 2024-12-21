
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const TaskCompletionChart = ({ completedTasks, totalTasks }) => {
    const data = {
        labels: [`Completed (${completedTasks})`,
        `Pending (${totalTasks - completedTasks})`
        ],
        datasets: [
            {
                data: [completedTasks, totalTasks - completedTasks],
                backgroundColor: ["rgba(237,191,243,0.82)", "rgba(193,32,239,0.6)"],
                borderColor: ["rgba(237,191,243,1)", "rgba(193,32,239,1)"],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { position: "top" },
        },
    };

    return (
        <div className="w-full h-80 sm:h-96 md:h-[400px] lg:h-[500px] mx-auto my-6 p-4 bg-white rounded-lg shadow-lg">
            <Pie data={data} options={options} />
        </div>
    );
};
import PropTypes from "prop-types";

TaskCompletionChart.propTypes = {
    completedTasks: PropTypes.number.isRequired,
    totalTasks: PropTypes.number.isRequired,
};

export default TaskCompletionChart;