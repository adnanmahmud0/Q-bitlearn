import React from 'react';
import logo from "../../assets/logo.svg"

const Dashboard = () => {
    return (
        <>
            <div className="relative pt-[70px] h-screen">
                <header className='flex shadow-md py-1 px-4 sm:px-7 bg-white min-h-[70px] tracking-wide z-[110] fixed top-0 w-full'>
                    <div className='flex flex-wrap items-center justify-between gap-4 w-full relative'>
                        <a href="" className='flex items-center'><img src={logo} alt="logo" className='w-10' /><p className='ml-2 text-xl'>edurock</p>
                        </a>

                        <div id="collapseMenu"
                            className='max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50'>
                            <button id="toggleClose" className='lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-black" viewBox="0 0 320.591 320.591">
                                    <path
                                        d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                                        data-original="#000000"></path>
                                    <path
                                        d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                                        data-original="#000000"></path>
                                </svg>
                            </button>

                            <div
                                className="max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
                                <div className='flex items-center max-lg:flex-col-reverse max-lg:ml-auto gap-8'>
                                    <div className='flex items-center space-x-6 max-lg:flex-wrap'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 cursor-pointer fill-[#333] hover:fill-[#077bff]"
                                            viewBox="0 0 511 511.999">
                                            <path
                                                d="M498.7 222.695c-.016-.011-.028-.027-.04-.039L289.805 13.81C280.902 4.902 269.066 0 256.477 0c-12.59 0-24.426 4.902-33.332 13.809L14.398 222.55c-.07.07-.144.144-.21.215-18.282 18.386-18.25 48.218.09 66.558 8.378 8.383 19.44 13.235 31.273 13.746.484.047.969.07 1.457.07h8.32v153.696c0 30.418 24.75 55.164 55.168 55.164h81.711c8.285 0 15-6.719 15-15V376.5c0-13.879 11.293-25.168 25.172-25.168h48.195c13.88 0 25.168 11.29 25.168 25.168V497c0 8.281 6.715 15 15 15h81.711c30.422 0 55.168-24.746 55.168-55.164V303.14h7.719c12.586 0 24.422-4.903 33.332-13.813 18.36-18.367 18.367-48.254.027-66.633zm-21.243 45.422a17.03 17.03 0 0 1-12.117 5.024h-22.72c-8.285 0-15 6.714-15 15v168.695c0 13.875-11.289 25.164-25.168 25.164h-66.71V376.5c0-30.418-24.747-55.168-55.169-55.168H232.38c-30.422 0-55.172 24.75-55.172 55.168V482h-66.71c-13.876 0-25.169-11.29-25.169-25.164V288.14c0-8.286-6.715-15-15-15H48a13.9 13.9 0 0 0-.703-.032c-4.469-.078-8.66-1.851-11.8-4.996-6.68-6.68-6.68-17.55 0-24.234.003 0 .003-.004.007-.008l.012-.012L244.363 35.02A17.003 17.003 0 0 1 256.477 30c4.574 0 8.875 1.781 12.113 5.02l208.8 208.796.098.094c6.645 6.692 6.633 17.54-.031 24.207zm0 0"
                                                data-original="#000000" />
                                        </svg>
                                    </div>

                                    <div className="dropdown-menu relative flex shrink-0 group">
                                        <img src="https://readymadeui.com/team-1.webp" alt="profile-pic"
                                            className="w-9 h-9 max-lg:w-16 max-lg:h-16 rounded-full border-2 border-gray-300 cursor-pointer" />

                                        <div
                                            className="dropdown-content hidden group-hover:block shadow-md p-2 bg-white rounded-md absolute top-9 right-0 w-56">
                                            <div className="w-full">
                                                <a href=""
                                                    className="text-sm text-gray-800 cursor-pointer flex items-center p-2 rounded-md hover:bg-gray-100 dropdown-item transition duration-300 ease-in-out">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-4 h-4 mr-3 fill-current" viewBox="0 0 24 24">
                                                        <path d="M19.56 23.253H4.44a4.051 4.051 0 0 1-4.05-4.05v-9.115c0-1.317.648-2.56 1.728-3.315l7.56-5.292a4.062 4.062 0 0 1 4.644 0l7.56 5.292a4.056 4.056 0 0 1 1.728 3.315v9.115a4.051 4.051 0 0 1-4.05 4.05zM12 2.366a2.45 2.45 0 0 0-1.393.443l-7.56 5.292a2.433 2.433 0 0 0-1.037 1.987v9.115c0 1.34 1.09 2.43 2.43 2.43h15.12c1.34 0 2.43-1.09 2.43-2.43v-9.115c0-.788-.389-1.533-1.037-1.987l-7.56-5.292A2.438 2.438 0 0 0 12 2.377z" data-original="#000000"></path>
                                                        <path d="M16.32 23.253H7.68a.816.816 0 0 1-.81-.81v-5.4c0-2.83 2.3-5.13 5.13-5.13s5.13 2.3 5.13 5.13v5.4c0 .443-.367.81-.81.81zm-7.83-1.62h7.02v-4.59c0-1.933-1.577-3.51-3.51-3.51s-3.51 1.577-3.51 3.51z" data-original="#000000"></path>
                                                    </svg>
                                                    Home</a>
                                                <a href=""
                                                    className="text-sm text-gray-800 cursor-pointer flex items-center p-2 rounded-md hover:bg-gray-100 dropdown-item transition duration-300 ease-in-out">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-3 fill-current" viewBox="0 0 6 6">
                                                        <path
                                                            d="M3.172.53a.265.266 0 0 0-.262.268v2.127a.265.266 0 0 0 .53 0V.798A.265.266 0 0 0 3.172.53zm1.544.532a.265.266 0 0 0-.026 0 .265.266 0 0 0-.147.47c.459.391.749.973.749 1.626 0 1.18-.944 2.131-2.116 2.131A2.12 2.12 0 0 1 1.06 3.16c0-.65.286-1.228.74-1.62a.265.266 0 1 0-.344-.404A2.667 2.667 0 0 0 .53 3.158a2.66 2.66 0 0 0 2.647 2.663 2.657 2.657 0 0 0 2.645-2.663c0-.812-.363-1.542-.936-2.03a.265.266 0 0 0-.17-.066z"
                                                            data-original="#000000" />
                                                    </svg>
                                                    Logout</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button id="toggleOpen" className='lg:hidden !ml-7 outline-none'>
                            <svg className="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                </header>

                <div>
                    <div className="flex items-start">
                        <nav id="sidebar" className="lg:min-w-[250px] w-max max-lg:min-w-8">
                            <div id="sidebar-collapse-menu" styleName="height: calc(100vh - 72px)"
                                className="bg-white shadow-lg h-screen fixed py-6 px-4 top-[70px] left-0 overflow-auto z-[99] lg:min-w-[250px] lg:w-max max-lg:w-0 max-lg:invisible transition-all duration-500">
                                <ul className="space-y-2">
                                    <li>
                                        <a href=""
                                            className="text-gray-800 text-sm flex items-center hover:bg-gray-100 rounded-md px-4 py-2 transition-all">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-[18px] h-[18px] mr-3" viewBox="0 0 24 24">
                                                <path d="M19.56 23.253H4.44a4.051 4.051 0 0 1-4.05-4.05v-9.115c0-1.317.648-2.56 1.728-3.315l7.56-5.292a4.062 4.062 0 0 1 4.644 0l7.56 5.292a4.056 4.056 0 0 1 1.728 3.315v9.115a4.051 4.051 0 0 1-4.05 4.05zM12 2.366a2.45 2.45 0 0 0-1.393.443l-7.56 5.292a2.433 2.433 0 0 0-1.037 1.987v9.115c0 1.34 1.09 2.43 2.43 2.43h15.12c1.34 0 2.43-1.09 2.43-2.43v-9.115c0-.788-.389-1.533-1.037-1.987l-7.56-5.292A2.438 2.438 0 0 0 12 2.377z" data-original="#000000"></path>
                                                <path d="M16.32 23.253H7.68a.816.816 0 0 1-.81-.81v-5.4c0-2.83 2.3-5.13 5.13-5.13s5.13 2.3 5.13 5.13v5.4c0 .443-.367.81-.81.81zm-7.83-1.62h7.02v-4.59c0-1.933-1.577-3.51-3.51-3.51s-3.51 1.577-3.51 3.51z" data-original="#000000"></path>
                                            </svg>
                                            <span>Dashboard</span>
                                        </a>
                                    </li>
                                </ul>

                                <div className="mt-6">
                                    <h6 className="text-blue-600 text-sm font-bold px-4">Information</h6>
                                    <ul className="mt-3 space-y-2">
                                        <li>
                                            <a href=""
                                                className="text-gray-800 text-sm flex items-center hover:bg-gray-100 rounded-md px-4 py-2 transition-all">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-[18px] h-[18px] mr-3"
                                                    viewBox="0 0 512 512">
                                                    <path
                                                        d="M437.02 74.98C388.668 26.63 324.379 0 256 0S123.332 26.629 74.98 74.98C26.63 123.332 0 187.621 0 256s26.629 132.668 74.98 181.02C123.332 485.37 187.621 512 256 512s132.668-26.629 181.02-74.98C485.37 388.668 512 324.379 512 256s-26.629-132.668-74.98-181.02zM111.105 429.297c8.454-72.735 70.989-128.89 144.895-128.89 38.96 0 75.598 15.179 103.156 42.734 23.281 23.285 37.965 53.687 41.742 86.152C361.641 462.172 311.094 482 256 482s-105.637-19.824-144.895-52.703zM256 269.507c-42.871 0-77.754-34.882-77.754-77.753C178.246 148.879 213.13 114 256 114s77.754 34.879 77.754 77.754c0 42.871-34.883 77.754-77.754 77.754zm170.719 134.427a175.9 175.9 0 0 0-46.352-82.004c-18.437-18.438-40.25-32.27-64.039-40.938 28.598-19.394 47.426-52.16 47.426-89.238C363.754 132.34 315.414 84 256 84s-107.754 48.34-107.754 107.754c0 37.098 18.844 69.875 47.465 89.266-21.887 7.976-42.14 20.308-59.566 36.542-25.235 23.5-42.758 53.465-50.883 86.348C50.852 364.242 30 312.512 30 256 30 131.383 131.383 30 256 30s226 101.383 226 226c0 56.523-20.86 108.266-55.281 147.934zm0 0"
                                                        data-original="#000000" />
                                                </svg>
                                                <span>My Enrolled Classes</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="mt-6">
                                    <h6 className="text-blue-600 text-sm font-bold px-4">Payment</h6>
                                    <ul className="mt-3 space-y-2">
                                        <li>
                                            <a href=""
                                                className="text-gray-800 text-sm flex items-center hover:bg-gray-100 rounded-md px-4 py-2 transition-all">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-[18px] h-[18px] mr-3"
                                                    viewBox="0 0 511.877 511.877">
                                                    <path
                                                        d="M442.706 340.677c-11-68.6-93.8-175.7-120.1-208.2 4.2-3.5 6.9-8.7 6.9-14.6 0-4.2-1.4-8-3.7-11.1 2.3-3.1 3.7-7 3.7-11.1 0-6.6-3.4-12.4-8.5-15.7 8.1-33.1 31.3-59.5 32.4-60.7.8-.9 1.3-1.9 1.6-3 .7-2.4.1-5.1-1.5-7.1-1-1.2-2.3-2.1-3.8-2.5-63.1-17.5-114.9 4.1-129.7 11.4-12.3-7.5-24.5-14-39.9-16.2-5-.7-10.1-1-15.7-1a7.719 7.719 0 0 0-6.9 11.2s.6 1.1 1 1.6c.3.3 26.7 31.7 35.2 66.2-5.1 3.4-8.5 9.2-8.5 15.7 0 4.2 1.4 8 3.7 11.1-2.3 3.1-3.7 7-3.7 11.1 0 5.1 2 9.7 5.3 13.1-25.1 31-110.2 140-121.3 209.8-1.2 5.8-17.4 86.9 23.1 135.8 19.4 23.5 48.5 35.4 86.4 35.4 1.5 0 2.9 0 4.4-.1h145.7c1.5 0 3 .1 4.4.1 37.9 0 66.9-11.9 86.4-35.4 40.4-48.9 24.3-130 23.1-135.8zm-239.2-219.5h-.1c-1.6-.3-2.7-1.7-2.7-3.3 0-1.9 1.5-3.4 3.4-3.4h106.6c1.9 0 3.4 1.5 3.4 3.4s-1.5 3.4-3.4 3.4h-106.7c-.2-.1-.3-.1-.5-.1zm-2.9-25.6c0-1.8 1.5-3.3 3.3-3.4h106.7c1.8 0 3.3 1.5 3.3 3.4s-1.5 3.4-3.4 3.4h-106.5c-1.9 0-3.4-1.5-3.4-3.4zm124.3-78.4c-1.1.7-2.2 1.4-3.2 2.1 0 0-.1.1-.2.1-2.3 1.5-4.5 2.9-6.8 4.3-9.5 5.8-19.2 9.3-29.5 10.9-11.2 1.7-22.9 1.1-33.9-1.5-4.8-1.2-9.4-2.8-14.2-5.1-.2-.1-.3-.2-.5-.2 17.1-6.9 49.6-16.2 88.3-10.6zm-106.8 17.9 1.3.8c9.7 6 18.7 9.9 28.2 12.2 12.9 3.1 26.7 3.7 39.8 1.8 12-1.8 23.1-5.8 34.1-12.2-6.2 11-12.3 24.4-15.9 39.1h-96.9c-5.7-23.4-18.7-45.4-28.1-59 13.7 2.5 24.8 9.4 37.5 17.3zm189.5 431.5c-17 20.6-43.5 30.6-78.5 29.7h-146.3c-35.1.8-61.5-9.1-78.5-29.7-36.3-43.7-20.1-122.1-19.9-122.9 0-.1.1-.3.1-.4 10.9-69.1 104.5-186 121.3-206.6h100.3c16.5 20.1 110.4 137.4 121.3 206.6 0 .1 0 .3.1.4.1.8 16.4 79-19.9 122.9zm-151.7-233.7c-46.1 0-83.6 37.5-83.6 83.6s37.5 83.6 83.6 83.6 83.6-37.5 83.6-83.6c.1-46.1-37.5-83.6-83.6-83.6zm0 151.7c-37.6 0-68.1-30.6-68.1-68.1s30.6-68.1 68.1-68.1 68.1 30.5 68.1 68.1-30.5 68.1-68.1 68.1zm28.1-53.6c0 11.6-9 21.2-20.3 22.1v4c0 4.3-3.5 7.8-7.8 7.8s-7.8-3.5-7.8-7.8v-3.9h-5.5c-4.3 0-7.8-3.5-7.8-7.8s3.5-7.8 7.8-7.8h19.1a6.7 6.7 0 0 0 0-13.4h-11.7c-12.3 0-22.2-10-22.2-22.2 0-11.6 9-21.2 20.3-22.1v-4c0-4.3 3.5-7.8 7.8-7.8s7.8 3.5 7.8 7.8v3.9h5.5c4.3 0 7.8 3.5 7.8 7.8s-3.5 7.8-7.8 7.8h-19.1a6.7 6.7 0 0 0 0 13.4h11.7c12.2-.1 22.2 9.9 22.2 22.2z"
                                                        data-original="#000000" />
                                                </svg>
                                                <span>History</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="mt-6">
                                    <h6 className="text-blue-600 text-sm font-bold px-4">Actions</h6>
                                    <ul className="mt-3 space-y-2">
                                        <li>
                                            <a href=""
                                                className="text-gray-800 text-sm flex items-center hover:bg-gray-100 rounded-md px-4 py-2 transition-all">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-[18px] h-[18px] mr-3"
                                                    viewBox="0 0 512 512">
                                                    <path
                                                        d="M437.02 74.98C388.668 26.63 324.379 0 256 0S123.332 26.629 74.98 74.98C26.63 123.332 0 187.621 0 256s26.629 132.668 74.98 181.02C123.332 485.37 187.621 512 256 512s132.668-26.629 181.02-74.98C485.37 388.668 512 324.379 512 256s-26.629-132.668-74.98-181.02zM111.105 429.297c8.454-72.735 70.989-128.89 144.895-128.89 38.96 0 75.598 15.179 103.156 42.734 23.281 23.285 37.965 53.687 41.742 86.152C361.641 462.172 311.094 482 256 482s-105.637-19.824-144.895-52.703zM256 269.507c-42.871 0-77.754-34.882-77.754-77.753C178.246 148.879 213.13 114 256 114s77.754 34.879 77.754 77.754c0 42.871-34.883 77.754-77.754 77.754zm170.719 134.427a175.9 175.9 0 0 0-46.352-82.004c-18.437-18.438-40.25-32.27-64.039-40.938 28.598-19.394 47.426-52.16 47.426-89.238C363.754 132.34 315.414 84 256 84s-107.754 48.34-107.754 107.754c0 37.098 18.844 69.875 47.465 89.266-21.887 7.976-42.14 20.308-59.566 36.542-25.235 23.5-42.758 53.465-50.883 86.348C50.852 364.242 30 312.512 30 256 30 131.383 131.383 30 256 30s226 101.383 226 226c0 56.523-20.86 108.266-55.281 147.934zm0 0"
                                                        data-original="#000000" />
                                                </svg>
                                                <span>Profile</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href=""
                                                className="text-gray-800 text-sm flex items-center hover:bg-gray-100 rounded-md px-4 py-2 transition-all">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-[18px] h-[18px] mr-3"
                                                    viewBox="0 0 6.35 6.35">
                                                    <path
                                                        d="M3.172.53a.265.266 0 0 0-.262.268v2.127a.265.266 0 0 0 .53 0V.798A.265.266 0 0 0 3.172.53zm1.544.532a.265.266 0 0 0-.026 0 .265.266 0 0 0-.147.47c.459.391.749.973.749 1.626 0 1.18-.944 2.131-2.116 2.131A2.12 2.12 0 0 1 1.06 3.16c0-.65.286-1.228.74-1.62a.265.266 0 1 0-.344-.404A2.667 2.667 0 0 0 .53 3.158a2.66 2.66 0 0 0 2.647 2.663 2.657 2.657 0 0 0 2.645-2.663c0-.812-.363-1.542-.936-2.03a.265.266 0 0 0-.17-.066z"
                                                        data-original="#000000" />
                                                </svg>
                                                <span>Logout</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>

                        <button id="toggle-sidebar"
                            className='lg:hidden w-8 h-8 z-[100] fixed top-[74px] left-[10px] cursor-pointer bg-[#007bff] flex items-center justify-center rounded-full outline-none transition-all duration-500'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" className="w-3 h-3" viewBox="0 0 55.752 55.752">
                                <path
                                    d="M43.006 23.916a5.36 5.36 0 0 0-.912-.727L20.485 1.581a5.4 5.4 0 0 0-7.637 7.638l18.611 18.609-18.705 18.707a5.398 5.398 0 1 0 7.634 7.635l21.706-21.703a5.35 5.35 0 0 0 .912-.727 5.373 5.373 0 0 0 1.574-3.912 5.363 5.363 0 0 0-1.574-3.912z"
                                    data-original="#000000" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;