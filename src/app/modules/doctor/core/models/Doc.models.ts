import { FormGroup } from "@angular/forms";

export interface IDocSignUp{
    fullName:string;
    phone:string;
    email:string;
    dateOfBirth:string;
    qualification:string;
    address:string;
    hospital:string;
    password:string;
    department:string;

}

export interface IFormDatModel{
    data:FormGroup,
    image:File
}