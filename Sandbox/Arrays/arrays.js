const steps = ["one", "two", "three"];
function listTemplate(step) {
  return `<li>${step}</li>`;
}
const stepsHtml = steps.map(listTemplate);
document.querySelector("#myList").innerHTML = stepsHtml.join("");

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