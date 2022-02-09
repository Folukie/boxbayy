import React from "react";


const GetInTouch = () => {

    return (
        <div
            className={" grid grid-cols-2 justify-between items-center px-24 mt-20 h-md sm:grid-cols-1 sm:h-mobilelg "}
            style={{background: "linear-gradient(-45deg, #14279B 46%,#F2F5FE 5%)"}}>
            <h1 className={"text-lg sm:text-min sm:text-center"}>Accelerate your business today with Boxbay</h1>
            <a className={"border-2 text-white text-min font-semibold py-6 rounded-xl w-96 mx-auto text-center cursor-pointer sm:text-mobilebase sm:w-mobilesm hover:shadow-md"}
               href={"/contact"}>Get
                In
                Touch</a>

        </div>
    );
};

export default GetInTouch;