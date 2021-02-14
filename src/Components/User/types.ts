export enum AccessLevel {
    Admin  = "admin",
	Write             = "write",
	Read              = "read",
}

export interface NewUser {
    email:string;
    accessLevel: AccessLevel;
}

export interface NewUserByUsername {
    username:string;
    accessLevel: AccessLevel;
}

export interface User {
    username: string;
    userId: string;
    accessLevel: AccessLevel;
}