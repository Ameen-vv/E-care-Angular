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

export interface HeroBanner{
    title:string;
    subtitle:string;
    image:string;
}

export interface CreateOrder{
    date:Date,
    time:string,
    doctorId:string
}

export interface PaymentVerification{
    razorpay_order_id:string;
    razorpay_payment_id:string;
    razorpay_signature:string;
}

export interface WalletModel{
    _id:string;
    userId:string;
    transactions:TransactionModel[];
    balance:number;
}

export interface TransactionModel{
    _id:string;
    amount:number;
    date:Date;
    transactionType:'credit'|'debit';
}

