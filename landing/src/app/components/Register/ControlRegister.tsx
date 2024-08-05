import useStore from "../../store/store"

export default function ControlRegister({view}: any) {
    const { changeHeaderState, headerState } = useStore()

    const handelClick = (number: number) => {
        changeHeaderState(true)
        view(number)
    }

    return (
        <div className="flex flex-col gap-6 justify-center items-center mb-12">
            <p className="mt-4 mb-2">Registrate y continúa</p>
            <button
                    onClick={() => handelClick(1)}
                    className="text-gray-400 text-xl font-semibold px-28 py-5 rounded-full border-2 border-slate-300 bg-[#f6f6f6]
                    hover:bg-[#24ADD6] hover:text-white duration-300"> 
                    Con tu celular
            </button>
            <div className="flex flex-row justify-center items-center">
                    <p className="h-[1px] w-[105px] bg-gray-500"></p>
                    <p className="text-xl font-normal px-2">o</p>
                    <p className="h-[1px] w-[105px] bg-gray-500"></p>
            </div>
            <button
                    onClick={() => handelClick(2)}
                    className="text-gray-400 text-xl font-semibold px-28 py-5 rounded-full border-2 border-slate-300 bg-[#f6f6f6]
                    hover:bg-[#24ADD6] hover:text-white duration-300"> 
                    Con tu email
            </button>
        </div>
    )
}