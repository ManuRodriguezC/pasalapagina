export interface StoreState {
    login: boolean;
    headerState: boolean;
    changeHeaderState: (newState: boolean) => void;
    username: string;
    date: string;
    updateUser: (datas: User, log: boolean) => void
}

export interface User {
    username: string,
    date: string;
}