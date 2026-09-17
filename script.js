// =====================================================
// INTRO PROFILE CLICK
// =====================================================

const enterButton = document.getElementById("enterButton");
const introScreen = document.getElementById("introScreen");

enterButton.addEventListener("click", function () {

    console.log("PROFILE CLICKED");

    // Hide intro
    introScreen.classList.add("hide");

    // Allow scrolling
    document.body.style.overflow = "auto";

    // Go directly to HOME
    setTimeout(function () {

        const home = document.getElementById("home");

        home.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }, 300);

});


// =====================================================
// MOBILE MENU
// =====================================================

const menuButton =
    document.getElementById("menuButton");

const navLinks =
    document.getElementById("navLinks");


menuButton.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


// Close menu after clicking navigation
document.querySelectorAll(".nav-links a").forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


// =====================================================
// EXPERIENCE CARDS
// =====================================================

document
    .querySelectorAll(".experience-button")
    .forEach(function (button) {

        button.addEventListener("click", function () {

            const card =
                button.closest(".experience-card");


            // Close other cards
            document
                .querySelectorAll(".experience-card")
                .forEach(function (otherCard) {

                    if (otherCard !== card) {

                        otherCard.classList.remove("active");

                    }

                });


            // Toggle current card
            card.classList.toggle("active");

        });

    });


// =====================================================
// PROJECT MODAL
// =====================================================

const projectData = {

    lost: {

        title: "Lost and Found Management System",

        description:
            "A web-based system designed to help students report lost belongings, register found items, search for lost items, and manage the claiming process."

    },

    student: {

        title: "Student Information System",

        description:
            "A system designed to organize student profiles, records, and basic school information."

    },

    sorting: {

        title: "Sorting Algorithm Visualizer",

        description:
            "An interactive project that demonstrates sorting algorithms and shows the sorting process step by step."

    }

};


const modal =
    document.getElementById("projectModal");

const projectTitle =
    document.getElementById("projectTitle");

const projectDescription =
    document.getElementById("projectDescription");


document
    .querySelectorAll(".project-button")
    .forEach(function (button) {

        button.addEventListener("click", function () {

            const project =
                button.getAttribute("data-project");


            projectTitle.textContent =
                projectData[project].title;


            projectDescription.textContent =
                projectData[project].description;


            modal.classList.add("show");

        });

    });


// =====================================================
// CLOSE MODAL
// =====================================================

const closeModal =
    document.getElementById("closeModal");


closeModal.addEventListener("click", function () {

    modal.classList.remove("show");

});


// Click outside modal
modal.addEventListener("click", function (event) {

    if (event.target === modal) {

        modal.classList.remove("show");

    }

});


// ESC key
document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        modal.classList.remove("show");

    }

});


// =====================================================
// CONTACT FORM
// =====================================================

const contactForm =
    document.getElementById("contactForm");


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const message =
        document.getElementById("message").value.trim();


    if (!name || !email || !message) {

        alert("Please complete all fields.");

        return;

    }


    const subject =
        "Message from " + name;


    const body =
        "Name: " + name +
        "\nEmail: " + email +
        "\n\nMessage:\n" + message;


    const mailto =
        "mailto:loise7039@gmail.com" +
        "?subject=" +
        encodeURIComponent(subject) +
        "&body=" +
        encodeURIComponent(body);


    window.location.href = mailto;

});


// =====================================================
// GALLERY
// =====================================================

document
    .querySelectorAll(".gallery img")
    .forEach(function (image) {

        image.addEventListener("click", function () {

            window.open(image.src, "_blank");

        });

    });


// =====================================================
// PAGE READY
// =====================================================

console.log("Portfolio JavaScript is working!");