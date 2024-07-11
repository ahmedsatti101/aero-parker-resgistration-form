import {Route, Routes} from "react-router-dom";
import {PostCustomer} from "../PostCustomer.tsx";
import {SuccessPage} from "../SuccessPage.tsx";
import React from "react";

type Prop = {
    handleAddCustomer: Function
};

export function Routing({handleAddCustomer}: Prop) {
    return (
        <>
            <Routes>
                <Route path="/registration" element={<PostCustomer handleAddCustomer={handleAddCustomer}/>}/>
                <Route path="/success" element={<SuccessPage/>}/>
            </Routes>
        </>
    );
}