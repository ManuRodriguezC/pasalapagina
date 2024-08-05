import { create } from "zustand";
import { StoreState, User } from "./types";

const useStore = create<StoreState>((set) => ({
    login: false,
    headerState: false,
    username: "",
    date: "",
    changeHeaderState: (newState: boolean) => set(() => ({
        headerState: newState
    })),
    updateUser: (datas: User) => set(() => ({
        username: datas.username,
        date: datas.date,
        login: true
    })),
    closeSesion: () => set(() => ({
        username: "",
        date: "",
        login: false
    }))
}))

export default useStore;