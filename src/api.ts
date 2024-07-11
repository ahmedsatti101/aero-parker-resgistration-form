import axios from "axios";

export const addCustomerDetails = (email: string, title: string, firstName: string, lastName: string, addressLineOne: string, addressLineTwo: string | undefined, city: string | undefined, postcode: string, phoneNumber: string | undefined) => {
    return axios.post("http://localhost:5000/registration", { email, title, firstName, lastName, addressLineOne, addressLineTwo, city, postcode, phoneNumber })
        .then((response) => {
            return response.data;
        })
        .catch((err) => {
            console.log(err);
        })
};