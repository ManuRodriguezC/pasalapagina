import useStore from "@/app/store/store"
import { useState } from "react"
import ControlLogin from "./ControlLogin"
import LoginEmail from "./LoginEmail"
import LoginPhone from "./LoginPhone"

export default function Login({ setState, state}: any) {

    const { changeHeaderState, headerState } = useStore()
    const [viewSection, setViewSection] = useState(0)

    const handleState = () => {
        setState(!state)
        changeHeaderState(false)
    }

    return (
        <div className="flex flex-col justify-center items-center">
            {!headerState&&<ControlLogin view={setViewSection}/>}
            {headerState&&viewSection==1&&<LoginPhone />}
            {headerState&&viewSection==2&&<LoginEmail />}
            <div className="flex flex-row gap-2 text-bold text-lg">
                <p>¿Aún no tienes una cuenta?</p>
                <button
                    onClick={handleState}
                    className="bg-transparent border-0 text-lg text-[#24ADD6] border-b-2
                    border-[#24ADD6] hover:scale-105 duration-300"
                    > Regístrarse</button>
            </div>
        </div>
    )
}