const linkedin = document.querySelector(".fa-linkedin");
const github = document.querySelector(".fa-github");
const email = document.querySelector(".fa-envelope");
const resume = document.querySelector(".fa-file-pdf");

const techStack = document.querySelector(".tech_stack");
const projects = document.querySelector(".projects");
const contact = document.querySelector(".contact");

const location_techStack = document.querySelector("#languages").offsetTop;
const location_projects = document.querySelector("#projects").offsetTop;
const location_contact = document.querySelector("#contact").offsetTop;

const projects_git = document.querySelectorAll("#project-git");
const projects_web = document.querySelectorAll("#project-link");
const git_links = [
	"https://github.com/Zaymus/Flexbox_Landing_Page",
	"https://github.com/Zaymus/user-login-register-webpage",
	"https://github.com/Zaymus/Tea-Cozy",
];
const web_links = [
	"https://zaymus.github.io/Flexbox_Landing_Page/",
	"https://zaymus.github.io/user-login-register-webpage/",
	"https://zaymus.github.io/Tea-Cozy/",
];

const contactFrm = document.querySelector(".frmContact");
const firstName = document.querySelector("#fName");
const lastName = document.querySelector("#lName");
const emailAddress = document.querySelector("#email");
const message = document.querySelector("#message");
const frmStatus = document.querySelector("#frmStatus");
var value_fn = "";
var value_ln = "";
var value_email = "";
var value_message = "";
frmStatus.innerHTML = "";

contactFrm.addEventListener(
	"submit",
	(e) => {
		e.preventDefault();
		// window.history.back();
	},
	true
);

linkedin.addEventListener("click", () => {
	window.open("https://www.linkedin.com/in/carsonbrown-dev", "_blank");
});

github.addEventListener("click", () => {
	window.open("https://github.com/Zaymus", "_blank");
});

email.addEventListener("click", () => {
	window.open("mailto:carsonbrown47@gmail.com", "_blank");
});

resume.addEventListener("click", () => {
	window.open("./resources/assets/Resume.pdf", "_blank");
});

techStack.addEventListener("click", () => {
	scroll({ top: location_techStack, behaviour: "smooth" });
});

projects.addEventListener("click", () => {
	scroll({ top: location_projects, behaviour: "smooth" });
});

contact.addEventListener("click", () => {
	console.log("Contact clicked");
	scroll({ top: location_contact, behaviour: "smooth" });
});

for (let i = 0; i < git_links.length; i++) {
	projects_git[i].addEventListener("click", () => {
		window.open(git_links[i], "_blank");
	});
}

for (let i = 0; i < web_links.length; i++) {
	projects_web[i].addEventListener("click", () => {
		window.open(web_links[i], "_blank");
	});
}

function isNotEmpty(value) {
	if (value == null || typeof value == "undefined") return false;
	return value.length > 0;
}

function isEmail(email) {
	let regex =
		/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
	return regex.test(String(email).toLowerCase());
}

function fieldValidation(field, validationFunction) {
	if (field == null) return false;

	let isFieldValid = validationFunction(field.value);
	if (!isFieldValid) {
		field.value = "";
	}
	return isFieldValid;
}

function isValid() {
	var valid = true;

	valid &= fieldValidation(firstName, isNotEmpty);
	valid &= fieldValidation(lastName, isNotEmpty);
	valid &= fieldValidation(emailAddress, isEmail);
	valid &= fieldValidation(message, isNotEmpty);

	return valid;
}

function sendEmail(message) {
	Email.send({
		Host: "smtp.gmail.com",
		Username: "contact.webportfolio@gmail.com",
		Password: "mywebportfolio01",
		To: "carsonbrown47@gmail.com",
		From: "contact.webportfolio@gmail.com",
		Subject: "Contact from web portfolio",
		Body: message,
	});
}

function resetFrm() {
	firstName.value = "";
	lastName.value = "";
	emailAddress.value = "";
	message.value = "";
}

function submitFrm() {
	value_fn = firstName.value;
	value_ln = lastName.value;
	value_email = emailAddress.value;
	value_message = message.value;
	if (isValid()) {
		let name = value_fn + " " + value_ln;
		let message = name + ": " + value_email + " - " + value_message;
		sendEmail(message);
		frmStatus.innerHTML =
			"Thank you for reaching out! I will do my best to respond as soon as possible!";
		resetFrm();
	}
}
