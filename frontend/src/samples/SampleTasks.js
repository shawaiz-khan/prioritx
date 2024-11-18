const tasks = [
    {
        id: 1,
        title: 'Complete React project',
        description: 'Finish the React task manager project and test the features',
        completed: false,
        pending: true,
        dueDate: '2024-11-20',
        priority: 'high', // Could be 'low', 'medium', or 'high'
    },
    {
        id: 2,
        title: 'Buy groceries',
        description: 'Pick up milk, eggs, and bread from the supermarket',
        completed: true,
        pending: false,
        dueDate: '2024-11-18',
        priority: 'medium',
    },
    {
        id: 3,
        title: 'Read a book',
        description: 'Read a chapter from the book “JavaScript: The Good Parts”',
        completed: false,
        pending: true,
        dueDate: '2024-11-25',
        priority: 'low',
    },
    {
        id: 4,
        title: 'Respond to emails',
        description: 'Reply to work-related emails and check personal inbox',
        completed: false,
        pending: true,
        dueDate: '2024-11-19',
        priority: 'high',
    },
    {
        id: 5,
        title: 'Exercise',
        description: 'Go for a 30-minute jog or do a home workout',
        completed: true,
        pending: false,
        dueDate: '2024-11-17',
        priority: 'medium',
    },
];

export default tasks;
