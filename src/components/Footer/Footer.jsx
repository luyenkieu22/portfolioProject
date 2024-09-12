import React from "react";

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <footer className="bg-[#12141e] pt-12">
            {/*====== footer top ======*/}
            <div className="container">
                <div className="sm:flex items-center justify-center md:gap-8">
                    <div className="w-full sm:w-1/2">
                        <h2 className="text-[26px] leading-10 text-white font-[600] mb-5 md:text-[2rem]">
                            Do you want to make beautiful products?
                        </h2>
                        <a href="#contact">
                            <button className="bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]">
                                <i class="ri-mail-line"></i> Hire me
                            </button>
                        </a>
                    </div>

                    <div className="w-full sm:w-1/2">
                        <p className="text-gray-300 leading-7 mt-4 sm:mt-0">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
                            dolorum ratione porro optio dolore perferendis odio at placeat
                            veritatis. Tenetur ab deleniti rem earum corrupti eligendi quae
                            suscipit consequuntur debitis.
                        </p>

                        <div className="flex items-center gap-4 flex-wrap md:gap-8 mt-10">
                            <span className="text-gray-300">Follow Me:</span>

                            <span className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
                                <a href="#github" className="text-gray-300 font-[500] text-[18px]">
                                    <i class="ri-github-fill"></i>
                                </a>
                            </span>
                            <span className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
                                <a href="#github" className="text-gray-300 font-[500] text-[18px]">
                                    <i class="ri-youtube-line"></i>
                                </a>
                            </span>
                            <span className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
                                <a href="#github" className="text-gray-300 font-[500] text-[18px]">
                                    <i class="ri-facebook-line"></i>
                                </a>
                            </span>
                            <span className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
                                <a href="#github" className="text-gray-300 font-[500] text-[18px]">
                                    <i class="ri-instagram-line"></i>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
                <div>
                    <ul className="flex items-center justify-center gap-10 mt-10">
                        <li>
                            <a href="#about" className="text-gray-400 items-center justify-center font-[600]">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#services" className="text-gray-400 items-center justify-center font-[600]">
                                Service
                            </a>
                        </li>
                        <li>
                            <a href="#portfolio" className="text-gray-400 items-center justify-center font-[600]">
                                Portfolio
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="text-gray-400 items-center justify-center font-[600]">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            {/*====== footer top end ======*/}
            {/*====== footer bottom ======*/}
            <div className="py-3 bg-[#1b1e29] mt-14">
                <div className="container">
                    <div className="flex items-center justify-center sm:justify-between">
                        <div className="hidden sm:block">
                            <div className="flex items-center gap-[10px]">
                                <span className="w-[35px] h-[35px] bg-[#2b2d33] text-white font-[500] flex items-center justify-center text-[18px] rounded-full">L</span>
                                <div className="leading-[20px]">
                                    <h2 className="text-gray-200 font-[500] text-[18px]">LuyenKieu</h2>
                                    <p className="text-gray-400 font-[500] text-[14px]">Personal</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className="text-gray-400">Copyright {year} developed by Luyen Kieu - All right reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/*====== footer bottom end ======*/}
        </footer>
    );
};

export default Footer;
