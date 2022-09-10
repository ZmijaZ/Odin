//needed in order to useState in Main for cv
import { v4 as uuidv4 } from 'uuid'
import emptyAvatar from './empty_avatar.png'
const emptyCv = {

    personalInfo: {
        firstName: "John",
        lastName: "Doe",
        title: "lawyer",
        photo: emptyAvatar,
        aboutMe: "LoremLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    contactInfo: {
        phoneNumber: "123456789",
        email: "anavolimilovana@mail.com",
        address: "Abbey road 21",
    },
    schoolInfo: [
        {
            id: uuidv4(),
            schoolName: "MIT",
            city: "Boston",
            major: "Arts",
            degree: "Bachelors",
            from: "october 2016",
            to: "december 2020"
        }
    ],
    jobInfo: [
        {
            id: uuidv4(),
            companyName: "Microsoft",
            title: "arts director",
            from: "december 2020",
            to: "august 2025"
        }
    ],
}

export {emptyCv}