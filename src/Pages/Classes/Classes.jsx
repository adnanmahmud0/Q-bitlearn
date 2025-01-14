const Classes = () => {
    return (
        <>
            <div className="p-4 mx-auto max-w-7xl">
                <div className="grid grid-cols-3 gap-4">
                    <div className="bg-white flex flex-col overflow-hidden cursor-pointer hover:shadow-md transition-all relative rounded-md">
                        <div className="w-full">
                            <img src="https://readymadeui.com/images/fashion-img-1.webp" alt="Product 1"
                                className="w-full object-cover object-top aspect-[230/307]" />
                        </div>
                        <div className="absolute right-2 top-2">
                            <p className="bg-ALPHA text-white text-xs rounded-full p-2">100 Enrolled</p>
                        </div>
                        <div className="p-2 flex-1 flex flex-col">
                            <div className="flex-1">
                                <div className="flex justify-between">
                                    <h5 className="text-sm sm:text-base font-bold text-gray-800 truncate">Lexicon Luxe</h5>
                                    <p className="mt-1 text-xs truncate"><span className="font-bold">Instructor:</span> adnan</p>
                                </div>
                                <p className="mt-1 text-gray-500 truncate">Teal Green Georgette Saree with Embroidery</p>
                                <div className="flex flex-wrap justify-between gap-2 mt-2">
                                    <div className="flex gap-2">
                                        <h6 className="text-sm sm:text-base font-bold text-gray-800">$10</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 mt-4">
                                <button type="button" className="text-sm px-2 min-h-[36px] w-full bg-blue-600 hover:bg-blue-700 text-white tracking-wide ml-auto outline-none border-none rounded">
                                    Enroll
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Classes;
