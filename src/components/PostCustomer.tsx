import React, { useState } from "react";

type Prop = {
    handleAddCustomer: Function
};

export function PostCustomer({handleAddCustomer}: Prop) {
    const [email, setEmail] = useState<string>();
    const [title, setTitle] = useState<string>();
    const [firstName, setFirstName] = useState<string>();
    const [lastName, setLastName] = useState<string>();
    const [addressLineOne, setAddressLineOne] = useState<string>();
    const [addressLineTwo, setAddressLineTwo] = useState<string>();
    const [city, setCity] = useState<string>();
    const [postcode, setPostcode] = useState<string>();
    const [phoneNumber, setPhoneNumber] = useState<string>();

    const handleSetEmail = (e: any) => {
        setEmail(e.target.value);
    }

    const handleSetTitle = (e: any) => {
        setTitle(e.target.value);
    }

    const handleSetFirstName = (e: any) => {
        setFirstName(e.target.value);
    }

    const handleSetLastName = (e: any) => {
        setLastName(e.target.value);
    }

    const handleSetAddressLineOne = (e: any) => {
        setAddressLineOne(e.target.value);
    }

    const handleSetAddressLineTwo = (e: any) => {
        setAddressLineTwo(e.target.value);
    }

    const handleSetCity = (e: any) => {
        setCity(e.target.value);
    }

    const handleSetPostcode = (e: any) => {
        setPostcode(e.target.value);
    }

    const handleSetPhoneNumber = (e: any) => {
        setPhoneNumber(e.target.value);
    }

    const handleSubmit = async (e: any) => {
        try {
            e.preventDefault();
            const newCustomer = {
                email,
                title,
                firstName,
                lastName,
                addressLineOne,
                addressLineTwo,
                city,
                postcode,
                phoneNumber
            };

            handleAddCustomer(newCustomer.email, newCustomer.title, newCustomer.firstName, newCustomer.lastName, newCustomer.addressLineOne, newCustomer.addressLineTwo, newCustomer.city, newCustomer.postcode, newCustomer.phoneNumber);
            setEmail("");
            setTitle("");
            setFirstName("");
            setLastName("");
            setAddressLineOne("");
            setAddressLineTwo("");
            setCity("");
            setPostcode("");
            setPhoneNumber("");
            setTimeout(() => {
                window.location.href = "/success";
            }, 1000)

        } catch (err: any) {
            console.log(err, "in PostComment.tsx")
        }
    }

    return (
        <>
            <h1>Create an account at AeroParker</h1>
            <form onSubmit={handleSubmit}>
                <label>Email address:</label><br/>
                <input type="text" onChange={handleSetEmail} value={email}/><br/>
                <label>Title:</label><br/>
                <input type="text" onChange={handleSetTitle} value={title}/><br/>
                <label>First name:</label><br/>
                <input type="text" onChange={handleSetFirstName} value={firstName}/><br/>
                <label>Last name:</label><br/>
                <input type="text" onChange={handleSetLastName} value={lastName}/><br/>
                <label>Address Line 1:</label><br/>
                <input type="text" onChange={handleSetAddressLineOne} value={addressLineOne}/><br/>
                <label>Address Line 2:</label><br/>
                <input type="text" onChange={handleSetAddressLineTwo} value={addressLineTwo}/><br/>
                <label>City:</label><br/>
                <input type="text" onChange={handleSetCity} value={city}/><br/>
                <label>Postcode:</label><br/>
                <input type="text" onChange={handleSetPostcode} value={postcode}/><br/>
                <label>Phone number:</label><br/>
                <input type="text" onChange={handleSetPhoneNumber} value={phoneNumber}/><br/>
                <input type="submit" value="Submit"/>
            </form>
        </>
    )
}