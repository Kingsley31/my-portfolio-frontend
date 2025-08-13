import { PersonalDetail } from "./type";


export function getPersonalDetails(): PersonalDetail {
    return {
        firstName: "Chukwuemeka",
        middleName: "Kingsley",
        lastName: "Ufoegbulam",
        email: "kingsleyemeka31@gmail.com",
        phone: "+2348068489230",
    } as PersonalDetail;
}