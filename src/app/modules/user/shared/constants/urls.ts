const BaseUrl:string = 'http://localhost:2000/';

export const getOtpUrl:string = `${BaseUrl}getOtp`;
export const verifyOtpUrl:string = `${BaseUrl}signUp`;
export const resendOtpUrl:string = `${BaseUrl}resendOtp`; 
export const userSignInUrl:string = `${BaseUrl}signIn`; 
export const getAllDepUrl:string = `${BaseUrl}getDepartments`;
export const getDoctorsUrl:string = `${BaseUrl}getDoctors`;
export const createAppointmentUrl:string = `${BaseUrl}bookAppoinment`;
export const initiallizePayUrl:string = `${BaseUrl}initializePayment/`;
export const verifyPayUrl:string = `${BaseUrl}verifyPayment`;
export const cancelAppointmentUrl:string = `${BaseUrl}cancelAppointment/`;
export const getHistoryUrl:string = `${BaseUrl}getAppointmentHistory`;
export const getUserUrl:string = `${BaseUrl}getUserDetails`;
export const getAppointmentsUrl:string = `${BaseUrl}getAppointments`;