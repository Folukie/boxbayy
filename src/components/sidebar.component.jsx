import React from "react";


const Sidebar = ({close, isOpen}) => {
    return (
        <aside
            className={`bg-primary sidebar  p-4 max-w-full w-full z-50 fixed top-0 left-0 hidden sm:block transition-all duration-300 transform ${
                !isOpen ? "-translate-y-full" : ""
            }`}
        >
            <div className="flex justify-between pb-10 pt-2">
                <a href={"/"} passHref>
                
                    <img alt="icon" src="/images/white-icon.png" className="object-contain h-8"/>
                </a>
                <button onClick={close}>
                    <svg width="19" height="21" viewBox="0 0 19 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M9.76893 10.4285L18.2044 19.791M1.3334 19.791L9.76893 10.4285L1.3334 19.791ZM18.2044 1.06604L9.76732 10.4285L18.2044 1.06604ZM9.76732 10.4285L1.3334 1.06604L9.76732 10.4285Z"
                            stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>

                </button>
            </div>
            <div className="flex flex-col gap-y-8 py-14">
                {
                    [
                        {title: "About", link: "/"},
                        {title: "Contact", link: "/contact"}

                    ].map((item, idx) => (
                        <a
                            className="text-white font-medium text-med hover:opacity-80"
                            key={idx}
                            href={item.link}
                            onClick={close}

                        >
                            {item.title}
                        </a>
                    ))}
            </div>
        </aside>
    );
};

export default Sidebar;