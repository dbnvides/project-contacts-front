export interface IClientAllInfo {
    id: string;
    fullName: string;
    email: string;
    telephone: string;
    createAt: string;
    contacts: Array<IContact>;
}

export interface IClientUpdateInfo {
    fullName: string;
    email: string;
    telephone: string;
    password: string;
}

export interface IContact {
    id: string;
    fullName: string;
    email: string;
    telephone: string;
}
