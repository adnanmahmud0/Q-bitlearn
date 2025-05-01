import { Line } from 'react-chartjs-2'; // Example chart component from chart.js
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Dashboard = () => {
    // Sample chart data
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

    return (
        <>
            <div className="relative pt-[70px] h-screen">
                <div>
                    <div className="flex items-start">
                        <nav id="sidebar" className="lg:min-w-[250px] w-max max-lg:min-w-8"></nav>

                        <section className="main-content w-full overflow-auto p-6 ">
                            <div className="overflow-x-auto ">
                                <div className="bg-gradient-to-r from-blue-700 to-blue-500 max-w-6xl mx-auto min-h-[475px] rounded-3xl p-6 flex flex-col justify-center font-[sans-serif] overflow-hidden">
                                    <div className="grid md:grid-cols-2 justify-center items-center max-md:text-center md:gap-8 gap-16 h-full">
                                        <div className="md:max-w-md mx-auto">
                                            <h2 className="text-white text-4xl md:text-5xl font-extrabold mb-6 md:!leading-[55px]">Welcome to Dashboard</h2>
                                        </div>
                                        <div className="md:text-right">
                                            <img src="https://readymadeui.com/bg-image.webp" alt="Premium Benefits" className="object-cover" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Overview Section */}
                            <div className="mt-8 bg-white p-6 rounded-xl shadow-lg">
                                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Overview</h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    {/* Stats Boxes */}
                                    <div className="bg-gradient-to-r from-green-400 to-blue-500 p-6 rounded-xl text-white">
                                        <h4 className="font-bold text-3xl">450</h4>
                                        <p>Total Users</p>
                                    </div>
                                    <div className="bg-gradient-to-r from-purple-400 to-pink-500 p-6 rounded-xl text-white">
                                        <h4 className="font-bold text-3xl">120</h4>
                                        <p>Total Teacher</p>
                                    </div>
                                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-6 rounded-xl text-white">
                                        <h4 className="font-bold text-3xl">$23,500</h4>
                                        <p>Total Revenue</p>
                                    </div>
                                </div>

                            </div>
                            {/* Chart Section */}
                            <div className="mt-8 p-6">
                                <h4 className="text-2xl font-semibold text-gray-800 mb-4">Revenue Trends</h4>
                                <div className="h-[300px]">
                                    <Line data={chartData} options={{ responsive: true }} />
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
