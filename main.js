// Age calculation + insertion
const dob = new Date(2005, 4, 7);

let diff = new Date(Date.now() - dob.getTime());
let age = Math.abs(diff.getUTCFullYear() - 1970);
document.getElementById("age").innerText = age + ", ";

// Enlightenment
let button = document.getElementById("enlightenmentButton");
let pageContent = document.getElementById("mainContent");
let tooltip = document.getElementById("enlightenmentTooltip");
let styleLink = document.querySelector('link[href="style.css"]');
let icons = document.querySelectorAll(".icon");
let thumbnails = document.querySelectorAll(".projectThumbnail");

// fetch state from local storage
let enlightened = localStorage.getItem("enlightened");
if (enlightened) removeStyle();

// cover div used for transition to/from white 
let cover = document.createElement("div");
cover.setAttribute("style",
    `position: fixed;
    opacity: 0%;
    top: 0;
    left: 0;
    background-color: white;
    width: 100vw;
    height: 100vh;
    transition: opacity 500ms ease;`
);

// helper function to set retro style
function removeStyle() {
    styleLink.href = "";
    icons.forEach(icon => {
        icon.src = "";
        if (icon.parentElement.tagName == "A") icon.style.marginRight = "1em";
    });
    thumbnails.forEach(thumbnail => thumbnail.style.maxWidth = "30%");
    button.setAttribute("style",
        `position: absolute;
        top: 2.25em;
        right: 2em;`
    );
    tooltip.innerText = "";
}

button.addEventListener("click", () => {
    enlightened = !enlightened;

    // transition smoothly to retro styling
    document.body.appendChild(cover);
    pageContent.style.opacity = 0;
    setTimeout(() => cover.style.opacity = enlightened ? 1 : 0, 900);
    
    if (enlightened) {
        setTimeout(() => {
            removeStyle();
            window.scroll({ top: 0 });
        }, 1500);
    } else {
        cover.style.opacity = 1;
        document.body.style.background = 'url("resources/background.jpg") center/cover no-repeat fixed';
    }
    setTimeout(() => { location.reload() }, 1800);

    // write state to local storage
    localStorage.setItem("enlightened", enlightened ? 1 : "");   
});

button.parentElement.classList.toggle("hidden");