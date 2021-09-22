// export const emailText = document.getElementById("emailText");
// export const emailEditBtn = document.getElementById("emailEdit");
// export const emailDiv = document.getElementById("emailDiv");
// export const saveEmailBtn = document.createElement("button");

// export const locationText = document.getElementById("locationText");
// export const locationEditBtn = document.getElementById("locationEdit");
// export const locationDiv = document.getElementById("locationDiv");
// export const saveLocationBtn = document.createElement("button");

// export const linkedInText = document.getElementById("linkedInText");
// export const linkedInEditBtn = document.getElementById("linkedInEdit");
// export const linkedInDiv = document.getElementById("linkedInDiv");
// export const saveLinkedInBtn = document.createElement("button");
// export const linkedInTextDiv = document.getElementById("linkedInTextDiv");

// export const progressBar = document.getElementById("progressBar");

// export const changeEmail = function (){
    
//     emailText.innerHTML = "<input type='text' id='newEmailValue'></input>";
//     emailEditBtn.style.display = "none";
//     saveEmailBtn.setAttribute("class", "btn btn-success btn-sm");
//     saveEmailBtn.setAttribute("id", "saveEmailBtn");
//     saveEmailBtn.setAttribute("onclick", "saveEmail()");
//     saveEmailBtn.innerHTML = "Save";
//     emailDiv.appendChild(saveEmailBtn);
//         if(saveEmailBtn.style.display === "none" ){
//             saveEmailBtn.style.display = "block";
//         }
        
// }

// export const saveEmail = function (){
//     const emailValue = document.getElementById("newEmailValue");
    
//     saveEmailBtn.style.display = "none";
//     emailEditBtn.style.display = "block";
//     if(!emailValue.value.includes("@")
//     ){
//         alert("Please input valid email address");
//         emailValue.style.display = "none";
//     } else {
//         emailText.innerHTML = `<a mailto="${emailValue.value}">${emailValue.value}</a>`;
//     }
// }

// export const changeLocation = function(){
    
//     locationText.innerHTML = "<input type='text' id='newLocationValue'></input>";
//     locationEditBtn.style.display = "none";
//     saveLocationBtn.setAttribute("class", "btn btn-success btn-sm");
//     saveLocationBtn.setAttribute("id", "saveLocationBtn");
//     saveLocationBtn.setAttribute("onclick", "saveLocation()");
//     saveLocationBtn.innerHTML = "Save";
//     locationDiv.appendChild(saveLocationBtn);
//         if(saveLocationBtn.style.display === "none" ){
//             saveLocationBtn.style.display = "block";
//         }
// }

// export const saveLocation = function(){
//     const locationValue = document.getElementById("newLocationValue");
//     locationText.innerHTML = locationValue.value;
//     saveLocationBtn.style.display = "none";
//     locationEditBtn.style.display = "block";
// }

// export function changeLinkedIn(){
    
//     const newText = document.createElement("a");
//     linkedInTextDiv.innerHTML = "<input type='text' id='newLinkedInValue' value='https://'></input>";
//     linkedInEditBtn.style.display = "none";
//     saveLinkedInBtn.setAttribute("class", "btn btn-success btn-sm");
//     saveLinkedInBtn.setAttribute("id", "saveLinkedInBtn");
//     saveLinkedInBtn.setAttribute("onclick", "saveLinkedIn()");
//     saveLinkedInBtn.innerHTML = "Save";
    
//     linkedInText.setAttribute("href", "");
//     linkedInDiv.appendChild(saveLinkedInBtn);
//         if(saveLinkedInBtn.style.display === "none" ){
//             saveLinkedInBtn.style.display = "block";
//         }
// }

// export const linkedInValue = document.getElementById("newLinkedInValue");
// export const saveLinkedIn = function(){
    
//     saveLinkedInBtn.style.display = "none";
//     linkedInEditBtn.style.display = "block";
//     if(!linkedInValue.value.includes("www.linkedin.com") ){
//         alert(`Please include "www.linked.com"`);
//         linkedInTextDiv.innerHTML = "https://";
//     }else {
//         linkedInTextDiv.innerHTML = `<a href="${linkedInValue.value}">My Profile</a>`;
//     }
// }


// // Gamified
// // Grab total # of contributions (each = 1 xp)
// // dynamic leveling system, ie lv 1 = 1, lv 2 = 3, etc
// export let xp = 0;
// export let numContributionsString = document.getElementById("numContributions");
// export let userLevel = 1; //take user level, change html below profile pic
// export let numContributions = parseInt(numContributionsString.innerHTML);
// export const numContributionsToLevel = document.getElementById("numContributionsToLevel");
// export const currentLevel = document.getElementById("numLevel");

// export const gainXP = function(){
//     for (let i = 0; i < parseInt(numContributions); i++)
//     xp+= 1;
//     console.log(xp);
// }
// gainXP();


// export const levelOneThresh = 1 //total contributions;
// export const levelTwoThresh = 5 //total contributions;
// export const levelThreeThresh = 10 //total contributions;
// export const levelFourThresh = 20 //total contributions;
// export const levelFiveThresh = 25 //total contributions;

// export const chooseLevel = function(){
// if(numContributions <= 1){
//     //level 1 is 1 or fewer contributions
//     currentLevel.textContent = 1;
// } else if (numContributions <= 5){
//     // level 2 is 1-5
//     currentLevel.textContent = 2;
// } else if (numContributions <= 10){
//     // level 3 is 6-10
//     currentLevel.textContent = 3;
// } else if (numContributions <= 20){
//     // level 4 11-20
//     currentLevel.textContent = 4;
// } else if (numContributions <= 25){
//     // level 5 21-25
//     currentLevel.textContent = 5;
// }
// }


// //Change level according to # of contributions vs level threshold
// export const addLevel = function (){
// if (numContributions <= levelOneThresh){
//     numContributionsToLevel.innerHTML = levelOneThresh - numContributions +1;
// }  else if(numContributions <= levelTwoThresh){
//     numContributionsToLevel.innerHTML = levelTwoThresh - numContributions +1;
// } else if(numContributions <= levelThreeThresh){
//     numContributionsToLevel.innerHTML = levelThreeThresh - numContributions +1;
// } else if(numContributions <= levelFourThresh){
//     numContributionsToLevel.innerHTML = levelFourThresh - numContributions +1;
// } else if(numContributions <= levelFiveThresh) {
//     numContributionsToLevel.innerHTML = levelFiveThresh - numContributions;
//  }
// }

// //adds Contribution XP
// export const addContribution = function (){
//     numContributions = numContributions + 1;
//     numContributionsString.innerHTML = numContributions;
//     addLevel();
//     chooseLevel();
//     if(numContributions > 25){
//         const contributionsToLevelTextDiv = document.getElementById("contributionsToLevelTextDiv");
//         const contributionsToLevelText = document.getElementById("contributionsToLevelText");
//         numContributionsToLevel.innerHTML = "";
//         contributionsToLevelText.innerHTML = "Max Level!";
//         contributionsToLevelTextDiv.style.border = "none";
//         contributionsToLevelTextDiv.classList = "text-center mt-3";
//         contributionsToLevelTextDiv.style.color = "gold";
//         progressBar.style.display = "none";

//     }
    
// }
// //adds Contribution

// chooseLevel();
// addLevel();

