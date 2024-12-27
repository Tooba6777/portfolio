// get references to the form & display area
var form = document.getElementById("Resume-form");
var resumeDisplayelement = document.getElementById("resume-display");
// handle form submission
form.addEventListener("submit", function (event) {
  event.preventDefault(); // prevent page reload
  // collect input values
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phoneNumber = document.getElementById("phoneNumber").value;
  var education = document.getElementById("education").value;
  var experience = document.getElementById("experience").value;
  var skills = document.getElementById("skills").value;
  // generate the resume content dynamically
  var resumeHTML =
    "\n    <h2><b>Resume</b><h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b>"
      .concat(name, "</p>\n    <p><b>Email:</b>")
      .concat(email, "</p>\n    <p><b>Phone:</b>")
      .concat(phoneNumber, "</p>\n\n    <h3>Education</h3>\n    <p>")
      .concat(education, "</p>\n\n    <h3>Experience</h3>\n    <p>")
      .concat(experience, "</p>\n\n    <h3>Skills</h3>\n    <p>")
      .concat(skills, "</p>\n    ");
  // display the generated resume
  if (resumeDisplayelement) {
    resumeDisplayelement.innerHTML = resumeHTML;
  } else {
    console.error("The resume display element is missing.");
  }
});
