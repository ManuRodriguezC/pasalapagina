import { useState } from "react"
import Register from "./Register/Register"
import Login from "./Login/Login"

export default function Controls() {
    const [state, setState] = useState(false)

    if (state) {
        return <Login setState={setState} state={state}/>
    } else {
        return <Register setState={setState} state={state}/>
    }
}