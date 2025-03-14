import React from "react";
import {SignIn} from '@clerk/clerk-react'


function Signin(){
    return (
        <div className="d-flex justify-content-center align-items-center h-10">
            <SignIn/>
        </div>
    )
}

export default Signin;