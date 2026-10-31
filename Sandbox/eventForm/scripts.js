const form = document.querySelector("#event-form");
const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const eventDate = document.querySelector("#event-date");
const attendeeType = document.querySelector("#attendee-type");
const codeGroup = document.querySelector("#code-group");
const codeLabel = document.querySelector("#code-label");
const codeInput = document.querySelector("#code-input");
const errors = document.querySelector("#errors");
const ticket = document.querySelector("#ticket");

// Set the minimum date to today.
const today = new Date();

today.setMinutes(
  today.getMinutes() - today.getTimezoneOffset()
);

eventDate.min = today.toISOString().split("T")[0];

// Show the correct input when the type changes.
attendeeType.addEventListener("change", () => {
  const type = attendeeType.value;

  const isVisible =
    type === "student" || type === "guest";

  codeGroup.classList.toggle("hidden", !isVisible);
  codeInput.required = isVisible;
  codeInput.value = "";

  if (type === "student") {
    codeLabel.textContent = "Student I#";
    codeInput.placeholder = "Enter your 9 digit I-number";
    codeInput.inputMode = "numeric";
  } else if (type === "guest") {
    codeLabel.textContent = "Access Code";
    codeInput.placeholder = "Enter EVENT131";
    codeInput.inputMode = "text";
  }
});

// Validate the form when submitted.
form.addEventListener("submit", (event) => {
  event.preventDefault();

  errors.innerHTML = "";
  ticket.classList.add("hidden");

  const errorMessages = [];

  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const selectedDate = eventDate.value;
  const type = attendeeType.value;
  const code = codeInput.value.trim();

  if (!firstNameValue) {
    errorMessages.push("Please enter your first name.");
  }

  if (!lastNameValue) {
    errorMessages.push("Please enter your last name.");
  }

  if (!emailValue || !email.validity.valid) {
    errorMessages.push("Please enter a valid email address.");
  }

  if (!selectedDate) {
    errorMessages.push("Please choose an event date.");
  } else if (selectedDate <= eventDate.min) {
    errorMessages.push(
      "The event date must be later than today."
    );
  }

  if (!type) {
    errorMessages.push(
      "Please select Student or Guest."
    );
  }

  if (
    type === "student" &&
    !/^\d{9}$/.test(code)
  ) {
    errorMessages.push(
      "Student I# must contain exactly 9 digits."
    );
  }

  if (
    type === "guest" &&
    code !== "EVENT131"
  ) {
    errorMessages.push(
      "The Guest access code must be EVENT131."
    );
  }

  if (errorMessages.length > 0) {
    errors.innerHTML = errorMessages
      .map((message) => `<p>${message}</p>`)
      .join("");

    return;
  }

  const attendeeTypeText =
  type === "student" ? "Student" : "Guest";

    const codeLabelText =
    type === "student" ? "Student I#" : "Access Code";

    ticket.innerHTML = `
    <h2>Ticket Created</h2>
    <p><strong>First Name:</strong> ${firstNameValue}</p>
    <p><strong>Last Name:</strong> ${lastNameValue}</p>
    <p><strong>Email:</strong> ${emailValue}</p>
    <p><strong>Type:</strong> ${attendeeTypeText}</p>
    <p><strong>Event Date:</strong> ${selectedDate}</p>
    <p><strong>${codeLabelText}:</strong> ${code}</p>
    `;

    ticket.classList.remove("hidden");
});s