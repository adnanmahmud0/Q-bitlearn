import { Helmet } from 'react-helmet-async';
import slide1 from "../../assets/8.jpg";
import slide2 from "../../assets/20.jpg";
import slide3 from "../../assets/21.jpg";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaAngleRight, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
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
import instructor from "../../assets/3.jpg"
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

    const { data: enrollData } = useQuery({
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
                            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                            <div className="z-10 max-w-6xl max-md:max-w-md mx-auto">
                                <div className="grid md:grid-cols-2 items-center md:gap-8 gap-6">
                                    <div className="max-md:order-1 max-md:text-center">
                                        <p className="text-sm font-bold text-white mb-2"><span className="rotate-90 inline-block mr-2">|</span> CONNECT WITH TUTORS</p>
                                        <h2 className="text-white md:text-5xl text-3xl font-extrabold mb-4 md:!leading-[55px]">Find the best tutors and classes</h2>
                                        <p className="mt-4 text-base text-white leading-relaxed">Discover the perfect tutor to match your learning style. Explore top-rated tutors and courses on EduManage today!</p>
                                        <div className="mt-8 space-x-4">
                                            <button type="button" className="bg-[#FFBB01] hover:bg-transparent hover:bg-[#F2277E] border-2 transition-all text-white font-semibold tracking-wide text-sm rounded-full px-6 py-2.5">Get started</button>
                                            <button type="button" className="bg-transparent hover:bg-[#F2277E] hover:text-white border-2 border-[#F2277E] hover:border-white transition-all text-[#F2277E] font-semibold tracking-wide text-sm rounded-full px-6 py-2.5">Learn more</button>
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
                            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                            <div className="z-10 max-w-6xl max-md:max-w-md mx-auto">
                                <div className="grid md:grid-cols-2 items-center md:gap-8 gap-6">
                                    <div className="max-md:order-1 max-md:text-center">
                                        <p className="text-sm font-bold text-white mb-2"><span className="rotate-90 inline-block mr-2">|</span> CONNECT WITH TUTORS</p>
                                        <h2 className="text-white md:text-5xl text-3xl font-extrabold mb-4 md:!leading-[55px]">Find the best tutors and classes</h2>
                                        <p className="mt-4 text-base text-white leading-relaxed">Discover the perfect tutor to match your learning style. Explore top-rated tutors and courses on EduManage today!</p>
                                        <div className="mt-8 space-x-4">
                                            <button type="button" className="bg-[#FFBB01] hover:bg-transparent hover:bg-[#F2277E] border-2 transition-all text-white font-semibold tracking-wide text-sm rounded-full px-6 py-2.5">Explore Classes</button>
                                            <button type="button" className="bg-transparent hover:bg-[#F2277E] hover:text-white border-2 border-[#F2277E] hover:border-white transition-all text-[#F2277E] font-semibold tracking-wide text-sm rounded-full px-6 py-2.5">Learn More</button>
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
                                        <p className="text-sm font-bold text-white mb-2"><span className="rotate-90 inline-block mr-2">|</span> BUILD YOUR SKILLS</p>
                                        <h2 className="text-white md:text-5xl text-3xl font-extrabold mb-4 md:!leading-[55px]">Learn, grow, and achieve your goals</h2>
                                        <p className="mt-4 text-base text-white leading-relaxed">Empower yourself with new skills and knowledge. With EduManage, your journey to personal and professional growth is just a click away.</p>
                                        <div className="mt-8 space-x-4">
                                            <button type="button" className="bg-[#FFBB01] hover:bg-transparent hover:bg-[#F2277E] border-2 transition-all text-white font-semibold tracking-wide text-sm rounded-full px-6 py-2.5">Join as a Teacher</button>
                                            <button type="button" className="bg-transparent hover:bg-[#F2277E] hover:text-white border-2 border-[#F2277E] hover:border-white transition-all text-[#F2277E] font-semibold tracking-wide text-sm rounded-full px-6 py-2.5">Learn More</button>
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
            <div className="max-w-7xl mx-auto p-10 rounded-xl bg-white mt-10 shadow-lg">
                <div className="grid grid-cols-2 md:grid-cols-6 gap-4 items-center">
                    <img src="https://edurock-blond.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbrand_1.c7b21ebe.png&w=256&q=75" className="w-28 mx-auto" alt="hexa" />
                    <img src="https://edurock-blond.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbrand_2.546077c1.png&w=256&q=75" className="w-28 mx-auto" alt="circle" />
                    <img src="https://edurock-blond.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbrand_3.508e8a28.png&w=256&q=75" className="w-28 mx-auto" alt="treva" />
                    <img src="https://edurock-blond.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbrand_4.335ce9ee.png&w=256&q=75" className="w-28 mx-auto" alt="atlas" />
                    <img src="https://edurock-blond.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbrand_5.6d821bbb.png&w=96&q=75" className="w-28 mx-auto" alt="josef" />
                    <img src="https://edurock-blond.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo_1.a929018c.png&w=256&q=75" className="w-28 mx-auto" alt="edurack" />
                </div>
            </div>
            <div className='my-10'>
                <h2 className="sm:text-4xl text-2xl font-bold text-center mb-6 mt-10 text-[#592ADF]">Most Popular Classes</h2>
                <p className=" text-sm text-gray-500 text-center mb-10">Embark on unforgettable journeys. Book your dream vacation today!</p>
                <Swiper
                    spaceBetween={20}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        1024: {
                            slidesPerView: 5,
                        },
                    }}
                >
                    {enrollData?.map((classItem, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-white rounded p-4 cursor-pointer hover:-translate-y-1 transition-all relative">
                                <div className="w-full">
                                    <img src={classItem.image} alt={classItem.name} className="w-full rounded-md object-cover object-top aspect-[230/150]" />
                                </div>
                                <div className="absolute right-2 top-2">
                                    <p className="bg-[#592adf] text-white text-xs rounded-full p-2">{classItem.totalEnrollment} Enrolled</p>
                                </div>
                                <div className="p-2 flex-1 flex flex-col">
                                    <h5 className="text-sm sm:text-base font-bold text-gray-800 truncate">{classItem.title}</h5>
                                    <div className="flex-1">
                                        <p className="mt-1 text-gray-500 truncate">{classItem.description}</p>
                                        <div className="flex justify-between items-center">
                                            <div className="flex flex-wrap justify-between gap-2 mt-2">
                                                <div className="flex gap-2">
                                                    <h6 className="text-sm sm:text-base font-bold text-[#f2277e]">${classItem.price}</h6>
                                                </div>
                                            </div>
                                            <p className="mt-1 text-xs truncate"><span className="font-bold">Instructor:</span> {classItem.teacher.name}</p>
                                        </div>
                                    </div>
                                    <Link to={`/Class-Details/${classItem._id}`} className="flex items-center gap-2 mt-4">
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
            <div className="px-8 mt-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-3 gap-6 max-lg:max-w-2xl">
                        <div className="col-span-2">
                            <h2 className="text-[#592adf] sm:text-4xl text-2xl font-bold">What our happy clients say</h2> {/* Color for heading */}
                            <p className="text-sm text-gray-500 mt-4 leading-relaxed">
                                Veniam proident aute magna anim excepteur et ex consectetur velit ullamco veniam minim aute sit. Elit occaecat officia et laboris Lorem minim. Officia do aliqua adipisicing ullamco in.
                            </p>
                        </div>

                        <div className="flex space-x-4 items-end justify-end">
                            <div
                                className="bg-[#592adf] w-10 h-10 grid items-center justify-center rounded-full shrink-0 cursor-pointer"
                                onClick={goToPrevSlideRating}
                            >
                                <FaAngleLeft className="w-3 fill-white inline" /> {/* change slide */}
                            </div>
                            <div
                                className="bg-[#ffbb01] w-10 h-10 grid items-center justify-center rounded-full shrink-0 cursor-pointer"
                                onClick={goToNextSlideRating}
                            >
                                <FaAngleRight className="w-3 fill-white inline" /> {/* change slide */}
                            </div>
                        </div>
                    </div>

                    <div className="mt-12">
                        <Swiper
                            spaceBetween={20}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                            breakpoints={{
                                640: {
                                    slidesPerView: 1,
                                },
                                768: {
                                    slidesPerView: 3,
                                },
                                1024: {
                                    slidesPerView: 3,
                                },
                            }}
                            ref={swiperRefRatings} // Attach the reference here
                        >
                            {rateData?.map((testimonial, index) => (
                                <SwiperSlide key={index} className='pl-10'>
                                    <div className="max-w-[360px] h-auto py-5 pl-14 pr-4 bg-white border-2 rounded-3xl relative">
                                        <img
                                            src={testimonial.photoURL}
                                            className="w-20 h-20 rounded-full absolute -left-10 top-0 bottom-0 my-auto border-2 border-gray-300"
                                        />
                                        <div>
                                            <h6 className="text-black text-[15px] font-bold">{testimonial.displayName}</h6> {/* Name in color */}
                                            <p className="mt-1 text-xs text-gray-500">{testimonial.userEmail}</p> {/* Email in color */}
                                        </div>
                                        <div className="mt-4">
                                            <p className="text-gray-500 text-sm leading-relaxed">{testimonial.description}</p> {/* Description in color */}
                                        </div>
                                        <div className="flex space-x-1 mt-4">
                                            {[...Array(5)].map((_, i) => (
                                                <FaStar
                                                    key={i}
                                                    className={`w-4 ${i < testimonial.rating ? 'fill-[#592adf]' : 'fill-[#CED5D8]'}`} // Rating color
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
            <div className="bg-[#592ADF] px-6 py-16 my-10">
                <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-x-6 gap-y-10 max-w-6xl mx-auto">
                    <div className="flex items-center gap-6">
                        <FaUserAlt className="text-[#FFBB01] w-14 h-14 shrink-0" />
                        <div>
                            <h3 className="text-white text-4xl font-bold">400+</h3>
                            <p className="text-base text-gray-300 mt-2">Total User</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <SiGoogleclassroom className="text-[#FFBB01] w-14 h-14 shrink-0" />
                        <div>
                            <h3 className="text-white text-4xl font-bold">450+</h3>
                            <p className="text-base text-gray-300 mt-2">Total Classes</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <FaSmile className="text-[#FFBB01] w-14 h-14 shrink-0" />
                        <div>
                            <h3 className="text-white text-4xl font-bold">500+</h3>
                            <p className="text-base text-gray-300 mt-2">Total enrollment</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <PiChalkboardTeacherFill className="text-[#FFBB01] w-14 h-14 shrink-0" />
                        <div>
                            <h3 className="text-white text-4xl font-bold">600+</h3>
                            <p className="text-base text-gray-300 mt-2">Total Instructor</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid md:grid-cols-2 items-center md:gap-8 gap-6 max-w-7xl mx-auto">
                <div className="max-md:order-1 max-md:text-center">
                    <h2 className="md:text-4xl text-3xl md:leading-10 font-extrabold text-[#592ADF] mb-4">Become an Instructor</h2>
                    <p className="mt-4 text-base text-gray-600 leading-relaxed">
                        Embark on a gastronomic journey with our curated dishes, delivered promptly to your doorstep. Elevate your dining experience today.
                    </p>
                    <div className="mt-8 flex max-sm:flex-col sm:space-x-4 max-sm:space-y-6">
                        <Link
                            to="/Teach-On-Edurock"
                            className="px-6 py-3 text-base font-semibold text-[#FFBB01] border border-[#FFBB01] rounded-full hover:text-white hover:bg-[#FFBB01] transition-all duration-300 transform hover:scale-105 focus:ring-2 focus:ring-[#f032e6] focus:outline-none focus:ring-opacity-50"
                        >
                            Start Teaching Today
                        </Link>
                    </div>
                </div>
                <div className="md:h-[450px]">
                    <img
                        src={instructor}
                        className="w-full h-full object-cover rounded-lg shadow-xl"
                        alt="Dining Experience"
                    />
                </div>
            </div>
        </>
    );
};

export default Home;
