

var activityName = document.querySelectorAll('.name');
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



let activityData = [
    {
        name: "Activity",
        shortName: "A",
        weight: 0,
        percent: 0
    },
    {
        name: "Activity",
        shortName: "A",
        weight: 0,
        percent: 0
    },

    {
        name: "Activity",
        shortName: "A",
        weight: 0,
        percent: 0
    },

    {
        name: "Activity",
        shortName: "A",
        weight: 0,
        percent: 0
    },

];

console.log(activityData);


function onAddActivity() {
    let object = {
        name: "Activity",
        shortName: "A",
        number: activityData.length + 1,
        weight: 0,
        grade: 0,
        percent: 0,
        received: 0,
    }
    activityData.push(object);
 
    const activityRow = document.createElement('tr');

    // name column
    const newNameTD = document.createElement('td');
    for (var i = 4; i < activityData.length; i++) {
        newNameTD.innerText = activityData[i].name + " " + activityData[i].number;
    }

    // short name column
    const newShortNameTD = document.createElement('td');
    for (var i = 4; i < activityData.length; i++) {
        newShortNameTD.innerText = activityData[i].shortName + activityData[i].number;
    }

    // weight column
    const newWeightTD = document.createElement('td');
    const weightInputField = document.createElement('input');
    for (var i = 4; i < activityData.length; i++) {
        weightInputField.setAttribute('id', `weight${activityData[i].number}`);
    }


    // grade column
    const newGradeTD = document.createElement('td');
    const receivedGradeInputField = document.createElement('input');
    const gradeOutOfInputField = document.createElement('input');
    const slash = document.createElement('p');
    slash.innerText = " / ";


    for (var i = 4; i < activityData.length; i++) {
       receivedGradeInputField.setAttribute('id', `received-grade-${activityData[i].number}`);
       gradeOutOfInputField.setAttribute('id', `grade-out-of-${activityData[i].number}`);
    }

     // percent column
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

   

    for (var i = 5; i <= activityData.length; i++) {
        document.getElementById(`grade-out-of-${i}`).addEventListener('input', function() {
            for(var i = 5; i <= activityData.length; i++) {
                if (document.getElementById(`received-grade-${i}`).value == "" || document.getElementById(`grade-out-of-${i}`).value == "") {
                    activityData[i-1].percent = 0;
                    document.getElementById(`percent-${i}`).innerHTML = "";   
                } else {
                    activityData[i-1].percent = ((document.getElementById(`received-grade-${i}`).value / document.getElementById(`grade-out-of-${i}`).value) * 100).toFixed(2);
                    if(activityData[i-1].percent % 1 !== 0) {
                        document.getElementById(`percent-${i}`).innerHTML = ((activityData[i-1].percent)) + "%";
                    } else {
                        document.getElementById(`percent-${i}`).innerHTML = (Math.round((activityData[i-1].percent))) + "%";
                    }
                } 
            }
        }, false);

        document.getElementById(`received-grade-${i}`).addEventListener('input', function() {
            for(var i = 5; i <= activityData.length; i++) {
                if (document.getElementById(`received-grade-${i}`).value == "" || document.getElementById(`grade-out-of-${i}`).value == "") {
                    activityData[i-1].percent = 0;
                    document.getElementById(`percent-${i}`).innerHTML = "";   
                } else {
                    activityData[i-1].percent = ((document.getElementById(`received-grade-${i}`).value / document.getElementById(`grade-out-of-${i}`).value) * 100).toFixed(2);
                    if(activityData[i-1].percent % 1 !== 0) {
                        document.getElementById(`percent-${i}`).innerHTML = ((activityData[i-1].percent)) + "%";
                    } else {
                        document.getElementById(`percent-${i}`).innerHTML = (Math.round((activityData[i-1].percent))) + "%";
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

activityData.forEach((activity, index) => activity.number = index + 1);

for(var i = 0; i <= activityData.length - 1; i++) {
    activityName[i].innerHTML = activityData[i].name + " " + activityData[i].number;
    shortName[i].innerHTML = activityData[i].shortName  + activityData[i].number;
}

for(var i = 0; i < 4; i++) {
    gradeOutOf[i].addEventListener('input', function() {
        for(var i = 0; i < 4; i++) {
            if (receivedGrade[i].value == "" || gradeOutOf[i].value == "") {
                activityData[i].percent = 0;
                percent[i].innerHTML = "";
            } else {
                activityData[i].percent = parseFloat(((receivedGrade[i].value / gradeOutOf[i].value) * 100).toFixed(2));
                if(activityData[i].percent % 1 !== 0) {
                    percent[i].innerHTML = ((activityData[i].percent)) + "%";
                } else {
                    percent[i].innerHTML = (Math.round((activityData[i].percent))) + "%";
                }
               
            }
        }
    
    }, false);


    receivedGrade[i].addEventListener('input', function() {
        for(var i = 0; i < 4; i++) { 
            if (receivedGrade[i].value == "" || gradeOutOf[i].value == "") {
                activityData[i].percent = 0;
                percent[i].innerHTML = "";
            } else {
                activityData[i].percent = parseFloat(((receivedGrade[i].value / gradeOutOf[i].value) * 100).toFixed(2));
                if(activityData[i].percent % 1 !== 0) {
                    percent[i].innerHTML = ((activityData[i].percent)) + "%";
                } else {
                    percent[i].innerHTML = (Math.round((activityData[i].percent))) + "%";
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
    
    for (var i = 0; i < 4; i++) {
        sum1 += parseFloat(activityData[i].percent);
        if(parseFloat(activityData[i].percent) !== 0) {
            totalSum1++;
            errorWrap.classList.add("hidden");
            errorCode.innerHTML = "";
        } else {
            errorWrap.classList.remove("hidden");
            errorCode.innerHTML = "1 or more activities are left blank"
        }
    }

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

    if(totalSum1 == 0 && totalSum2 == 0) {
        errorWrap.classList.remove("hidden");
        errorCode.innerHTML = "You must fill at least 1 activity grade";
        result.innerHTML = "";
    } else {
        errorWrap.classList.add("hidden");
        result.innerHTML = "Mean grade: " + (((sum1 + sum2) / 100) / (totalSum1 + totalSum2) * 100).toFixed(2) + "%";
    
    } 
}

function getWeightedGrade() {
    let sum1 = 0;
    let sum2 = 0;
    let weightTotal1 = 0;
    let weightTotal2 = 0;
    var isTrue = activityData.every(obj => obj.percent === 0);
    var isTrue2 = activityData.every(obj => obj.weight === 0);
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

    for (var i = 0; i < activityData.length; i++) {
        
        if (activityData[i].percent !== 0 && activityData[i].weight == 0) {
            errorWrap.classList.remove("hidden");
            errorCode.innerHTML = "Please fill in the weight for each graded activity";
            result.innerHTML = "";

        } else if (activityData[i].percent == 0 && activityData[i].weight !== 0)  {
            errorWrap.classList.remove("hidden");
            errorCode.innerHTML = "Please fill in the grade for each weighted activity";
            result.innerHTML = "";
        } else if (isTrue && isTrue2) {
                errorWrap.classList.remove("hidden");
                errorCode.innerHTML = "You must fill at least 1 activity";
                result.innerHTML = "";
        }
        else if (activityData[i].percent !== 0 && activityData[i].weight !== 0) {
            errorWrap.classList.add("hidden");
            result.innerHTML = "Weighted grade: " + (((sum1 + sum2) / (weightTotal1 + weightTotal2)) * 100).toFixed(2) + "%";
            errorCode.innerHTML = "";
        }   
    }   
}

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

    
}


console.log(activityData);






