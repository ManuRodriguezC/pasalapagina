export default function Login({ setState, state}: any) {
    return (
        <div className="flex flex-col justify-center items-center">
            <p className="text-center">Iniciar Sesión</p>
            <div className="flex flex-col justify-center items-center py-8">
            <button
                    className="text-gray-400 text-xl font-semibold px-28 py-5 rounded-full border-2 border-slate-300 bg-[#f6f6f6]
                    hover:bg-[#24ADD6] hover:text-white duration-300"> 
                    Con tu celular
                </button>
                <div className="flex flex-row p-4 justify-center items-center">
                    <p className="h-[1px] w-[105px] bg-gray-500"></p>
                    <p className="text-xl font-normal px-2">o</p>
                    <p className="h-[1px] w-[105px] bg-gray-500"></p>
                </div>
                <button
                    className="text-gray-400 text-xl font-semibold px-28 py-5 rounded-full border-2 border-slate-300 bg-[#f6f6f6]
                    hover:bg-[#24ADD6] hover:text-white duration-300">   
                    Con tu email
                </button>
            </div>
            <div className="flex flex-row gap-2 text-bold text-lg">
                <p>¿Aún no tienes una cuenta?</p>
                <button
                    onClick={() => setState(!state)}
                    className="bg-transparent border-0 text-lg text-[#24ADD6] border-b-2
                    border-[#24ADD6] hover:scale-105 duration-300"
                    > Regístrarse</button>
            </div>
        </div>
    )
}