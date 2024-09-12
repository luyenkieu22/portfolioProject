import React, { useEffect, useRef } from "react";

const Header = () => {
    const headerRef = useRef()
    const menuRef = useRef()

    const stickyHeaderFunc = () => {
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('sticky__header')
            } else {
                headerRef.current.classList.remove('sticky__header')
            }
        })
    }

    useEffect(() => {
        stickyHeaderFunc();
        return window.addEventListener('scroll', stickyHeaderFunc)
    }, [])

    const handleClick = e => {
        e.preventDefault();
        const targetAttr = e.target.getAttribute('href')
        const location = document.querySelector(targetAttr).offsetTop

        window.scrollTo({
            top: location - 80,
            left: 0
        })
    }

    const toggleMenu = () => menuRef.current.classList.toggle('show__menu')

    return (
        <header ref={headerRef} className=" w-full h-[80px] leading-[80px] flex items-center">
            <div className="container">
                <div className="flex items-center justify-between">
                    {/* ========= Logo start ========= */}
                    <div className="flex items-center gap-[10px]">
                        <span className="w-[35px] h-[35px] bg-primaryColor text-white text-[18px] font-[500] rounded-full flex items-center justify-center ">
                            L
                        </span>
                        <div className="leading-[20px] ">
                            <h2 className="text-xl text-smallTextColor font-[700]">
                                LuyenKieu
                            </h2>
                            <p className="text-smallTextColor text-[18px] font-[500] ">
                                personal
                            </p>
                        </div>
                    </div>
                    {/* ========= Logo end ========= */}
                    {/* ========= Menu start ========= */}
                    <div className="menu" ref={menuRef} onClick={toggleMenu}>
                        <ul className="flex items-center gap-10">
                            <li>
                                <a onClick={handleClick} href="#about" className="text-smallTextColor font-[600]">
                                    About
                                </a>
                            </li>
                            <li>
                                <a onClick={handleClick} href="#services" className="text-smallTextColor font-[600]">
                                    Service
                                </a>
                            </li>
                            <li>
                                <a onClick={handleClick} href="#portfolio" className="text-smallTextColor font-[600]">
                                    Portfolio
                                </a>
                            </li>
                            <li>
                                <a onClick={handleClick} href="#contact" className="text-smallTextColor font-[600]">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* ========= Menu end ========= */}
                    {/* ========= Menu right ========= */}
                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 text-smallTextColor font-[600] border border-solid border-smallTextColor py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor hover:text-white hover:font-[500] ease-in-out duration-300">
                            <i class="ri-send-plane-line"></i> Let's Talk
                        </button>
                        <span onClick={toggleMenu} className="md:hidden text-2xl text-smallTextColor cursor-pointer">
                            <i class="ri-menu-line"></i>
                        </span>
                    </div>
                    {/* ========= Menu end ========= */}
                </div>
            </div>
        </header>
    );
};

export default Header;
