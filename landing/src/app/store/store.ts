import { create } from "zustand";
import { StoreState, User } from "./types";

const useStore = create<StoreState>((set) => ({
    login: false,
    headerState: false,
    changeHeaderState: (newState: boolean) => set(() => ({
        headerState: newState
    })),
    username: "",
    date: "",
    updateUser: (datas: User, log: boolean) => set(() => ({
        username: datas.username,
        date: datas.date,
        login: log
    }))
}))

export default useStore;