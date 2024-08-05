export interface StoreState {
    login: boolean;
    headerState: boolean;
    username: string;
    date: string;
    changeHeaderState: (newState: boolean) => void;
    updateUser: (datas: User) => void
    closeSesion: () => void;
}

export interface User {
    username: string,
    date: string;
}