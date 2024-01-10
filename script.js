var typed= new Typed(".multiple-text",{
    strings: ["FrontEnd Developer ", "Backend Developer" , "Software Developer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay: 1000,
    loop:true
})

const navLinks = document.querySelectorAll(".navbar a");
const sections = document.querySelectorAll("section");
const myWorkButton = document.querySelector(".btn");
const sendButton = document.querySelector(".send");

navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {

        event.preventDefault();

        const targetSectionId = link.getAttribute("href").substring(1);
        
        sections.forEach(function (section) {
            if(section.id === targetSectionId) {

                section.style.display = 'flex';
            } else {
                section.style.display = "none";
            }
        });

        navLinks.forEach(function (navLink) {
            navLink.classList.remove("active");
        });
        link.classList.add("active");
    });
});

myWorkButton.addEventListener("click", function () {
    toggleSectionVisibility("project");
});

function toggleSectionVisibility(targetSectionId) {
    sections.forEach(function (section) {
        if (section.id === targetSectionId) {
            section.style.display = section.style.display === "none" ? "block" : "none";
        } else {
            section.style.display = "none";
        }
    });
}

sendButton.addEventListener("click", function (event) {
    event.preventDefault();
    
    const form = sendButton.closest("form");
    const requiredInputs = form.querySelectorAll('[required]');

    let isEmpty = false;

    requiredInputs.forEach(function (input) {
        if (input.value.trim() === '') {
            isEmpty = true;
        }
    });

    if (isEmpty) {
        showAndHideAlert('errorAlert');
    } else {
        showAndHideAlert('successAlert');
        form.reset();
    }
});

function showAndHideAlert(alertId) {
    const alert = document.getElementById(alertId);
    alert.style.display = 'block';

    setTimeout(function () {
        alert.style.display = 'none';
    }, 3000);
}
