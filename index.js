// Question 3

// classGroup
// If classGroup is Science Subjects - Physics, Chemistry, Biology, Technical Drawing 
// If classGroup is Social Science Subjects - Accounting, Commerce, Marketing, Geography
// If classGroup is Arts Subjects - Government, Economics, Literature, History
// If classGroup is General Subjects - English, Mathematics
// Otherwise: General Subject


let classGroup = 'arts';
let artSubject = 'English, Mathematics, Government, Economics, Literature, History'
let scienceSubject = 'English, Mathematics, Physics, Chemistry, Biology, Technical Drawing'
let socialScienceSubject = 'English, Mathematics, Accounting, Commerce, Marketing, Geography'
let generalSubject = 'English, Mathematics'


if (classGroup == 'arts') {
    console.log(artSubject);
} 
else if (classGroup == 'science') {
    console.log(scienceSubject);
} 
else if (classGroup == 'social science') {
    console.log(socialScienceSubject);
} 
else {
    console.log(generalSubject)
}

// Answer: English, Mathematics, Government, Economics, Literature, History




// Question 5

// let pwr; 
// let firstValue; 
// const nearestPower = (num) => {
//   for (let i = 0; i < num; i++) {
//     pwr = 2 ** i;
//     if (pwr < num) {
//       firstValue = pwr;
//     }
//   }
//   if (num - firstValue > firstValue * 2 - num) {
//     pwr = firstValue * 2
//   }
//   else if (num - firstValue < firstValue * 2 - num) {
//     pwr = firstValue 
//   }
//   else {return "not a valid number"}
//   return `The number ${pwr} is the power of 2 nearest to ${num}`;
// };
// console.log(nearestPower(20));

// Answer: The number 16 is the power of 2 nearest to 20
 

