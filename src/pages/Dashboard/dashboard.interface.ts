export interface IClientAllInfo {
    id: string;
    fullName: string;
    email: string;
    telephone: string;
    createAt: string;
    contacts: Array<IContact>;
}

export interface IContact {
    id: string;
    fullName: string;
    email: string;
    telephone: string;
}
