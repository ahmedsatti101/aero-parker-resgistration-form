import React, {useState} from "react";
import {Routing} from "./components/Routes/Routing.tsx";
import {addCustomerDetails} from "./api.ts";

const App = () => {
const [customer, setCustomer] = useState<any>();
    const handleAddCustomer = async (email: string, title: string, firstName: string, lastName: string, addressLineOne: string, addressLineTwo: string | undefined, city: string | undefined, postcode: string, phoneNumber: string | undefined) => {
        try {
            const newCustomer = await addCustomerDetails(email, title, firstName, lastName, addressLineOne, addressLineTwo, city, postcode, phoneNumber);
            setCustomer(newCustomer);
        } catch (err) {
            console.log(err, "in App.tsx")
        }
    };
  return (
    <div>
      <Routing handleAddCustomer={handleAddCustomer}/>
    </div>
  );
};

export default App;