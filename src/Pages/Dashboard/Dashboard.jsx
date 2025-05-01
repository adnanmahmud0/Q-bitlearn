import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Dashboard = () => {
    // Revenue Chart Data
    const chartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [
            {
                label: 'Revenue',
                data: [65, 59, 80, 81, 56],
                fill: false,
                borderColor: 'rgba(75, 192, 192, 1)',
                tension: 0.1,
            },
        ],
    };

    // Active Users Chart
    const activeUsersData = {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [
            {
                label: 'Active Users',
                data: [150, 200, 180, 220],
                fill: false,
                borderColor: 'rgba(153, 102, 255, 1)',
                tension: 0.3,
            },
        ],
    };

    // Dummy recent activities
    const activities = [
        { time: '10:30 AM', action: 'User John registered' },
        { time: '11:15 AM', action: 'Teacher Lisa submitted a report' },
        { time: '01:45 PM', action: 'Payment received from Alice' },
        { time: '03:00 PM', action: 'Admin updated system settings' },
    ];

    return (
        <div className="relative pt-[70px] h-full pb-20">
            <div>
                <div className="flex items-start">
                    <nav id="sidebar" className="lg:min-w-[250px] w-max max-lg:min-w-8"></nav>

                    <section className="main-content w-full overflow-auto p-6">
                        {/* Welcome Banner */}
                        <div className="overflow-x-auto">
                            <div className="bg-gradient-to-r from-blue-700 to-blue-500 max-w-6xl mx-auto min-h-[475px] rounded-3xl p-6 flex flex-col justify-center font-[sans-serif] overflow-hidden">
                                <div className="grid md:grid-cols-2 justify-center items-center max-md:text-center md:gap-8 gap-16 h-full">
                                    <div className="md:max-w-md mx-auto">
                                        <h2 className="text-white text-4xl md:text-5xl font-extrabold mb-6 md:!leading-[55px]">
                                            Welcome to Dashboard
                                        </h2>
                                    </div>
                                    <div className="md:text-right">
                                        <img
                                            src="https://readymadeui.com/bg-image.webp"
                                            alt="Premium Benefits"
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Overview Cards */}
                        <div className="mt-8 bg-white p-6 rounded-xl shadow-lg">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Overview</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="bg-gradient-to-r from-green-400 to-blue-500 p-6 rounded-xl text-white">
                                    <h4 className="font-bold text-3xl">450</h4>
                                    <p>Total Users</p>
                                </div>
                                <div className="bg-gradient-to-r from-purple-400 to-pink-500 p-6 rounded-xl text-white">
                                    <h4 className="font-bold text-3xl">120</h4>
                                    <p>Total Teachers</p>
                                </div>
                                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-6 rounded-xl text-white">
                                    <h4 className="font-bold text-3xl">$23,500</h4>
                                    <p>Total Revenue</p>
                                </div>
                            </div>
                        </div>

                        {/* Charts Section */}
                        <div className="mt-10 grid md:grid-cols-2 gap-8">
                            {/* Revenue Chart */}
                            <div className="bg-white p-6 rounded-xl shadow-lg">
                                <h4 className="text-xl font-semibold text-gray-800 mb-4">Revenue Trends</h4>
                                <div className="h-[300px]">
                                    <Line data={chartData} options={{ responsive: true }} />
                                </div>
                            </div>

                            {/* Active Users Chart */}
                            <div className="bg-white p-6 rounded-xl shadow-lg">
                                <h4 className="text-xl font-semibold text-gray-800 mb-4">Weekly Active Users</h4>
                                <div className="h-[300px]">
                                    <Line data={activeUsersData} options={{ responsive: true }} />
                                </div>
                            </div>
                        </div>

                        {/* Recent Activities */}
                        <div className="mt-10 bg-white p-6 rounded-xl shadow-lg">
                            <h4 className="text-xl font-semibold text-gray-800 mb-4">Recent Activities</h4>
                            <ul className="space-y-4">
                                {activities.map((activity, index) => (
                                    <li key={index} className="flex justify-between text-gray-700 border-b pb-2">
                                        <span>{activity.action}</span>
                                        <span className="text-sm text-gray-500">{activity.time}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
