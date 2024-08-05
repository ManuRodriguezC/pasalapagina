import { addUser, loginUser } from "@/app/api/resgiter";
import useStore from "@/app/store/store";
import { useState } from "react";

export default function LoginPhone() {
    const [controlCheck, setControlCheck] = useState(false);
    const { updateUser, changeHeaderState } = useStore()
    const [errorText, setErrorText] = useState("")

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setControlCheck(event.target.checked);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const fields = Object.fromEntries(new window.FormData(event.target as HTMLFormElement));
        const { phone, date } = fields
        const datas = {
            phone: phone.toString(),
            date: date.toString(),
        }

        const request = await loginUser(datas)
        if (request.response.user) {
            updateUser(request.response.user)
            changeHeaderState(false)
        } else {
            setErrorText(request.response.message)
        }
    };

    return (
        <form className="w-[500px] flex flex-col justify-center items-center" onSubmit={handleSubmit}>
            <p className="text-2xl text-center font-semibold">Ingresa tus datos para registrarte</p>
            <div className="flex flex-col text-xl py-6 justify-center items-center gap-4">
                <div className="flex flex-row justify-between gap-4">
                    <select className="border-2 border-gray-400/70 bg-gray-100 px-6 py-3 shadow-lg"
                        name="country" id="country" required>
                        <option value="+57">+57</option>
                        <option value="+34">+34</option>
                        <option value="+32">+32</option>
                        <option value="+51">+51</option>
                        <option value="+29">+29</option>
                    </select>
                    <input
                        className="bg-gray-100 border-gray-400/70 border-2 py-4 px-4 w-[370px] shadow-lg"
                        placeholder="Número de celular" type="number" name="phone" id="phone" required/>
                </div>
                <input
                    className="bg-gray-100 border-gray-400/70 border-2 py-4 px-4 w-full shadow-lg"
                    type="date" name="date" id="date" placeholder="Fecha de nacimiento" required/>
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
    )
}