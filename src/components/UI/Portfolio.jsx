import React, { useEffect, useState } from "react";
import data from "../../assets/data/portfolioData";
import Modal from "./Modal";

const Portfolio = () => {
    const [nextItems, setNextItems] = useState(6);
    const [portfolios, setPortfolios] = useState(data);
    const [selectTab, setSelectTab] = useState("all");
    const [openModal, setOpenModal] = useState(false);
    const [activeId, setActiveId] = useState(null);

    const showModalHandler = (id) => {
        setOpenModal(true);
        setActiveId(id);
    };

    useEffect(() => {
        if (selectTab === "all") {
            setPortfolios(data);
        }
        if (selectTab === "web-design") {
            const filterData = data.filter((data) => data.category === "Web Design");
            setPortfolios(filterData);
        }
        if (selectTab === "ux-design") {
            const filterData = data.filter((data) => data.category === "Ux");
            setPortfolios(filterData);
        }
    }, [selectTab]);

    const loadMoreHandler = () => {
        setNextItems((prev) => prev + 3);
    };


    return (
        <section id="portfolio">
            <div className="container">
                <div className="flex items-center justify-between flex-wrap">
                    <div className="mb-7 sm:mb-0">
                        <h3 className="text-headingColor text-[2rem] font-[700]">
                            My recent projects
                        </h3>
                    </div>

                    <div className="flex gap-3">
                        <button
                            onClick={() => setSelectTab("all")}
                            className={`text-smallTextColor border border-solid border-smallTextColor  py-2 px-4 rounded-[8px] ease-in duration-200 hover:bg-smallTextColor hover:text-white ${selectTab === 'all' && 'bg-smallTextColor text-white'}`}
                        >
                            All
                        </button>
                        <button
                            onClick={() => setSelectTab("web-design")}
                            className={`text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px] ease-in duration-200 hover:bg-smallTextColor hover:text-white ${selectTab === 'web-design' && 'bg-smallTextColor text-white'}`}
                        >
                            Web Design
                        </button>
                        <button
                            onClick={() => setSelectTab("ux-design")}
                            className={`text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px] ease-in duration-200 hover:bg-smallTextColor hover:text-white ${selectTab === 'ux-design' && 'bg-smallTextColor text-white'}`}
                        >
                            UX Design
                        </button>
                    </div>
                </div>

                <div className="flex items-center gap-4 flex-wrap mt-12">
                    {portfolios?.slice(0, nextItems)?.map((portfolio, index) => (
                        <div
                            data-aos="fade-zoom-in"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            key={index}
                            className="group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1]"
                        >
                            <figure>
                                <img src={portfolio.imgUrl} alt="" className="rounded-[8px]" />
                            </figure>
                            <div className="w-full h-full bg-primaryColor bg-opacity-40 absolute top-0 left-0 z-[5] hidden group-hover:block">
                                <div className="w-full h-full flex items-center justify-center">
                                    <button
                                        onClick={() => showModalHandler(portfolio.id)}
                                        className="text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200"
                                    >
                                        See Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-6">
                    {nextItems < portfolios.length && data.length > 6 && (
                        <button
                            onClick={loadMoreHandler}
                            className="text-white bg-primaryColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200"
                        >
                            Load more
                        </button>
                    )}
                </div>

            </div>
            {openModal && <Modal setOpenModal={setOpenModal} activeId={activeId} />}
        </section>
    );
};

export default Portfolio;
