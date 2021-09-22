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

console.log(location_techStack);

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
    scroll({top: location_techStack, behaviour: "smooth"});
});

projects.addEventListener("click", () => {
    scroll({top: location_projects, behaviour: "smooth"});
});

contact.addEventListener("click", () => {
    scroll({top: location_contact, behaviour: "smooth"});
});