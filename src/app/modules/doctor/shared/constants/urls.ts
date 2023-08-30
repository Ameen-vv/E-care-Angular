const BaseUrl:string = 'https://ecare-server-final.onrender.com/doctor/';

export const getDepUrl:string = `${BaseUrl}getDepartments`;
export const docSignUpUrl:string = `${BaseUrl}signUp`;
export const docSignInUrl:string = `${BaseUrl}signIn`;
export const appointmentsUrl:string = `${BaseUrl}getAppointments`;
export const docProfileUrl:string = `${BaseUrl}getDocDetails`;
export const AppntVisitedUrl:string = `${BaseUrl}visitedAppointment/`;
export const AppntUnVisitedUrl:string = `${BaseUrl}UnVisitedAppointment/`;
export const AppntCancelUrl:string = `${BaseUrl}cancelAppointment/`;
export const addTimeUrl:string = `${BaseUrl}editTime`;
export const delTimeUrl:string = `${BaseUrl}deleteSlot`;
