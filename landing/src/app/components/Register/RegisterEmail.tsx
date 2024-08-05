import { addUser } from "@/app/api/resgiter";
import useStore from "@/app/store/store";
import React, { useState } from "react";

export default function RegisEmail() {
    const [controlCheck, setControlCheck] = useState(false);
    const { updateUser } = useStore()
    const [errorText, setErrorText] = useState("")

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setControlCheck(event.target.checked);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const fields = Object.fromEntries(new window.FormData(event.target as HTMLFormElement));
        const { name, email, date } = fields
        const datas = {
            username: name.toString(),
            email: email.toString(),
            date: date.toString(),
        }

        const request = await addUser(datas)
        if (request.response.user) {
            updateUser(request.response.user, true)
        } else {
            setErrorText(request.response.message)
        }
    };

    return (
        <form className="w-[500px] flex flex-col justify-center items-center" onSubmit={handleSubmit}>
            <p className="text-2xl text-center font-semibold">Ingresa tus datos para registrarte</p>
            <div className="flex flex-col w-full px-4 text-xl py-6 justify-center items-center gap-4">
                <input
                    className="bg-gray-100 border-gray-400/70 border-2 py-4 px-4 w-full shadow-lg"
                    type="text" name="name" id="name" placeholder="Nombre y Apellido" required
                />
                <input
                    className="bg-gray-100 border-gray-400/70 border-2 py-4 px-4 w-full shadow-lg"
                    type="email" name="email" id="email" placeholder="Correo electrónico" required
                />
                <input
                    className="bg-gray-100 border-gray-400/70 border-2 py-4 px-4 w-full shadow-lg"
                    type="date" name="date" id="date" placeholder="Fecha de nacimiento" required
                />
            </div>
            <div className="flex flex-row justify-center gap-4 text-xl">
                <input
                    type="checkbox"
                    name="terminos"
                    id="terminos"
                    checked={controlCheck}
                    onChange={handleCheckboxChange}
                    required
                />
                <p className="text-md text-gray-500">Acepto los términos y condiciones</p>
            </div>
            <button
                className={`text-xl font-semibold px-24 py-6 rounded-full border-1 border-slate-400 bg-[#E5E5E5]
                    ${controlCheck ? 'text-gray-400/70 hover:bg-[#24ADD6] hover:text-white duration-300' : 'text-gray-400 cursor-not-allowed opacity-50'}
                    m-10`}
                    disabled={!controlCheck}
                    >
                Continuar
            </button>
            {errorText.length > 0 && <span className="text-center text-sm">{errorText}</span>}
        </form>
    );
}
