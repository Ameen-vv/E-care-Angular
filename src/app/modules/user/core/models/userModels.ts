export interface UserSignIn{
    email:string;
    password:string;
}

export interface UserRegister extends UserSignIn{
    fullName:string;
    phone:string;
    dateOfBirth:string;
    confirmPass?:string;
    address:string;
}