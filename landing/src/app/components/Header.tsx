"use client"

import Image from "next/image";
import useStore from "../store/store";
import Back from "@/icons/Back";

export default function Header() {
    
    const { headerState, changeHeaderState, login, closeSesion } = useStore()

    const handleClickClose = () => {
        closeSesion()
        changeHeaderState(false)
    }

    return (
        <header className="w-full h-20 bg-[#0C3440] flex justify-around items-center duration-300">
            {
                headerState
                &&
                <button
                    className="flex flex-row text-white text-lg text-center"
                    onClick={() => changeHeaderState(false)}>
                        <Back />
                        <p>Volver</p>
                </button>
            }
            <Image src={'/images/name.png'} alt="nametitle" width={230} height={50}/>
            {login&&<button className="text-white" onClick={handleClickClose}>Cerrar Sesión</button>}
        </header>
    )
}
