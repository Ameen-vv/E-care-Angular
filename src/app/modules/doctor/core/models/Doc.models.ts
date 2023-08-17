import { FormGroup } from "@angular/forms";

export interface DocSignUp{
    fullName:string;
    phone:string;
    email:string;
    dateOfBirth:string;
    qualification:string;
    address:string;
    hospital:string;
    password:string;
    department:string;
    certificate:File

}

export interface FormDatModel{
    data:FormGroup,
    image:File
}