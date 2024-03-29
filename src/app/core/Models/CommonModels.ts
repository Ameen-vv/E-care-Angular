export interface NavList{
    name:string;
    path:string;
};

export interface DepModel{
    _id:string;
    name:string;
    commonDiseases:string[];
    imageUrl:string;
    list:boolean;
    description:string;
    doctors:string[];
};

export interface UserModel{
    _id:string;
    fullName:string;
    phone:string;
    email:string;
    dateOfBirth:Date;
    block:boolean;
    createdAt:Date;
    profilePic?:string;
    address:string;

};


export interface DoctorModel{
    _id:string;
    fullName:string;
    phone:string;
    email:string;
    dateOfBirth:Date;
    qualification:string;
    address:string;
    hospital:string;
    timings:DocTimings[];
    verification:"success" | "pending" | "rejected";
    block:boolean;
    department:DepModel;
    licenseUrl:string;
    bio:string;
    experience:number;
    priceOnline:number;
    priceOffline:number;
    profilePic?:string;
};

export interface DocTimings{
    day:string;
    startTime:string;
    endTime:string;
    slots:string;
};


export interface AppointmentModel{
    _id:string;
    doctorId:DoctorModel;
    patientId:UserModel;
    slot:string;
    paymentStatus:boolean;
    date:Date;
    status:'booked'|'cancelled'|'unVisited';
    createdAt:Date;
    price:number;
    paymentId:string;
    paymentMode:'online'|'wallet';
}

