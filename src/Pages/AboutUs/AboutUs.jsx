const AboutUs = () => {
    return (
        <div className="min-h-screen px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <section class="py-24 relative xl:mr-0 lg:mr-5 mr-0">
                    <div class="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                        <div class="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
                            <div class="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                                <div class="w-full flex-col justify-center items-start gap-8 flex">
                                    <div class="flex-col justify-start lg:items-start items-center gap-4 flex">
                                        <h6 class="text-gray-400 text-base font-normal leading-relaxed">About Us</h6>
                                        <div class="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                                            <h2
                                                class="text-indigo-700 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                                                The Tale of Our Achievement Story</h2>
                                            <p
                                                class="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                                                Our achievement story is a testament to teamwork and perseverance. Together, we've
                                                overcome challenges, celebrated victories, and created a narrative of progress and
                                                success.</p>
                                        </div>
                                    </div>
                                    <div class="w-full flex-col justify-center items-start gap-6 flex">
                                        <div class="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                                            <div
                                                class="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                                <h4 class="text-gray-900 text-2xl font-bold font-manrope leading-9">33+ Years</h4>
                                                <p class="text-gray-500 text-base font-normal leading-relaxed">Influencing Digital
                                                    Landscapes Together</p>
                                            </div>
                                            <div
                                                class="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                                <h4 class="text-gray-900 text-2xl font-bold font-manrope leading-9">125+ Projects
                                                </h4>
                                                <p class="text-gray-500 text-base font-normal leading-relaxed">Excellence Achieved
                                                    Through Success</p>
                                            </div>
                                        </div>
                                        <div class="w-full h-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                                            <div
                                                class="w-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                                <h4 class="text-gray-900 text-2xl font-bold font-manrope leading-9">26+ Awards</h4>
                                                <p class="text-gray-500 text-base font-normal leading-relaxed">Our Dedication to
                                                    Innovation Wins Understanding</p>
                                            </div>
                                            <div
                                                class="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                                <h4 class="text-gray-900 text-2xl font-bold font-manrope leading-9">99% Happy
                                                    Clients</h4>
                                                <p class="text-gray-500 text-base font-normal leading-relaxed">Mirrors our Focus on
                                                    Client Satisfaction.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full lg:justify-start justify-center items-start flex">
                                <div
                                    class="sm:w-[564px] w-full sm:h-[646px] h-full sm:bg-gray-100 rounded-3xl sm:border border-gray-200 relative">
                                    <img class="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover"
                                        src="https://pagedone.io/asset/uploads/1717742431.png" alt="about Us image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


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
                        <div className="bg-white/50 shadow-lg rounded-xl p-6 flex flex-col items-center text-center">
                            <h4 className="text-2xl font-bold text-[#F1257F] mb-3">Home</h4>
                            <p className="text-black">Discover all the exciting resources Edurock has to offer from our homepage.</p>
                        </div>
                        <div className="bg-white/50 shadow-lg rounded-xl p-6 flex flex-col items-center text-center">
                            <h4 className="text-2xl font-bold text-[#F1257F] mb-3">All Classes</h4>
                            <p className="text-black">Browse through all available classes across different subjects and levels.</p>
                        </div>
                        <div className="bg-white/50 shadow-lg rounded-xl p-6 flex flex-col items-center text-center">
                            <h4 className="text-2xl font-bold text-[#F1257F] mb-3">Teach on Edurock</h4>
                            <p className="text-black">Join our team of expert educators and share your knowledge with eager learners.</p>
                        </div>
                    </div>
                </div>

                {/* Contact Us Section */}
                <div className="mt-12 bg-white/50 rounded-3xl p-8 shadow-lg">
                    <h3 className="text-3xl font-semibold text-[#592ADF] mb-4">Contact Us</h3>
                    <p className="text-lg text-black mb-4">Get in touch with us for any queries or support!</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="font-semibold text-[#FFBB01]">Address</h4>
                            <p className="text-black">123 Main Street, City, State, Country</p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-[#FFBB01]">Email</h4>
                            <p className="text-black">contact@edurock.com</p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-[#FFBB01]">Phone</h4>
                            <p className="text-black">+1 234 567 890</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
