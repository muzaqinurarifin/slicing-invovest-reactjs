export type User = {
    id: Int16Array,
    name: string,
    email: string,
    role: string
}

export type LoginResponse = {
    user: User; 
    token: string // karena token berupa string
}

export type LoginInput = {
    email: string;
    password: string;
}