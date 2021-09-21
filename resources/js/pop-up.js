const popup = document.querySelector(".pop_up-container");
const popup_img = document.querySelector(".pop_up").childNodes[1].childNodes[1];
const popup_box = document.getElementById("pop_up-row");
const popup_title = document.querySelector(".pop_up-title");
const languages = document.querySelectorAll(".language");
const images = document.querySelectorAll(".language_img--wrapper");

popup.style.display = "none";

const language_clicked = (event) => {
    var imageSrc = "";
    var imageAlt = "";
    var title = "";

    if(event.target.nodeName == "IMG")
    {
        imageSrc = event.target.src;
        imageAlt = event.target.alt;
        title = event.target.parentNode.parentNode.childNodes[3].innerHTML;
    }
    else if (event.target.nodeName == "FIGURE")
    {
        imageSrc = event.target.childNodes[1].src;
        imageAlt = event.target.childNodes[1].alt;
        title = event.target.parentNode.childNodes[3].innerHTML;
    }
    else if (event.target.nodeName == "DIV")
    {
        imageSrc = event.target.childNodes[1].childNodes[1].src;
        imageAlt = event.target.childNodes[1].childNodes[1].alt;
        title = event.target.childNodes[3].innerHTML;
    }
    popup_img.src = imageSrc;
    popup_img.alt = imageAlt;
    popup_title.innerHTML = title;
    popup.style.display = "block"
    setTimeout(startAnimation, 1);
};

const startAnimation = () => {
    popup.style.display = "block";
    popup.classList.add("animate");
    popup_box.classList.add("animate")
    // setInterval(function(){popup_box.classList.add("animate")}, 500);
};


const removeDisplay = () => {
    popup.style.display = "none";
};

const close_popup = () => {
    popup.classList.remove("animate");
    popup_box.classList.remove("animate");
    setTimeout(removeDisplay, 400);
}


languages.forEach((language) => {
    language.addEventListener("click", language_clicked);
});

document.addEventListener('keydown', (e) => {
    if(e.which == 27)
    {
        close_popup();
    }
});

popup.onclick = (event) => {
    if(event.path[0].className.includes("pop_up-container"))
    {
        close_popup();
    }
};