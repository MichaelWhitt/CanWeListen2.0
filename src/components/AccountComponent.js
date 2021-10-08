import react, { useState } from "react";
import * as scripts from "../accountpage";
import AccountCard from "./AccountCard";
import AccountInfo from "./AccountInfo";
import AccountContributions from "./AccountContributions";
import AccountInfoTable from "./AccountInfoTable";


export const emailText = document.getElementById("emailText");
export const emailEditBtn = document.getElementById("emailEdit");
export const emailDiv = document.getElementById("emailDiv");
export const saveEmailBtn = document.createElement("button");

export const locationText = document.getElementById("locationText");
export const locationEditBtn = document.getElementById("locationEdit");
export const locationDiv = document.getElementById("locationDiv");
export const saveLocationBtn = document.createElement("button");

export const linkedInText = document.getElementById("linkedInText");
export const linkedInEditBtn = document.getElementById("linkedInEdit");
export const linkedInDiv = document.getElementById("linkedInDiv");
export const saveLinkedInBtn = document.createElement("button");
export const linkedInTextDiv = document.getElementById("linkedInTextDiv");







function Account (props){


    return(
    <>
            <div class="container">
                <div class="row">
                    <div class="col col-4">
                        <AccountCard/>
                          
                    </div>
                    <div class="col col-8">
                        <AccountInfoTable/>
                        {/* <AccountInfo/> */}
                        <AccountContributions/>
                    </div>
                    
                    </div>
                </div>
            
            
</>
    )
}

export default Account;