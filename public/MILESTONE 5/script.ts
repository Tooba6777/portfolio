// get references to the form & display area
const resumeForm = document.getElementById("Resume-form") as HTMLFormElement;
const resumeDisplayElement = document.getElementById(
  "resume-display"
) as HTMLDivElement;
const shareableLinkContainer = document.getElementById("shareable-link-container") as HTMLFormElement;
const shareableLinkElement = document.getElementById("shareable-link") as HTMLFormElement;
const downloadPdfButton = document.getElementById("download-pdf") as HTMLFormElement;

// handle form submission
resumeForm.addEventListener("submit", (event: Event) => {
  event.preventDefault(); // prevent page reload

  // collect input values
  const name = (document.getElementById("name") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const phoneNumber = (
    document.getElementById("phoneNumber") as HTMLInputElement
  ).value;
  const education = (document.getElementById("education") as HTMLInputElement)
    .value;
  const experience = (document.getElementById("experience") as HTMLInputElement)
    .value;
  const skills = (document.getElementById("skills") as HTMLInputElement).value;

  // generate the resume content dynamically
  const resumeHTML = `
    <h2><b>Editable Resume</b><h2>
    <h3>Personal Information</h3>
    <p><b>Name:</b><span><contenteditable="true">${name}</span></p>
    <p><b>Email:</b><span><contenteditable="true">${email}</span></p>
    <p><b>Phone:</b><span><contenteditable="true">${phoneNumber}</span></p>

    <h3>Education</h3>
    <p <span><contenteditable="true">${education}</spam></p>

    <h3>Experience</h3>
    <p <span><contenteditable="true">${experience}</span></p>

    <h3>Skills</h3>
    <p <span><contenteditable="true">${skills}</span></p>
    `;
  // display the generated resume
  if (resumeDisplayElement) {
    resumeDisplayElement.innerHTML = resumeHTML;
  } else {
    console.error("The resume display element is missing.");
  }
});
