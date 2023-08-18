const BaseUrl:string = 'http://localhost:2000/doctor/';

export const getDepUrl:string = `${BaseUrl}getDepartments`;
export const docSignUpUrl:string = `${BaseUrl}signUp`;
export const docSignInUrl:string = `${BaseUrl}signIn`;
export const appointmentsUrl:string = `${BaseUrl}getAppointments`;
export const docProfileUrl:string = `${BaseUrl}getDocDetails`;
export const AppntVisitedUrl:string = `${BaseUrl}visitedAppointment/`;
export const AppntUnVisitedUrl:string = `${BaseUrl}UnVisitedAppointment/`;
export const AppntCancelUrl:string = `${BaseUrl}cancelAppointment/`;
