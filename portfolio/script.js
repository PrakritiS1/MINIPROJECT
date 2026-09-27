
// MOBILE MENU


const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("open");
});


// Closemenu link click krne kebad

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("open");

    });

});



// CURRENT YEAR


const yearElement = document.getElementById("year");

if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}




const revealElements = document.querySelectorAll(
    ".project-card, .achievement, .timeline-item, .skill-card, .info-card"
);


// Initial style

revealElements.forEach(function (element) {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(30px)";

    element.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

});




const observer = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

        entry.target.style.opacity = "1";

         entry.target.style.transform =
                    "translateY(0)";

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.15
    }

);


revealElements.forEach(function (element) {

    observer.observe(element);

});



// SMOOTH SCROLL


document.querySelectorAll(
    'a[href^="#"]'
).forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId =
            this.getAttribute("href");

        const target =
            document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});





const navbar =
    document.querySelector(".navbar");


window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {

        navbar.style.boxShadow =
            "0 5px 25px rgba(0,0,0,0.08)";

    } else {

        navbar.style.boxShadow = "none";

    }

});



// EMAIL BUTTON


const emailButtons =
    document.querySelectorAll(
        'a[href^="mailto:"]'
    );

emailButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        console.log(
            "Opening email client..."
        );

    });

});



// PORTFOLIO LOADED


console.log(
    "Prakriti Singh Portfolio Loaded Successfully 🚀"
);