import React from "react";


const Footer = () => {

    return (
        <footer className={"text-center py-16"}>
            <img src={"/images/blue-icon.png"} alt={"icon"} width={150} height={150} objectFit={"contain"} className="mx-auto my-3"/>
            <p className={"opacity-50 font-med"}>&copy; 2022, Boxbay All rights reserved.</p>
        </footer>
    );
};

export default Footer;