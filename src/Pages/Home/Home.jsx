import { Helmet } from 'react-helmet-async';
import slide1 from "../../assets/8.jpg";
import slide2 from "../../assets/20.jpg";
import slide3 from "../../assets/21.jpg";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaAngleRight } from 'react-icons/fa';
import { useRef } from 'react';
import 'swiper/css';
import { useQuery } from '@tanstack/react-query';
import { FaAngleLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import { FaUserAlt, FaShoppingCart, FaSmile, FaServer } from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";
import { PiChalkboardTeacherFill } from "react-icons/pi";
import instructor from "../../assets/3.jpg";
import { FaCalendar, FaUser } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';  // React icon for search
const Home = () => {
    const swiperRef = useRef(null);
    const axiosPublic = useAxiosPublic();
    const goToPrevSlide = () => {
        swiperRef.current.swiper.slidePrev();
    };

    const goToNextSlide = () => {
        swiperRef.current.swiper.slideNext();
    };

    // Inside the Home component, declare a new reference for the testimonial Swiper
    const swiperRefRatings = useRef(null);

    const goToPrevSlideRating = () => {
        swiperRefRatings.current.swiper.slidePrev();
    };

    const goToNextSlideRating = () => {
        swiperRefRatings.current.swiper.slideNext();
    };

    const { data: enrollData, isLoading } = useQuery({
        queryKey: ["pay"],
        queryFn: async () => {
            const { data } = await axiosPublic.get(`/mostEnrollClasses`);
            return data;
        },
    });



    const { data: rateData } = useQuery({
        queryKey: ["rate"],
        queryFn: async () => {
            const { data } = await axiosPublic.get(`/rating`);
            return data;
        },
    });

    const { data: noUser } = useQuery({
        queryKey: ["numberUsers"],
        queryFn: async () => {
            const { data } = await axiosPublic.get(`/numberUsers`);
            return data;
        }
    })

    const { data: noClass } = useQuery({
        queryKey: ["numberClasses"],
        queryFn: async () => {
            const { data } = await axiosPublic.get(`/numberClasses`);
            return data;
        }
    })

    const { data: noEnrol } = useQuery({
        queryKey: ["numberEnroll"],
        queryFn: async () => {
            const { data } = await axiosPublic.get(`/numberEnroll`);
            return data;
        }
    })

    const { data: noTeacher } = useQuery({
        queryKey: ["numberTeacher"],
        queryFn: async () => {
            const { data } = await axiosPublic.get(`/numberTeacher`);
            return data;
        }
    })

    if (isLoading)
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="relative w-16 h-16">
                    <div className="absolute top-0 left-0 w-full h-full border-4 border-t-[#592ADF] border-r-[#F22480] border-b-[#FFBB01] border-l-transparent rounded-full animate-spin"></div>
                </div>
            </div>
        );

    return (
        <>
            <Helmet>
                <title>EduManage | Home</title>
            </Helmet>
            <div className="relative">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop
                    navigation={false}  // Disable default navigation
                    className="w-full h-[600px]"
                    ref={swiperRef}
                >
                    {/* First Slider */}
                    <SwiperSlide>
                        <div
                            className="flex flex-col items-center justify-center h-[700px] bg-cover bg-center relative"
                            style={{ backgroundImage: `url(${slide1})` }}
                        >
                            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                            <div className="z-10 max-w-6xl max-md:max-w-md mx-auto">
                                <div className="grid md:grid-cols-2 items-center md:gap-8 gap-6">
                                    <div className="max-md:order-1 max-md:text-center">
                                        <p className="text-sm font-bold text-[#F2277E] mb-2"><span className="rotate-90 inline-block mr-2 ">|</span> CONNECT WITH TUTORS</p>
                                        <h2 className="text-white md:text-5xl text-3xl font-extrabold mb-4 md:!leading-[55px]">Find the best tutors and classes</h2>
                                        <p className="mt-4 text-base text-white leading-relaxed">Discover the perfect tutor to match your learning style. Explore top-rated tutors and courses on EduManage today!</p>
                                        <div className="mt-8 space-x-4">
                                            <button type="button" className="bg-[#FFBB01] hover:bg-transparent hover:bg-[#F2277E] border-2 transition-all text-white font-semibold tracking-wide text-sm rounded-full px-6 py-2.5">Get started</button>

                                        </div>
                                    </div>
                                    <div className="hidden md:block">
                                        <img src={slide1} className="rounded-md z-50 relative" alt="EduManage" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* Second Slider */}
                    <SwiperSlide>
                        <div
                            className="flex flex-col items-center justify-center h-[700px] bg-cover bg-center relative"
                            style={{ backgroundImage: `url(${slide2})` }}
                        >
                            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                            <div className="z-10 max-w-6xl max-md:max-w-md mx-auto">
                                <div className="grid md:grid-cols-2 items-center md:gap-8 gap-6">
                                    <div className="max-md:order-1 max-md:text-center">
                                        <p className="text-sm font-bold text-[#F2277E] mb-2"><span className="rotate-90 inline-block mr-2 ">|</span> CONNECT WITH TUTORS</p>
                                        <h2 className="text-white md:text-5xl text-3xl font-extrabold mb-4 md:!leading-[55px]">Find the best tutors and classes</h2>
                                        <p className="mt-4 text-base text-white leading-relaxed">Discover the perfect tutor to match your learning style. Explore top-rated tutors and courses on EduManage today!</p>
                                        <div className="mt-8 space-x-4">
                                            <button type="button" className="bg-[#FFBB01] hover:bg-transparent hover:bg-[#F2277E] border-2 transition-all text-white font-semibold tracking-wide text-sm rounded-full px-6 py-2.5">Explore Classes</button>

                                        </div>
                                    </div>
                                    <div className="hidden md:block">
                                        <img src={slide2} className="rounded-md z-50 relative" alt="EduManage Tutors" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* Third Slider */}
                    <SwiperSlide>
                        <div
                            className="flex flex-col items-center justify-center h-[700px] bg-cover bg-center relative"
                            style={{ backgroundImage: `url(${slide3})` }}
                        >
                            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                            <div className="z-10 max-w-6xl max-md:max-w-md mx-auto">
                                <div className="grid md:grid-cols-2 items-center md:gap-8 gap-6">
                                    <div className="max-md:order-1 max-md:text-center">
                                        <p className="text-sm font-bold mb-2 text-[#F2277E]"><span className="rotate-90 inline-block mr-2 ">|</span> BUILD YOUR SKILLS</p>
                                        <h2 className="text-white md:text-5xl text-3xl font-extrabold mb-4 md:!leading-[55px]">Learn, grow, and achieve your goals</h2>
                                        <p className="mt-4 text-base text-white leading-relaxed">Empower yourself with new skills and knowledge. With EduManage, your journey to personal and professional growth is just a click away.</p>
                                        <div className="mt-8 space-x-4">
                                            <button type="button" className="bg-[#FFBB01] hover:bg-transparent hover:bg-[#F2277E] border-2 transition-all text-white font-semibold tracking-wide text-sm rounded-full px-6 py-2.5">Join as a Teacher</button>

                                        </div>
                                    </div>
                                    <div className="hidden md:block">
                                        <img src={slide3} className="rounded-md z-50 relative" alt="EduManage Skills" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>

                {/* Navigation Arrows */}
                <div className="flex space-x-10 items-end justify-end absolute bottom-10 md:right-80 right-1/3 z-10">
                    <div
                        className="bg-[#592adf] w-10 h-10 grid items-center justify-center rounded-full shrink-0 cursor-pointer"
                        onClick={goToPrevSlide}
                    >
                        <FaAngleLeft className="w-3 fill-white inline" /> {/* change slide */}
                    </div>
                    <div
                        className="bg-[#ffbb01] w-10 h-10 grid items-center justify-center rounded-full shrink-0 cursor-pointer"
                        onClick={goToNextSlide}
                    >
                        <FaAngleRight className="w-3 fill-white inline" /> {/* change slide */}
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto p-10 rounded-xl bg-white mt-10 shadow-lg my-20">
                <div className="grid grid-cols-2 md:grid-cols-6 gap-4 items-center">
                    <img
                        src="https://edurock-blond.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbrand_1.c7b21ebe.png&w=256&q=75"
                        className="w-28 mx-auto transform transition-transform duration-300 hover:scale-110"
                        alt="hexa"
                    />
                    <img
                        src="https://edurock-blond.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbrand_2.546077c1.png&w=256&q=75"
                        className="w-28 mx-auto transform transition-transform duration-300 hover:scale-110"
                        alt="circle"
                    />
                    <img
                        src="https://edurock-blond.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbrand_3.508e8a28.png&w=256&q=75"
                        className="w-28 mx-auto transform transition-transform duration-300 hover:scale-110"
                        alt="treva"
                    />
                    <img
                        src="https://edurock-blond.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbrand_4.335ce9ee.png&w=256&q=75"
                        className="w-28 mx-auto transform transition-transform duration-300 hover:scale-110"
                        alt="atlas"
                    />
                    <img
                        src="https://edurock-blond.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbrand_5.6d821bbb.png&w=96&q=75"
                        className="w-28 mx-auto transform transition-transform duration-300 hover:scale-110"
                        alt="josef"
                    />
                    <img
                        src="https://edurock-blond.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo_1.a929018c.png&w=256&q=75"
                        className="w-28 mx-auto transform transition-transform duration-300 hover:scale-110"
                        alt="edurack"
                    />
                </div>

            </div>
            <div className='my-20'>
                <div className='flex justify-center'>
                    <span className='text-xs rounded-full py-1 px-3 bg-[#FFBB01] hover:bg-[#FFBB01]'>Classes</span>
                </div>
                <h2 className="sm:text-4xl text-2xl font-bold text-center mb-6 mt-3 text-[#592ADF]">Most Popular Classes</h2>
                <p className=" text-sm text-gray-500 text-center mb-10">Embark on unforgettable journeys. Book your dream vacation today!</p>
                <Swiper
                    spaceBetween={20}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        1024: {
                            slidesPerView: 4,
                        },
                    }}
                >
                    {enrollData?.map((classItem, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-[#F3F4F6] rounded p-4 cursor-pointer hover:-translate-y-1 transition-all relative">
                                <div className="w-full">
                                    <img src={classItem?.image} alt={classItem?.name} className="w-full rounded-md object-cover object-top aspect-[230/150]" />
                                </div>
                                <div className="absolute right-2 top-2">
                                    <p className="bg-[#592adf] text-white text-xs rounded-full p-2">{classItem?.totalEnrollment} Enrolled</p>
                                </div>
                                <div className="p-2 flex-1 flex flex-col">
                                    <h5 className="text-sm sm:text-base font-bold text-gray-800 truncate">{classItem?.title}</h5>
                                    <div className="flex-1">
                                        <p className="mt-1 text-gray-500 truncate">{classItem?.description}</p>
                                        <div className="flex justify-between items-center">
                                            <div className="flex flex-wrap justify-between gap-2 mt-2">
                                                <div className="flex gap-2">
                                                    <h6 className="text-sm sm:text-base font-bold text-[#f2277e]">৳{classItem?.price}</h6>
                                                </div>
                                            </div>
                                            <p className="mt-1 text-xs truncate"><span className="font-bold">Instructor:</span> {classItem?.teacher?.name}</p>
                                        </div>
                                    </div>
                                    <Link to={`/Class-Details/${classItem?._id}`} className="flex items-center gap-2 mt-4">
                                        <button type="button" className="text-sm px-2 min-h-[36px] w-full bg-[#ffbb01] hover:bg-[#ffbb01] text-white tracking-wide ml-auto outline-none border-none rounded">
                                            Enroll
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>


            <div className="max-w-6xl max-md:max-w-md mx-auto ">
                <div className="grid md:grid-cols-2 items-center md:gap-10 gap-6 m-5">
                    <div className="max-md:order-1 max-md:text-center">
                        <p className="mt-4 text-sm font-bold text-blue-600">
                            <span className="rotate-90 inline-block mr-2 mb-2">|</span> ALL IN ONE MEETING SCHEDULER
                        </p>
                        <h2 className="text-gray-800 md:text-5xl text-3xl font-extrabold mb-4 md:!leading-[55px]">
                            Unlock Your Potential with Seamless Scheduling
                        </h2>
                        <p className="mt-5 text-base text-gray-500 leading-relaxed">
                            Every great achievement starts with organized plans. Maximize your productivity and stay ahead of your academic goals. With our intuitive scheduler, you'll have more time to focus on what truly matters—your success.
                        </p>
                    </div>

                    <div className="md:h-[400px] p-2">
                        <img src="https://readymadeui.com/management-img.webp" className="w-full h-full object-contain rounded-lg" alt="Student Productivity" />
                    </div>
                </div>
            </div>



            <div className="bg-[#592ADF] px-6 py-16 my-20">
                <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-x-6 gap-y-10 max-w-6xl mx-auto">
                    <div className="flex items-center gap-6">
                        <FaUserAlt className="text-[#FFBB01] w-14 h-14 shrink-0" />
                        <div>
                            <h3 className="text-white text-4xl font-bold">{noUser?.count}+</h3>
                            <p className="text-base text-gray-300 mt-2">Total User</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <SiGoogleclassroom className="text-[#FFBB01] w-14 h-14 shrink-0" />
                        <div>
                            <h3 className="text-white text-4xl font-bold">{noClass?.count}+</h3>
                            <p className="text-base text-gray-300 mt-2">Total Classes</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <FaSmile className="text-[#FFBB01] w-14 h-14 shrink-0" />
                        <div>
                            <h3 className="text-white text-4xl font-bold">{noEnrol?.count}+</h3>
                            <p className="text-base text-gray-300 mt-2">Total enrollment</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <PiChalkboardTeacherFill className="text-[#FFBB01] w-14 h-14 shrink-0" />
                        <div>
                            <h3 className="text-white text-4xl font-bold">{noTeacher?.count}+</h3>
                            <p className="text-base text-gray-300 mt-2">Total Instructor</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid md:grid-cols-2 items-center md:gap-8 gap-6 max-w-7xl mx-auto my-20">
                <div className="max-md:order-1 max-md:text-center m-5">
                    <span className='text-xs rounded-full py-1 px-3 bg-[#FFBB01] hover:bg-[#FFBB01]'>Instructor</span>
                    <h2 className="md:text-4xl text-3xl md:leading-10 font-extrabold text-[#592ADF] mb-4">
                        Become an Instructor
                    </h2>
                    <p className="mt-4 text-base text-gray-600 leading-relaxed">
                        Share your knowledge and inspire students across the globe. Whether you're an experienced educator or a skilled professional,
                        Q-bitlearn provides the perfect platform to connect with eager learners and make a meaningful impact.
                    </p>
                    <div className="mt-8 flex max-sm:flex-col sm:space-x-4 max-sm:space-y-6">
                        <Link
                            to="/Teach-On-Q-bitlearn"
                            className="px-6 py-3 text-base font-semibold text-[#FFBB01] border border-[#FFBB01] rounded-full hover:text-white hover:bg-[#FFBB01] transition-all duration-300 transform hover:scale-105 focus:ring-2 focus:ring-[#f032e6] focus:outline-none focus:ring-opacity-50"
                        >
                            Start Teaching Today
                        </Link>
                    </div>
                </div>
                <div className="md:h-[450px] m-5">
                    <img
                        src={instructor}
                        className="w-full h-full object-cover rounded-lg shadow-xl"
                        alt="Instructor Teaching"
                    />
                </div>
            </div>
            <div className="px-8 my-20">

                <div className="max-w-7xl mx-auto">
                    <span className='text-xs rounded-full py-1 px-3 bg-[#FFBB01] hover:bg-[#FFBB01]'>Ratting</span>
                    <div className="grid lg:grid-cols-3 gap-6 max-lg:max-w-2xl mt-2">
                        <div className="col-span-2">
                            <h2 className="text-[#592adf] sm:text-4xl text-2xl font-bold">
                                What our happy clients say
                            </h2>
                            <p className="text-sm text-gray-500 mt-4 leading-relaxed">
                                Hear from our learners and instructors who have transformed their lives with Q-bitlearn.
                                Explore their inspiring stories and see how our platform empowers individuals to achieve their goals.
                            </p>
                        </div>

                        <div className="flex space-x-4 items-end justify-end">
                            <div
                                className="bg-[#592adf] w-10 h-10 grid items-center justify-center rounded-full shrink-0 cursor-pointer"
                                onClick={goToPrevSlideRating}
                            >
                                <FaAngleLeft className="w-3 fill-white inline" />
                            </div>
                            <div
                                className="bg-[#ffbb01] w-10 h-10 grid items-center justify-center rounded-full shrink-0 cursor-pointer"
                                onClick={goToNextSlideRating}
                            >
                                <FaAngleRight className="w-3 fill-white inline" />
                            </div>
                        </div>
                    </div>

                    <div className="mt-12">
                        <Swiper
                            spaceBetween={20}
                            breakpoints={{
                                640: { slidesPerView: 1 },
                                768: { slidesPerView: 3 },
                                1024: { slidesPerView: 3 },
                            }}
                            ref={swiperRefRatings}
                        >
                            {rateData?.map((testimonial, index) => (
                                <SwiperSlide key={index} className="pl-10">
                                    <div className="max-w-[360px] h-auto py-5 pl-14 pr-4 bg-white border-2 rounded-3xl relative">
                                        <img
                                            src={testimonial?.photoURL}
                                            className="w-20 h-20 rounded-full absolute -left-10 top-0 bottom-0 my-auto border-2 border-gray-300"
                                            alt={`${testimonial?.displayName}'s profile`}
                                        />
                                        <div>
                                            <h6 className="text-black text-[15px] font-bold">
                                                {testimonial?.displayName}
                                            </h6>
                                            <p className="mt-1 text-xs text-gray-500">
                                                {testimonial?.titlename}
                                            </p>
                                        </div>
                                        <div className="mt-4">
                                            <p className="text-gray-500 text-sm leading-relaxed">
                                                {testimonial?.description}
                                            </p>
                                        </div>
                                        <div className="flex space-x-1 mt-4">
                                            {[...Array(5)].map((_, i) => (
                                                <FaStar
                                                    key={i}
                                                    className={`w-4 ${i < testimonial?.rating
                                                        ? 'fill-[#592adf]'
                                                        : 'fill-[#CED5D8]'
                                                        }`}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
            <div className="bg-white p-4 my-20">
                <div className="max-w-7xl mx-auto">
                    <div className='flex justify-center '>
                        <div className='text-xs rounded-full py-1 px-3 bg-[#FFBB01] hover:bg-[#FFBB01] '>News & Blogs</div>
                    </div>
                    <div className="text-center max-w-xl mx-auto">

                        <h2 className="text-3xl font-extrabold text-[#592ADF] inline-block">LATEST BLOGS</h2>
                        <p className="text-gray-600 text-sm mt-6">
                            Explore our latest blog posts to stay updated on the newest trends, tips, and insights in education, technology, and self-improvement.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12 max-lg:max-w-3xl max-md:max-w-md mx-auto">
                        {/* Blog Post 1 */}
                        <div className="bg-white cursor-pointer rounded-lg overflow-hidden group relative before:absolute before:inset-0 before:z-10 before:bg-black before:opacity-60">
                            <img
                                src="https://readymadeui.com/Imagination.webp"
                                alt="Blog Post 1"
                                className="w-full h-96 object-cover group-hover:scale-110 transition-all duration-300"
                            />
                            <div className="p-6 absolute bottom-0 left-0 right-0 z-20">
                                <span className="text-sm block mb-2 text-yellow-400 font-semibold">
                                    <FaCalendar className="inline-block mr-2" /> 10 FEB 2023 |{' '}
                                    <FaUser className="inline-block mr-2" /> BY JOHN DOE
                                </span>
                                <h3 className="text-xl font-bold text-white">A Guide to Igniting Your Imagination</h3>
                                <div className="mt-4">
                                    <p className="text-gray-200 text-sm">
                                        Learn how to ignite your creativity and start thinking outside the box. This blog post offers practical tips to inspire your imagination and fuel your journey towards innovative thinking.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Blog Post 2 */}
                        <div className="bg-white cursor-pointer rounded-lg overflow-hidden group relative before:absolute before:inset-0 before:z-10 before:bg-black before:opacity-60">
                            <img
                                src="https://readymadeui.com/hacks-watch.webp"
                                alt="Blog Post 2"
                                className="w-full h-96 object-cover group-hover:scale-110 transition-all duration-300"
                            />
                            <div className="p-6 absolute bottom-0 left-0 right-0 z-20">
                                <span className="text-sm block mb-2 text-yellow-400 font-semibold">
                                    <FaCalendar className="inline-block mr-2" /> 7 JUN 2023 |{' '}
                                    <FaUser className="inline-block mr-2" /> BY MARK ADAIR
                                </span>
                                <h3 className="text-xl font-bold text-white">Hacks to Supercharge Your Day</h3>
                                <div className="mt-4">
                                    <p className="text-gray-200 text-sm">
                                        Discover effective life hacks and time management strategies that can help you boost productivity and make the most of your day. Whether you’re a student or a working professional, this post offers tips for everyone.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Blog Post 3 */}
                        <div className="bg-white cursor-pointer rounded-lg overflow-hidden group relative before:absolute before:inset-0 before:z-10 before:bg-black before:opacity-60">
                            <img
                                src="https://readymadeui.com/prediction.webp"
                                alt="Blog Post 3"
                                className="w-full h-96 object-cover group-hover:scale-110 transition-all duration-300"
                            />
                            <div className="p-6 absolute bottom-0 left-0 right-0 z-20">
                                <span className="text-sm block mb-2 text-yellow-400 font-semibold">
                                    <FaCalendar className="inline-block mr-2" /> 5 OCT 2023 |{' '}
                                    <FaUser className="inline-block mr-2" /> BY SIMON KONECKI
                                </span>
                                <h3 className="text-xl font-bold text-white">Trends and Predictions</h3>
                                <div className="mt-4">
                                    <p className="text-gray-200 text-sm">
                                        Stay ahead of the curve by reading our latest trends and predictions in the education and tech industries. In this blog post, we highlight emerging trends, innovative technologies, and how they are shaping the future.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Home;
