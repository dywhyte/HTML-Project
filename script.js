// ===================================
// FOREIGNHEIGHT DREDGING & LOGISTICS
// JAVASCRIPT
// ===================================


// 1. MOBILE NAVIGATION MENU

const menuToggle = document.getElementById("menuToggle");

const mainNav = document.getElementById("mainNav");


if (menuToggle && mainNav) {

    menuToggle.addEventListener("click", function () {

        const isOpen = mainNav.classList.toggle("open");

        menuToggle.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

        menuToggle.setAttribute(
            "aria-label",
            isOpen
                ? "Close navigation menu"
                : "Open navigation menu"
        );

    });


    // Close the menu after clicking a navigation link

    const navigationLinks = mainNav.querySelectorAll("a");

    navigationLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            mainNav.classList.remove("open");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        });

    });

}


// 2. HIGHLIGHT THE ACTIVE NAVIGATION LINK

const sections = document.querySelectorAll(
    "main section[id]"
);

const navLinks = document.querySelectorAll(
    '.nav-link[href^="#"]'
);


if ("IntersectionObserver" in window) {

    const sectionObserver = new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    navLinks.forEach(function (link) {

                        const isActive =
                            link.getAttribute("href") ===
                            "#" + entry.target.id;

                        link.classList.toggle(
                            "active",
                            isActive
                        );

                    });

                }

            });

        },

        {
            rootMargin: "-35% 0px -55% 0px"
        }

    );


    sections.forEach(function (section) {

        sectionObserver.observe(section);

    });

}


// 3. AUTOMATIC COPYRIGHT YEAR

const yearElement = document.getElementById("year");


if (yearElement) {

    yearElement.textContent = new Date().getFullYear();

}


// 4. CONTACT FORM

const contactForm = document.getElementById("contactForm");

const formStatus = document.getElementById("formStatus");


if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        // Stop the browser from submitting the form normally

        event.preventDefault();


        // Check that the required fields are valid

        if (!contactForm.reportValidity()) {

            return;

        }


        // Collect the form information

        const formData = new FormData(contactForm);


        const name = String(
            formData.get("name") || ""
        ).trim();


        const email = String(
            formData.get("email") || ""
        ).trim();


        const service = String(
            formData.get("service") || ""
        ).trim();


        const message = String(
            formData.get("message") || ""
        ).trim();


        // Prepare the email subject

        const subject = encodeURIComponent(
            "Website Enquiry: " + service
        );


        // Prepare the email body

        const body = encodeURIComponent(

            "Hello ForeignHeight Team,\n\n" +

            "My name is " + name + ".\n" +

            "My email address is " + email + ".\n" +

            "Service of interest: " + service + "\n\n" +

            "Project details:\n" +

            message +

            "\n\nPlease contact me to discuss the next steps."

        );


        // Tell the visitor what will happen

        if (formStatus) {

            formStatus.textContent =
                "Your email application should open now. " +
                "Review the message and press Send to deliver it.";

        }


        // Open the visitor's default email application

        window.location.href =

            "mailto:chidozieufoma12@gmail.com" +

            "?subject=" + subject +

            "&body=" + body;

    });

}