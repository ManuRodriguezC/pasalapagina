import { useState } from "react"
import useStore from "../../store/store"
import ControlRegister from "./ControlRegister"
import RegisPhone from "./RegisterPhone"
import RegisEmail from "./RegisterEmail"

export default function Register({ setState, state} :any) {

    const { changeHeaderState, headerState } = useStore()
    const [viewSection, setViewSection] = useState(0)

    const handleState = () => {
        setState(!state)
        changeHeaderState(false)
    }

    return (
        <div className="w-full flex flex-col justify-center items-center">
            {!headerState&&<ControlRegister view={setViewSection}/>}
            {headerState&&viewSection==1&&<RegisPhone />}
            {headerState&&viewSection==2&&<RegisEmail />}
            <button
            onClick={handleState}
                className="bg-transparent border-0 font-semibold text-2xl text-[#24ADD6] border-b-2
                border-[#24ADD6] mt-4 hover:scale-105 duration-300">
                Ya tengo una cuenta
            </button>
        </div>
    )
}