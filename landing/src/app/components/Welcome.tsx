"use client"

import Image from "next/image";
import Controls from "./Controls";
import useStore from "../store/store";
import { descuento } from "../utils/descuento";
import { setValue } from "../utils/setValue";
import Compra from "./Compra";

export default function Welcome() {

    const { login, username, date } = useStore()

    return (
        <div className="flex font-poppins flex-row h-[calc(100vh-80px)] w-full">
            <div className="relative w-[50%] h-full">
                <Image 
                    src="/images/poster.png" 
                    alt="poster" 
                    layout="fill" 
                    objectFit="cover" 
                />
                {login&&
                <div className="relative w-full h-full flex flex-col items-center
                justify-center bg-[#091312]">
                    <div>
                        <h3 className="text-5xl text-center px-2 py-1 font-bold text-yellow-300 bg-red-500">¡FELICITACIONES!</h3>
                        <h3 className="text-white text-center text-6xl font-bold m-2">{username.split(" ")[0]}</h3>
                    </div>
                    <div className="w-[60%] m-8">
                        <p className="text-white text-4xl font-bold text-center">tienes un <span className="text-yellow-300 text-5xl">{descuento(date, 342000).porcentaje.toFixed(2)} %</span> de descuento en la compra de tu</p>
                        <p className="text-yellow-300 text-5xl text-center font-bold font-mono">SUSCRIPCION</p>
                        <p className="text-yellow-300 text-5xl text-center font-bold font-mono">ANUAL</p>
                    </div>
                    <div className="">
                        <p className="text-white text-4xl text-center font-bold">Tu precio es: <span  className="text-yellow-300">$ {setValue(descuento(date, 342000).total.toString())}</span></p>
                        <p className="text-white text-3xl text-center font-bold">en vez de: <span className="text-yellow-300">$ 342.000</span></p>
                    </div>
                </div>
                }
            </div>
            <div className="w-[50%] flex flex-col text-3xl justify-center items-center px-12">
                {!login&&<p className="w-[400px] text-center">Cientos de revistas para leer y escuchar en nuestro Kiosco Digital</p>}
                {!login&&<div className="bg-black/90 w-[500px] h-[2px] my-10"></div>}
                {
                    login
                    ?
                    <Compra />
                    :
                    <Controls />
                }
            </div>
        </div>
    )
}
