
import React from "react";

import contactDetails from "../data/contact.json"

export default function Contact() {
    return (
        <div className=" h-screen">
            {/* <Head>
                <title>Contact</title>


            </Head> */}
          
            <div
                className={"text-secondary text-base bg-primary h-screen grid grid-cols-1 gap-y-28 pt-16"}>
                <div>
                    <h1 className={"py-16 font-medium text-lg text-center sm:text-min"}>Get In Touch</h1>

                    <div className={"flex flex-wrap text-center gap-x-4 gap-y-20 w-1/2 mx-auto sm:w-4/5 sm:gap-y-10"}>
                        {
                            contactDetails.map((detail) => (
                                <div key={detail.id}
                                     className={"border flex py-7 px-7 rounded-lg justify-between w-sm mx-auto items-center align-baseline cursor-pointer sm:w-full hover:shadow-md "}>
                                    <div className={"w-12 sm:w-5"}>
                                        <img src={detail.icon} alt={detail.content} width={30} height={30}/>

                                    </div>
                                    <h5 className={"text-center text-med sm:text-mobilebase"}><a
                                        href={detail.link}>{detail.content}</a>
                                    </h5>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <footer className={"text-center "}>
                    <p className={"opacity-50 font-med"}>&copy; 2022, Boxbay All rights reserved.</p>
                </footer>
            </div>

        </div>
    );
}