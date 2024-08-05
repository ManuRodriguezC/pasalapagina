import useStore from "../store/store";
import { descuento } from "../utils/descuento";
import { setValue } from "../utils/setValue";

export default function Compra() {

    const { date } = useStore()

    return (
        <div className="w-[50%] flex flex-col items-center">
            <p className="text-black text-3xl text-center">Realiza el pago con tu cuenta débito bancaria</p>
            <div className="flex flex-row justify-between items-center m-6">
                <p className="text-black font-bold text-2xl">PSE</p>
                <p className="text-blue-400 font-extralight text-2xl">pse</p>
            </div>
            <div className="h-[2px] w-full bg-gray-500 my-8"></div>
            <ul className="text-gray-600 text-lg mx-8 list-disc">
                <li>Pago único</li>
                <li>Sin renovación automática</li>
            </ul>
            <div className="flex flex-row w-full text-xl my-8 text-white justify-between bg-[#FF4343] py-2 px-4">
                <p>Total:</p>
                <p>$ {setValue(descuento(date, 342000).total.toString())}</p>
            </div>
            <p className="text-base text-center">Al hacer clic en "PAGAR" estas aceptando los <span className="text-[#24ADD6]">Términos y Condiciones</span> de la Prómicion</p>
            <button
                className="text-gray-400 text-xl font-semibold px-28 py-5 rounded-full border-2 border-slate-300 bg-[#f6f6f6]
                hover:bg-[#F4822A] hover:text-white duration-300 mt-8"> 
                Continuar
            </button>
        </div>
    )
}