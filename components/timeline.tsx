export default function Timeline() {
    const events = [
        { date: '2023-01-01', title: 'Event 1', description: 'Description 1' },
        { date: '2023-02-15', title: 'Event 2', description: 'Description 2' },
        // Add more events as needed
    ];

    return (
        <div className="max-w-2xl mx-auto">
            {events.map((event, index) => (
                <div className="flex mb-6" key={index}>
                    <div className="w-24 bg-blue-500 text-white py-2 px-4 rounded">
                        {event.date}
                    </div>
                    <div className="ml-4">
                        <h3 className="text-lg font-semibold mb-1">{event.title}</h3>
                        <p className="text-gray-600">{event.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};