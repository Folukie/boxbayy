import React from "react";
import service from "../data/services.json"
// import Image from "next/image";


const Services = () => {

    return (
        <div className={"mt-80 px-12 text-center sm:mt-64 sm:px-8"}>
            <h1 className={"text-lg font-medium pt-8 pb-20 sm:text-min "}>Our Services</h1>
            <div className={"flex justify-between text-black gap-10 sm:grid sm:grid-cols-1 sm:gap-y-20"}>
                {service.map((service_data) => (
                    <div key={service_data.id}
                         className={"bg-secondary pt-16 pb-10 px-10 rounded-2xl w-full relative group hover:bg-hovered cursor-pointer transition"}>
                        <div
                            className={"absolute -top-7 left-36 bg-white py-4 px-6 shadow-sm rounded-tl-2xl border-white rounded-br-2xl sm:left-32 group-hover:border-hovered border"}>
                            <img src={service_data.icon} alt={"icon"} width={30} height={30} objectFit={"contain"}
                            />
                        </div>
                        <h2 className={"text-med font-bold pt-10 sm:text-mobilebase group-hover:text-white"}>{service_data.title}</h2>
                        <h6 className={"text-base pt-8 group-hover:text-white"}>{service_data.content}</h6>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;