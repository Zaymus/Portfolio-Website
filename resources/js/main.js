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
	console.log("Languages clicked");
	scroll({ top: location_techStack, behaviour: "smooth" });
});

projects.addEventListener("click", () => {
	console.log("Projects clicked");
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
