import react, { useState } from "react";
import * as scripts from "../accountpage";
import AccountCard from "./AccountCard";
import AccountTabs from "./AccountTabs";


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
                        <AccountTabs/>   
                    </div>
                    {/* <div id="accountNavTabs" class="col col-8">
                        <nav >
                            <div class="nav nav-tabs" id="nav-tab" role="tablist">
                            <button class="nav-link active" id="navAccountTab" data-bs-toggle="tab" data-bs-target="#navAccount" type="button" role="tab" aria-controls="navAccount" aria-selected="true"><i class="fas fa-user" id="acctTabIcons"></i>Account</button>
                            <button class="nav-link" id="navContributionsTab" data-bs-toggle="tab" data-bs-target="#navContributions" type="button" role="tab" aria-controls="navProfile" aria-selected="false"><i class="fas fa-chart-bar" id="acctTabIcons"></i>Contributions</button>
                            <button class="nav-link" id="navOtherTab" data-bs-toggle="tab" data-bs-target="#navOther" type="button" role="tab" aria-controls="navOther" aria-selected="false"><i class="fas fa-dungeon" id="acctTabIcons"></i>Other</button>
                            </div>
                        </nav>
                        <div class="tab-content" id="nav-tabContent">
                            <div class="tab-pane fade show active" id="navAccount" role="tabpanel" aria-labelledby="navAccountTab">
                                <div class="container mt-5">
                                    <div class="row" >
                                        <hr/>
                                        <div class="col-2" ><b>Email:</b></div>
                                        <div class="col-8" style={{borderLeft: "1px solid aqua; height: 50%"}} id="emailText">your email here</div>
                                        <div class="col-2 pb-2" id="emailDiv"><button class="btn btn-sm btn-primary" id='emailEdit'>Edit</button>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <hr/>
                                        <div class="col-2"><b>Location:</b></div>
                                        <div class="col-8" style={{borderLeft: "1px solid aqua; height: 50%"}} id="locationText">Dallas, TX</div>
                                        <div class="col-2 pb-2" id="locationDiv"><button class="btn btn-sm btn-primary" id="locationEdit" onclick="changeLocation()">Edit</button></div>
                                    </div>
                                    <div class="row">
                                        <hr/>
                                        <div class="col-2"><b>LinkedIn:</b></div>
                                        <div class="col-8" style={{borderLeft: "1px solid aqua; height: 50%"}} id="linkedInTextDiv"><a id="linkedInText" href="https://www.linkedin.com/in/michael-whitt-6514b475/" style={{color:"white"}}>Michael Whitt</a></div>
                                        <div class="col-2 pb-2" id="linkedInDiv"><button class="btn btn-sm btn-primary" id="linkedInEdit" onclick="changeLinkedIn()">Edit</button></div>
                                        <hr/>
                                    </div>
                                </div>
                                
                            </div>
                            <div class="tab-pane fade" id="navContributions" role="tabpanel" aria-labelledby="navContributionsTab">
                                <div class="container">
                                    <div class="row mt-5">
                                        <div>Recent Contributions</div>
                                        <div>
                                            <img src="#" width="150px" height="150px"/>
                                            <img src="#" width="150px" height="150px"/>
                                            <img src="#" width="150px" height="150px"/>
                                        </div>
                                    </div>
                                    <div class="row mt-3">
                                        <div class="col">
                                            <button class="btn btn-success" onClick={scripts.addContribution}>Add contribution</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="navOther" role="tabpanel" aria-labelledby="navOtherTab">Other Info</div>
                        </div> */}
                    </div>
                </div>
            
            
</>
    )
}

export default Account;