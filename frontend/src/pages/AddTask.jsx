export default function AddTask() {
    return (
        <main className="p-5 flex justify-center items-center h-full bg-light-background">
            <form className="bg-light-container flex flex-col w-1/2 p-5 rounded-md gap-4">
                <div>
                    <h1 className="text-3xl font-semibold mb-2">Add New Task</h1>
                    <div className="border-t-2 border-purple-600 mb-4"></div>
                </div>
                <label htmlFor="title" className="flex flex-col gap-2">
                    <span className="text-xl font-medium">Task Title</span>
                    <input
                        id="title"
                        name="title"
                        type="text"
                        className="px-3 py-2 focus:outline-purple-600 rounded-sm border border-gray-300"
                        placeholder="Enter task title"
                        required
                    />
                </label>
                <label htmlFor="description" className="flex flex-col gap-2">
                    <span className="text-xl font-medium">Description</span>
                    <textarea
                        id="description"
                        name="description"
                        className="px-3 py-2 focus:outline-purple-600 rounded-sm border border-gray-300 h-40 resize-none"
                        placeholder="Enter task description"
                        required
                    ></textarea>
                </label>
                <div className="flex justify-between gap-4">
                    <label htmlFor="due-date" className="flex flex-col gap-2 w-full sm:w-1/2">
                        <span className="text-xl font-medium">Due Date</span>
                        <input
                            id="due-date"
                            name="dueDate"
                            type="date"
                            className="px-3 py-2 focus:outline-purple-600 rounded-sm border border-gray-300 h-10"
                            required
                        />
                    </label>
                    <label htmlFor="priority" className="flex flex-col gap-2 w-full sm:w-1/2">
                        <span className="text-xl font-medium">Priority</span>
                        <select
                            id="priority"
                            name="priority"
                            className="px-3 py-2 focus:outline-purple-600 rounded-sm border border-gray-300 h-10"
                            required
                        >
                            <option value="high">High</option>
                            <option value="medium">Medium</option>
                            <option value="low">Low</option>
                        </select>
                    </label>
                </div>
                <button
                    type="submit"
                    className="mt-4 px-6 py-2 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700"
                >
                    Submit
                </button>
            </form>
        </main>
    );
}