const AboutUs = () => {
    return (
        <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* About Us Section */}
                <div className="bg-gradient-to-r from-[#592ADF] to-[#F1257F] text-white rounded-3xl p-8">
                    <h2 className="text-4xl font-extrabold mb-4">About Us</h2>
                    <p className="text-lg leading-relaxed">
                        We are a dynamic team dedicated to providing quality education through innovative and engaging methods. Our mission is to create impactful learning experiences for students of all ages.
                    </p>
                </div>

                {/* Services Section */}
                <div className="mt-12">
                    <h3 className="text-3xl font-semibold text-[#592ADF]">Services</h3>
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center">
                            <h4 className="text-2xl font-bold text-[#F1257F] mb-3">Home</h4>
                            <p className="text-gray-600">Discover all the exciting resources Edurock has to offer from our homepage.</p>
                        </div>
                        <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center">
                            <h4 className="text-2xl font-bold text-[#F1257F] mb-3">All Classes</h4>
                            <p className="text-gray-600">Browse through all available classes across different subjects and levels.</p>
                        </div>
                        <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center">
                            <h4 className="text-2xl font-bold text-[#F1257F] mb-3">Teach on Edurock</h4>
                            <p className="text-gray-600">Join our team of expert educators and share your knowledge with eager learners.</p>
                        </div>
                    </div>
                </div>

                {/* Contact Us Section */}
                <div className="mt-12 bg-white rounded-3xl p-8 shadow-lg">
                    <h3 className="text-3xl font-semibold text-[#592ADF] mb-4">Contact Us</h3>
                    <p className="text-lg text-gray-600 mb-4">Get in touch with us for any queries or support!</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="font-semibold text-[#FFBB01]">Address</h4>
                            <p className="text-gray-600">123 Main Street, City, State, Country</p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-[#FFBB01]">Email</h4>
                            <p className="text-gray-600">contact@edurock.com</p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-[#FFBB01]">Phone</h4>
                            <p className="text-gray-600">+1 234 567 890</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
