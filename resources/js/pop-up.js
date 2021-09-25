const popup = document.querySelector(".pop_up-container");
const popup_img = document.querySelector(".pop_up").childNodes[1].childNodes[1];
const popup_box = document.getElementById("pop_up-row");
const popup_title = document.querySelector(".pop_up-title");
const popup_body = document.querySelector(".pop_up-body");
const languages = document.querySelectorAll(".language");
const language_bodies = document.querySelectorAll(".language_body");
const images = document.querySelectorAll(".language_img--wrapper");
const popup_close = document.querySelector(".pop_up-close");

const language_names = [
	"HTML 5",
	"CSS 3",
	"JavaScript",
	"PHP",
	"Python",
	"React",
	"Redux",
	"SQL Databases",
];

let siblingLanguages = ["", ""];

popup.style.display = "none";

const language_clicked = (event) => {
	languages.forEach((language) => {
		language.removeEventListener("click", language_clicked);
	});
	var details = getLanguageDetails(event);

	popup_img.src = details["image"];
	popup_img.alt = details["alt"];
	popup_title.innerHTML = details["title"];
	if (details["body"] == "") {
		details["body"] = "Language details comming soon!";
	}
	popup_body.innerHTML = details["body"];
	popup.style.display = "block";
	setTimeout(startAnimation, 1);
};

const changeLanguageDetails = (newInfo) => {
	classes = popup.className.split(" ");
	classes.forEach((Class) => {
		if (Class == "animate") {
			var evt = new Event("click");
			newInfo.dispatchEvent(evt);
		}
	});
};

const getLanguageDetails = (event) => {
	let languageDetails = {
		image: "",
		alt: "",
		title: "",
		body: "",
	};

	if (event.target.nodeName == "IMG") {
		languageDetails["image"] = event.target.src;
		languageDetails["alt"] = event.target.alt;
		languageDetails["title"] =
			event.target.parentNode.parentNode.childNodes[3].innerHTML;
		languageDetails["body"] =
			event.target.parentNode.parentNode.childNodes[5].defaultValue;
	} else if (event.target.nodeName == "FIGURE") {
		languageDetails["image"] = event.target.childNodes[1].src;
		languageDetails["alt"] = event.target.childNodes[1].alt;
		languageDetails["title"] = event.target.parentNode.childNodes[3].innerHTML;
		languageDetails["body"] =
			event.target.parentNode.childNodes[5].defaultValue;
	} else if (event.target.nodeName == "DIV") {
		languageDetails["image"] = event.target.childNodes[1].childNodes[1].src;
		languageDetails["alt"] = event.target.childNodes[1].childNodes[1].alt;
		languageDetails["title"] = event.target.childNodes[3].innerHTML;
		languageDetails["body"] = event.target.childNodes[5].defaultValue;
	}

	getSiblings(languageDetails);

	return languageDetails;
};

const getSiblings = (language) => {
	for (let i = 0; i < language_names.length; i += 1) {
		if (language["title"] == language_names[i]) {
			siblingLanguages[0] = languages[i - 1];
			siblingLanguages[1] = languages[i + 1];
		}
	}
};

const startAnimation = () => {
	// disableScroll();
	popup.style.display = "block";
	popup.classList.add("animate");
	popup_box.classList.add("animate");
};

const removeDisplay = () => {
	popup.style.display = "none";
	// enableScroll();
	languages.forEach((language) => {
		language.addEventListener("click", language_clicked);
	});
};

const close_popup = () => {
	popup.classList.remove("animate");
	popup_box.classList.remove("animate");
	setTimeout(removeDisplay, 800);
};

languages.forEach((language) => {
	language.addEventListener("click", language_clicked);
});

document.addEventListener("keydown", (e) => {
	// esc key
	if (e.which == 27) {
		e.preventDefault();
		close_popup();
	}
	// left arrow
	if (e.which == 37) {
		e.preventDefault();
		changeLanguageDetails(siblingLanguages[0]);
	}

	// right arrow
	if (e.which == 39) {
		e.preventDefault();
		changeLanguageDetails(siblingLanguages[1]);
	}
});

popup.onclick = (event) => {
	if (event.path[0].className.includes("pop_up-container")) {
		close_popup();
	}
};

popup_close.onclick = () => {
	close_popup();
};

// var evt = new Event("click");
// languages[5].dispatchEvent(evt);
