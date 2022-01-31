
// variables
var activityCell = document.querySelectorAll('.name');
var activityName = document.querySelectorAll('.nameP');
var shortName = document.querySelectorAll('.short-name');
var weightInput = document.querySelectorAll('.weight');
const percent = document.querySelectorAll('.percent');
const tbodyEl = document.querySelector('table');
const receivedGrade = document.querySelectorAll('.received-grade')
const gradeOutOf = document.querySelectorAll('.grade-out-of');
const errorCode = document.getElementById('error-code');
const testCode = document.getElementById('test-code');
const result = document.getElementById('result');
const errorWrap = document.getElementById('error-wrapper');
const warningError = document.getElementById('warning-code');
const warningErrorWrap = document.getElementById('warning-code-wrapper');
const meanBtn = document.getElementById('mean-btn');
var receivedArray = [...receivedGrade];
var outOfArray = [...gradeOutOf];

var newP = document.createElement("p");

// array of activities
let activityData = [
    {
        name: "Activity",
        shortName: "A",
        number: 1,
        weight: 0,
        percent: 0,
        received: 0,
        outof: 0
    },
    {
        name: "Activity",
        shortName: "A",
        number: 2,
        weight: 0,
        percent: 0,
        received: 0,
        outof: 0
    },

    {
        name: "Activity",
        shortName: "A",
        number: 3,
        weight: 0,
        percent: 0,
        received: 0,
        outof: 0
    },

    {
        name: "Activity",
        shortName: "A",
        number: 4,
        weight: 0,
        percent: 0,
        received: 0,
        outof: 0
    },

];

function onAddActivity() {
    let object = {
        name: "Activity",
        shortName: "A",
        number: activityData.length + 1,
        weight: 0,
        percent: 0,
        received: 0,
        outof: 0
    }

    // push new object to activity array
    activityData.push(object);
 
    const activityRow = document.createElement('tr');

    // create new cell for name column
    const newNameTD = document.createElement('td');
    for (var i = 4; i < activityData.length; i++) {
        newNameTD.innerText = activityData[i].name + " " + activityData[i].number;
    }

    // create new cell short name column
    const newShortNameTD = document.createElement('td');

    for (var i = 4; i < activityData.length; i++) {
        newShortNameTD.innerText = activityData[i].shortName + activityData[i].number;
    }

    // create new cell for weight column
    const newWeightTD = document.createElement('td');
    const weightInputField = document.createElement('input');

    for (var i = 4; i < activityData.length; i++) {
        weightInputField.setAttribute('id', `weight${activityData[i].number}`);
    }


    // create new cell for grade column
    const newGradeTD = document.createElement('td');
    const receivedGradeInputField = document.createElement('input');
    const gradeOutOfInputField = document.createElement('input');
    const slash = document.createElement('p');
    slash.innerText = " / ";


    for (var i = 4; i < activityData.length; i++) {
       receivedGradeInputField.setAttribute('id', `received-grade-${activityData[i].number}`);
       gradeOutOfInputField.setAttribute('id', `grade-out-of-${activityData[i].number}`);
    }

     // create new cell for percent column
    const newPercentTD = document.createElement('td');
    const percentField = document.createElement('p');

    for (var i = 4; i < activityData.length; i++) {
        percentField.setAttribute('id', `percent-${activityData[i].number}`);
     }
   

    newWeightTD.appendChild(weightInputField);
    newGradeTD.appendChild(receivedGradeInputField);
    newGradeTD.appendChild(slash);
    newGradeTD.appendChild(gradeOutOfInputField);
    newPercentTD.appendChild(percentField);
    activityRow.appendChild(newNameTD);
    activityRow.appendChild(newShortNameTD);
    activityRow.appendChild(newWeightTD);
    activityRow.appendChild(newGradeTD);
    activityRow.appendChild(newPercentTD);
    
    tbodyEl.appendChild(activityRow);

   
    // set and show grade percentage of activites after activity 4
    for (var i = 5; i <= activityData.length; i++) {
        document.getElementById(`grade-out-of-${i}`).addEventListener('input', function() {
            for(var i = 5; i <= activityData.length; i++) {
                if (document.getElementById(`received-grade-${i}`).value == "" || document.getElementById(`grade-out-of-${i}`).value == "") {
                    activityData[i-1].percent = 0;
                    document.getElementById(`percent-${i}`).innerHTML = "";   
                } else {
                    activityData[i-1].outof = parseFloat((document.getElementById(`grade-out-of-${i}`).value));
                    activityData[i-1].received = parseFloat((document.getElementById(`received-grade-${i}`).value));

                    if(activityData[i-1].received >= 0 && activityData[i-1].outof >= 0) {
                        activityData[i-1].percent = parseFloat(((activityData[i-1].received / activityData[i-1].outof) * 100).toFixed(2));
                    } else {
                        activityData[i-1].percent = -1;
                    }
                    if(activityData[i-1].percent >= 0 && activityData[i-1].percent <= 100) {
                        document.getElementById(`percent-${i}`).innerHTML = ((activityData[i-1].percent)) + "%";
                    } else {
                        document.getElementById(`percent-${i}`).innerHTML = "";
                    }
                } 
            }

        }, false);

        document.getElementById(`received-grade-${i}`).addEventListener('input', function() {
            for(var i = 5; i <= activityData.length; i++) {
                if (document.getElementById(`received-grade-${i}`).value == "") {
                    activityData[i-1].percent = 0;
                    document.getElementById(`percent-${i}`).innerHTML = "";   
                } else {
                    activityData[i-1].outof = parseFloat((document.getElementById(`grade-out-of-${i}`).value));
                    activityData[i-1].received = parseFloat((document.getElementById(`received-grade-${i}`).value));
                    if(activityData[i-1].received >= 0 && activityData[i-1].outof >= 0) {
                        activityData[i-1].percent = parseFloat(((activityData[i-1].received / activityData[i-1].outof) * 100).toFixed(2));
                    } else {
                        activityData[i-1].percent = -1;
                    }
                    if(activityData[i-1].percent >= 0 && activityData[i-1].percent <= 100) {
                        document.getElementById(`percent-${i}`).innerHTML = ((activityData[i-1].percent)) + "%";
                    } else {
                        document.getElementById(`percent-${i}`).innerHTML = "";
                    }
                } 
            }

        }, false);
    }


    for (var i = 5; i <= activityData.length; i++) {
        document.getElementById(`weight${i}`).addEventListener('input', function() {
            for(var i = 5; i <= activityData.length; i++) {
                if (document.getElementById(`weight${i}`).value == "") {
                    activityData[i-1].weight = 0;
                } else {
                    activityData[i-1].weight = parseFloat(document.getElementById(`weight${i}`).value);
                } 
            }
        }, false);
    }
}

// for each object in activity array, set number (id) to corresponding index + 1
activityData.forEach((activity, index) => activity.number = index + 1);

for(var i = 0; i <= activityData.length - 1; i++) {
    activityName[i].innerHTML = activityData[i].name + " " + activityData[i].number;
    shortName[i].innerHTML = activityData[i].shortName  + activityData[i].number;
}


// set and show grade percentage and weight for activities 1 - 4
for(var i = 0; i < 4; i++) {
    gradeOutOf[i].addEventListener('input', function() {
        for(var i = 0; i < 4; i++) {
            if (gradeOutOf[i].value == "") {
                activityData[i].percent = 0;
                // activityData[i].outof = 0;
                percent[i].innerHTML = "";
            } else {
                activityData[i].outof = parseFloat(gradeOutOf[i].value);
                activityData[i].received = parseFloat(receivedGrade[i].value);

                if (activityData[i].received >= 0 && activityData[i].outof >= 0) {
                    activityData[i].percent = parseFloat(((activityData[i].received / gradeOutOf[i].value) * 100).toFixed(2));
                } else {
                    activityData[i].percent = -1;
                }
                if (activityData[i].percent >= 0 && activityData[i].percent <= 100) {
                    percent[i].innerHTML = ((activityData[i].percent)) + "%";
                } else {
                    percent[i].innerHTML = "";
                }    
            } 
        }

    }, false);

    receivedGrade[i].addEventListener('input', function() {
        for(var i = 0; i < 4; i++) { 
            if (receivedGrade[i].value == "") {
                activityData[i].percent = 0;
                activityData[i].outof = 0;
                percent[i].innerHTML = "";
            } else {
                activityData[i].received = parseFloat(receivedGrade[i].value);

                if (activityData[i].received >= 0 && activityData[i].outof >= 0) {
                    activityData[i].percent = parseFloat(((activityData[i].received / gradeOutOf[i].value) * 100).toFixed(2));
                } else {
                    activityData[i].percent = -1;
                }
               
                if (activityData[i].percent >= 0 && activityData[i].percent <= 100) {
                    percent[i].innerHTML = ((activityData[i].percent)) + "%";
                } else {
                    percent[i].innerHTML = "";
                }
                
            }
        }

    }, false );

  
   weightInput[i].addEventListener('input', function() {
        for(var i = 0; i < 4; i++) {
            if (weightInput[i].value == "") {
                activityData[i].weight = 0;
            } else {
                activityData[i].weight = parseFloat(weightInput[i].value);
            } 
        }
    }, false);
  
}   

function getMean() {
    let sum1 = 0;
    let sum2 = 0;
    let totalSum1 = 0;
    let totalSum2 = 0;
    
    // calculate mean for activities 1-4 and show errors
    for (var i = 0; i < 4; i++) {
        sum1 += parseFloat(activityData[i].percent);
        if(parseFloat(activityData[i].percent) !== 0) {
            totalSum1++;
            // errorWrap.classList.add("hidden");
        }
    }

    // calculate mean for activities 5 - and show errors
    for (var i = 5; i < activityData.length + 1; i++) {
        sum2 += parseFloat(activityData[i-1].percent);
        if(parseFloat(activityData[i-1].percent) !== 0) {
            totalSum2++;
            errorWrap.classList.add("hidden");
            errorCode.innerHTML = "";
        } else {
            errorWrap.classList.remove("hidden");
            errorCode.innerHTML = "1 or more activities are left blank.";
        }
    }

   
    var isPercentValid = activityData.every(obj => (obj.percent >= 0 && obj.percent <= 100));

    // error handling
    if(totalSum1 == 0 && totalSum2 == 0) {
        errorWrap.classList.remove("hidden");
        errorCode.innerHTML = "At least one activity grade must be filled.";
        result.innerHTML = "";
    } else if (!isPercentValid) {
        errorWrap.classList.remove("hidden");
        errorCode.innerHTML = "Error: cannot have negative values, grades over 100%, or 0 as denominators.";
        result.innerHTML = "";
    }    
    else {
        errorWrap.classList.add("hidden");
        result.innerHTML = "Mean grade: " + (((sum1 + sum2) / 100) / (totalSum1 + totalSum2) * 100).toFixed(2) + "%";
    }   
}

function getWeightedGrade() {
    let sum1 = 0;
    let sum2 = 0;
    let weightTotal1 = 0;
    let weightTotal2 = 0;
    var isAllPercentZero = activityData.every(obj => obj.percent === 0);
    var isAllWeightZero = activityData.every(obj => obj.weight === 0);
    for(var i = 0; i < 4; i++) {
        if (weightInput[i].value == "") {
            activityData[i].weight = 0;
        } else {
            activityData[i].weight = weightInput[i].value;
            sum1 += parseInt(activityData[i].weight) * (parseFloat(activityData[i].percent)/100);
            weightTotal1 += parseInt(activityData[i].weight);
        }
    }
    for(var i = 5; i < activityData.length + 1; i++) {
        if (document.getElementById(`weight${i}`).value == "") {
            activityData[i-1].weight = 0;
        } else {
        activityData[i - 1].weight = document.getElementById(`weight${i}`).value;
            sum2 += parseInt(activityData[i-1].weight) * (parseFloat(activityData[i-1].percent)/100);
            weightTotal2 += parseInt(activityData[i-1].weight);
        }
    }

    // error handling
    for (var i = 0; i < activityData.length; i++) {
        var isPercentValid = activityData.every(obj => (obj.percent >= 0 && obj.percent <= 100));
        var isWeightValid = activityData.every(obj => (obj.weight >= 0));
        
        if (activityData[i].percent !== 0 && activityData[i].weight == 0) {
            errorWrap.classList.remove("hidden");
            errorCode.innerHTML = "Please fill in the weight for each graded activity";
            result.innerHTML = "";

        } else if (activityData[i].percent == 0 && activityData[i].weight !== 0)  {
            errorWrap.classList.remove("hidden");
            errorCode.innerHTML = "Please fill in the grade for each weighted activity";
            result.innerHTML = "";

        } else if (isAllPercentZero && isAllWeightZero) {
            errorWrap.classList.remove("hidden");
            errorCode.innerHTML = "At least one activity must be filled.";
            result.innerHTML = "";
        }
        else if (!isPercentValid) {
            errorWrap.classList.remove("hidden");
            errorCode.innerHTML = "Error: cannot have negative values, grades over 100%, or 0 as denominators.";
            result.innerHTML = "";
        } 
        else if (!isWeightValid) {
            errorWrap.classList.remove("hidden");
            errorCode.innerHTML = "Error: weight value cannot be negative.";
            result.innerHTML = "";
        }
        else if (activityData[i].percent !== 0 && activityData[i].weight !== 0) {
            errorWrap.classList.add("hidden");
            result.innerHTML = "Weighted grade: " + (((sum1 + sum2) / (weightTotal1 + weightTotal2)) * 100).toFixed(2) + "%";
            errorCode.innerHTML = "";
        }   
    }   
}

// reset values to 0 or "" and empty fields on reset
function onReset() {
    for(var i = 0; i < activityData.length; i++) {
        activityData[i].percent = 0;
        activityData[i].weight = 0; 
    }

    for(var i = 0; i < 4; i++) {
        receivedGrade[i].value = ""; 
        gradeOutOf[i].value = ""; 
        percent[i].innerHTML = "";
        weightInput[i].value = ""; 
    }

    for(var i = 5; i <= activityData.length; i++) {
        document.getElementById(`percent-${i}`).innerHTML = "";
        document.getElementById(`weight${i}`).value = "";
        document.getElementById(`grade-out-of-${i}`).value = "";
        document.getElementById(`received-grade-${i}`).value = "";
    }

    result.innerHTML = "";
    errorWrap.classList.add('hidden');
    
}
console.log(activityData);






