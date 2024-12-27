// get references to the form & display area
var resumeForm = document.getElementById("Resume-form");
var resumeDisplayElement = document.getElementById("resume-display");
var shareableLinkContainer = document.getElementById("shareable-link-container");
var shareableLinkElement = document.getElementById("shareable-link");
var downloadPdfButton = document.getElementById("download-pdf");
// handle form submission
resumeForm.addEventListener("submit", function (event) {
    event.preventDefault(); // prevent page reload
    // collect input values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var education = document.getElementById("education")
        .value;
    var experience = document.getElementById("experience")
        .value;
    var skills = document.getElementById("skills").value;
    // generate the resume content dynamically
    var resumeHTML = "\n    <h2><b>Editable Resume</b><h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b><span><contenteditable=\"true\">".concat(name, "</span></p>\n    <p><b>Email:</b><span><contenteditable=\"true\">").concat(email, "</span></p>\n    <p><b>Phone:</b><span><contenteditable=\"true\">").concat(phoneNumber, "</span></p>\n\n    <h3>Education</h3>\n    <p <span><contenteditable=\"true\">").concat(education, "</spam></p>\n\n    <h3>Experience</h3>\n    <p <span><contenteditable=\"true\">").concat(experience, "</span></p>\n\n    <h3>Skills</h3>\n    <p <span><contenteditable=\"true\">").concat(skills, "</span></p>\n    ");
    // display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error("The resume display element is missing.");
    }
});
