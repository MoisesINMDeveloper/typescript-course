export enum ROLES {
    ADMIN = "admin",
    SELLER = "seller",
    CUSTOMER = "customer"
}

export interface User {
    username: string;
    role: ROLES;
}

export const moiUser: User = {
    username: "MINMDEV",
    role: ROLES.ADMIN
}