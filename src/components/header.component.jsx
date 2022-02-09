import React, {useState} from "react";
import {Squash as Hamburger} from 'hamburger-react';
// import Link from "next/link";
import Sidebar from "./sidebar.component";

const Header = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <div className="bg-primary px-14 py-6 sticky top-0 w-full z-20 sm:px-4">
            <div className="flex justify-between gap-8">

                <a href={"/"} passHref>
                    
                    <img alt="icon" src="/images/white-icon.png" className="object-contain h-8"/>
                </a>
                <div className="flex items-center gap-10 cursor-pointer sm:hidden">

                    {[
                        {title: "About", link: "/"},
                        {title: "Contact", link: "/contact"}].map((item, idx) => (
                        <a href={item.link} className="text-white text-med hover:opacity-80" key={idx}>
                            {item.title}
                        </a>
                    ))}


                </div>
                <div className="text-white hidden sm:block">
                    <Hamburger
                        toggled={isOpen}
                        toggle={setOpen}
                        size={24}
                        easing="ease-in"
                        color="#fff"
                        duration={0.4}
                    />
                </div>

            </div>

            <Sidebar close={() => setOpen(false)} isOpen={isOpen}/>
        </div>
    );
};

export default Header;