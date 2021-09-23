const popup = document.querySelector(".pop_up-container");
const popup_img = document.querySelector(".pop_up").childNodes[1].childNodes[1];
const popup_box = document.getElementById("pop_up-row");
const popup_title = document.querySelector(".pop_up-title");
const languages = document.querySelectorAll(".language");
const images = document.querySelectorAll(".language_img--wrapper");
const popup_close = document.querySelector(".pop_up-close");

popup.style.display = "none";

const language_clicked = (event) => {
    languages.forEach((language) => {
        language.removeEventListener("click", language_clicked);
    });
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
    disableScroll();
    popup.style.display = "block";
    popup.classList.add("animate");
    popup_box.classList.add("animate");
    // setInterval(function(){popup_box.classList.add("animate")}, 500);
};

// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
const keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; } 
  }));
} catch(e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

const disableScroll = () => {
    window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
    window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
    window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

const enableScroll = () => {
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
    window.removeEventListener('touchmove', preventDefault, wheelOpt);
    window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}

const removeDisplay = () => {
    popup.style.display = "none";
    enableScroll();
    languages.forEach((language) => {
        language.addEventListener("click", language_clicked);
    });
};

const close_popup = () => {
    popup.classList.remove("animate");
    popup_box.classList.remove("animate");
    setTimeout(removeDisplay, 800);
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

popup_close.onclick = () => {
    close_popup();
}

