/*Question 3
A Program to help Bolatito determine her subjects based on her class group
*/


let classGroup = "Arts";
let generalSubjects = ":\nEnglish\nMathematics\n"

if (classGroup === "Arts"){
    const artSubjects = "Government\nEconomics\nLiterature and\nHistory\n"
    console.log("Your subjects are " + generalSubjects + artSubjects)
}
else if (classGroup === "Science"){
    const scienceSubjects = "Physics\nChemistry\nBiology and\nTechnical Drawing\n"
    console.log("Your subjects are " + generalSubjects + scienceSubjects)
}
else if (classGroup === "Social Science"){
    const socialSciSubjects = "Accounting\nCommerce\nMarketing and\nGeography\n"
    console.log("Your subjects are " + generalSubjects + socialSciSubjects)
}
else { 
    console.log("Invalid class group. Taking general subjects. Your subjects are " + generalSubjects)
}

/*Question 5
A Program that finds the power of 2 closest to a number
*/
function findPowerOfTwoClosestTo(num){
let pwr = 1;
while (pwr <= num){
    pwr = pwr * 2;
}
if (pwr - num > num - pwr/2) {
    pwr = pwr / 2;
}
console.log(`The number ${pwr} is the power of 2 nearest to ${num}.\n`)
}

findPowerOfTwoClosestTo(40)