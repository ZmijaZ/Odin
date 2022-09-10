//needed in order to useState in Main for cv
import { v4 as uuidv4 } from 'uuid'

const emptyCv = {

    personalInfo: {
        firstName: "",
        lastName: "",
        title: ""
    },
    contactInfo: {
        phoneNumber: "",
        email: "",
        address: "",
    },
    schoolInfo: [
        {
            id: uuidv4(),
            schoolName: "",
            major: "",
            from: "",
            to: ""
        }
    ],
    jobInfo: [
        {
            id: uuidv4(),
            companyName: "",
            title: "",
            from: "",
            to: ""
        }
    ],
}

export {emptyCv}