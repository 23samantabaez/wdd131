// courses.js
const aCourse = {
  code: "CSE121b",
  name: "Javascript Language",
  sections: [
    { sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T'},
    { sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A'}
  ]
};

const nameHeadlineEl = document.querySelector("#courseName");
const codeHeadlineEl = document.querySelector("#courseCode");

function setHeader(course) {
    nameHeadlineEl.textContent = course.name;
    codeHeadlineEl.textContent = course.code;
}
// keys that store functions are called methods

function sectionTemplate(section) {
    return `<tr>
        <td>${section.sectionNum}</td>
        <td>${section.roomNum}</td>
        <td>${section.enrolled}</td>
        <td>${section.days}</td>
        <td>${section.instructor}</td>
    </tr>`;
}

function getSections(sections) {
    const sectionsEl = document.querySelector("#sections");
    const html = sections.map(sectionTemplate);
    sectionsEl.innerHTML = html.join("");
}

setHeader(aCourse);
setSections(aCourse.sections);