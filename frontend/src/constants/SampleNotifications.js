const formattedTime = new Date().toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
});

const notifications = [
    {
        id: 1,
        title: "New Message",
        description: "You have a new message from John.",
        time: formattedTime,
    },
    {
        id: 2,
        title: "Update Available",
        description: "Version 2.0.1 is now available. Click to update.",
        time: formattedTime,
    },
    {
        id: 3,
        title: "New Comment",
        description: "Alice commented on your post.",
        time: formattedTime,
    },
    {
        id: 4,
        title: "Reminder",
        description: "Don't forget your meeting at 3 PM.",
        time: formattedTime,
    },
    {
        id: 5,
        title: "Welcome!",
        description: "Thanks for signing up! Explore your dashboard.",
        time: formattedTime,
    },
];

export default notifications;