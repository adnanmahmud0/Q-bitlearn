
const Dashboard = () => {
    return (
        <>
            <div className="relative pt-[70px] h-screen">
                <div>
                    <div className="flex items-start">
                        <nav id="sidebar" className="lg:min-w-[250px] w-max  max-lg:min-w-8">
                        </nav>

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
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;