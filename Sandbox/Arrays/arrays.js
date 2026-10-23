const steps = ["one", "two", "three"];
function listTemplate(step) {
  return `<li>${step}</li>`;
}
const stepsHtml = steps.map(listTemplate);
document.querySelector("#myList").innerHTML = stepsHtml.join("");

const names = [
  "Aaron Andrus",
  "Manny Masa",
  "Tamanda Tanda"
];

function nameTemplate(name) {
  return `<div class="name">${name}</div>`;
}

const namesHtml = names.map(nameTemplate);
document.querySelector("#names").innerHTML = namesHtml.join("");

console.log(names);

const grades = ["A", "B", "C"];

function convertToPoints(grade) {
    const cleanGrade = grade.toUpperCase();
    switch (cleanGrade) {
        case "A":
            return 4;
        case "B":
            return 3;
        case "C":
            return 2;
        default:
            return 0;
    }
}
    
/* some array methods are mutable, some are inmutable (they can change or not change the original array) */