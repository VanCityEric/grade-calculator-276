// const receivedGrade = document.querySelectorAll('.received-grade')
// const gradeOutOf = document.querySelectorAll('.grade-out-of');
// const percent = document.querySelectorAll('.percent');
// const weight = document.querySelectorAll('.weight');
// const tbodyEl = document.querySelector('table');
// const result = document.getElementById('result');
// const errorCode = document.getElementById('error-code');
// var meanResult = 0;
// var weightedSum = 0;
// var percentNums = [];
// var weights = [];
// var weighted = [];
// var numOfActivities = 4;




// function onAddActivity() {
//     const activityRow = document.createElement('tr');
//     const newNameTD = document.createElement('td');
//     newNameTD.innerText = 'hey';
//     activityRow.appendChild(newNameTD);
//     tbodyEl.appendChild(activityRow);

// };


// for(var i = 0; i < 4; i++) {
//     gradeOutOf[i].addEventListener('input', function() {
//         for(var i = 0; i < 4; i++) {
//             if (receivedGrade[i].value == "" || gradeOutOf[i].value == "") {
//                 percent[i].innerHTML = "";
//             } else {
//                 percentNums[i] = ((receivedGrade[i].value / gradeOutOf[i].value) * 100);
//                 if(percentNums[i] % 1 !== 0) {
//                     percent[i].innerHTML = ((percentNums[i]).toFixed(2)) + "%";
//                 } else {
//                     percent[i].innerHTML = ((percentNums[i])) + "%";
//                 }
               
//             }
//         }
//         console.log(percentNums[1]);  
//     }, false);


//     receivedGrade[i].addEventListener('input', function() {
//         for(var i = 0; i < 4; i++) { 
//             if (receivedGrade[i].value == "" || gradeOutOf[i].value == "") {
//                 percent[i].innerHTML = "";
//             } else {
//                 percentNums[i] = ((receivedGrade[i].value / gradeOutOf[i].value) * 100);
//                 if(percentNums[i] % 1 !== 0) {
//                     percent[i].innerHTML = ((percentNums[i]).toFixed(2)) + "%";
//                 } else {
//                     percent[i].innerHTML = ((percentNums[i])) + "%";
//                 }
               
//             }
//         }
        
//     }, false );
// }   



// // receivedGrade[0].addEventListener('input', function() {
// //         if (gradeOutOf[0].value == "" || this.value == "") {
// //             percent[0].innerHTML = "";
// //         } else {
// //             percentNums[0] = (this.value / gradeOutOf[0].value);
// //             percent[0].innerHTML = (percentNums[0] * 100).toFixed(2) + "%";
// //         }
// //     }, false)


// // gradeOutOf[1].addEventListener('input', function() {
// //     if (receivedGrade[1].value == "" || this.value == "") {
// //         percent[1].innerHTML = "";
// //     } else {
// //         percentNums[1] = (receivedGrade[1].value / this.value);
// //         percent[1].innerHTML = (percentNums[1] * 100).toFixed(2) + "%";
// //     }
// // }, false);

// // receivedGrade[1].addEventListener('input', function() {
// //         if (gradeOutOf[1].value == "" || this.value == "") {
// //             percent[1].innerHTML = "";
// //         } else {
// //             percentNums[1] = (this.value / gradeOutOf[1].value);
// //             percent[1].innerHTML = (percentNums[1] * 100).toFixed(2) + "%";
// //         }
// //     }, false)

// // gradeOutOf[2].addEventListener('input', function() {
// //     if (receivedGrade[2].value == "" || this.value == "") {
// //         percent[2].innerHTML = "";
// //     } else {
// //         percentNums[2] = (receivedGrade[2].value / this.value);
// //         percent[2].innerHTML = (percentNums[2] * 100).toFixed(2) + "%";
// //     }
// // }, false);

// // receivedGrade[2].addEventListener('input', function() {
// //         if (gradeOutOf[2].value == "" || this.value == "") {
// //             percent[2].innerHTML = "";
// //         } else {
// //             percentNums[2] = (this.value / gradeOutOf[2].value);
// //             percent[2].innerHTML = (percentNums[2] * 100).toFixed(2) + "%";
// //         }
// //     }, false)

// // gradeOutOf[3].addEventListener('input', function() {
// //     if (receivedGrade[3].value == "" || this.value == "") {
// //         percent[3].innerHTML = "";
// //     } else {
// //         percentNums[3] = (receivedGrade[3].value / this.value);
// //         percent[3].innerHTML = (percentNums[3] * 100).toFixed(2) + "%";
// //     }
// // }, false);

// // receivedGrade[3].addEventListener('input', function() {
// //         if (gradeOutOf[3].value == "" || this.value == "") {
// //             percent[3].innerHTML = "";
// //         } else {
// //             percentNums[3] = (this.value / gradeOutOf[3].value);
// //             percent[3].innerHTML = (percentNums[3] * 100).toFixed(2) + "%";
// //         }
// //     }, false)


// function getMean() {
//     let sum = 0;
//     for (var i = 0; i < percentNums.length; i++) {
//         sum += percentNums[i];
//     }
//     meanResult = sum / percentNums.length;
 
//     result.innerHTML = "Mean: " + (meanResult * 100).toFixed(2);

// }

// function getWeightedGrade() {
//     var total = 0;
//     var totalWeight = 0;

//     for (i = 0; i < weight.length; ++i) {
//          weights[i] = weight[i].value;
//     }

//     for (i = 0; i < weights.length; ++i) {
//         weighted[i] = weights[i] * percentNums[i];
//     }

//     for (i = 0; i < weights.length; ++i) {
//         total += weights[i]; 
//     }

//     for (i = 0; i < percentNums.length; ++i) {
//         totalWeight += weighted[i];
//     }
    
//     result.innerHTML = weight.length;
    

   
   
// }


