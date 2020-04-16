const gDom = document.getElementById("grades");
const aDom = document.getElementById("avg_grades");
const fDom = document.getElementById("final_grade");
const iDom = document.getElementById("yourgrades");

function outputData(g, a, f) {
  gDom.innerHTML = g;
  aDom.innerHTML = a.toFixed(1);
  fDom.innerHTML = f;
}

function saveGradeAsCookie(grade, letter) {
  /* Cookie disabled - Angelica Cortez */
  console.log("Cookie would be saved");
  //document.cookie += " Your grade: " + grade + " (" + letter + ") \n";
}

function calculateGrade(allGrades) {
  const totalGrade = 0;
  const avgGrade = 0;
  const finalGrades = ["A", "B", "C", "D", "F"];
  const finalGrade;

  for (const i = 0; i < allGrades.length; i++) {
    totalGrade += parseInt(allGrades[i]);
    avgGrade = totalGrade / allGrades.length;
  }

  if (avgGrade >= 90) {
    finalGrade = finalGrades[0];
    fDom.className = "green";
  } else if (avgGrade >= 80 && avgGrade < 90) {
    finalGrade = finalGrades[1];
    fDom.className = "teal";
  } else if (avgGrade >= 70 && avgGrade < 80) {
    finalGrade = finalGrades[2];
    fDom.className = "blue";
  } else if (avgGrade >= 60 && avgGrade < 70) {
    finalGrade = finalGrades[3];
    fDom.className = "orange";
  } else {
    finalGrade = finalGrades[4];
    fDom.className = "red";
  }

  outputData(allGrades, avgGrade, finalGrade);
  saveGradeAsCookie(avgGrade, finalGrade);
}

function parseData(input) {
  const grades = input.split(",");
  grades = grades.sort(function (a, b) {
    return b - a;
  });
  calculateGrade(grades);
}

function submit() {
  if (iDom.value === "") {
    alert("You did not enter any grades");
  } else {
    parseData(iDom.value);
  }
}

const myInputData = new XMLHttpRequest();
myInputData.open("GET", "mygrades.txt");

myInputData.onreadystatechange = function () {
  if (myInputData.readyState === 4) {
    if (myInputData.status === 200) {
      console.log(myInputData.responseText);
      parseData(myInputData.responseText);
    }
  }
};

myInputData.send();
