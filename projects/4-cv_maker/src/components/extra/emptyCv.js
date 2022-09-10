//needed in order to useState in Main for cv
import { v4 as uuidv4 } from 'uuid'
import emptyAvatar from './empty_avatar.png'
const emptyCv = {

    personalInfo: {
        firstName: "",
        lastName: "",
        title: "",
        photo: emptyAvatar,
        aboutMe: ""
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
            city: "",
            major: "",
            degree: "",
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