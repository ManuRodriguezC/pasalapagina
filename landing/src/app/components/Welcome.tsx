"use client"

import Image from "next/image";
import { useState } from "react";
import Login from "./Login";
import Register from "./Register/Register";

export default function Welcome() {

    const [state, setState] = useState(false)

    return (
        <div className="flex font-poppins flex-row h-[calc(100vh-80px)] w-full">
            <div className="relative w-[50%] h-full">
            <Image 
                src="/images/poster.png" 
                alt="poster" 
                layout="fill" 
                objectFit="cover" 
            />
            </div>
            <div className="w-[50%] flex flex-col text-3xl justify-center items-center px-12">
                <p className="w-[400px] text-center">Cientos de revistas para leer y escuchar en nuestro Kiosco Digital</p>
                <div className="bg-black/90 w-[500px] h-[2px] my-10"></div>
                {
                    state
                    ?
                    <Login setState={setState} state={state}/>
                    :
                    <Register setState={setState} state={state}/>
                }
            </div>
        </div>
    )
}
