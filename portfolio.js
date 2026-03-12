// Initialize EmailJS
emailjs.init("fNYng064vpgl59a8O");

// Handle form submit
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
        "service_9dnt4x5",
        "template_zevql1j",
        "#contactForm"
    )
        .then(function () {
            alert("Email sent successfully!");
            document.getElementById("contactForm").reset();
        })
        .catch(function (error) {
            alert("Failed to send email: " + JSON.stringify(error));
        });
});
document.getElementById("menuBtn").addEventListener("click", function () {
    document.getElementById("navLinks").classList.toggle("show");
});
var typed = new Typed("#myText", {
    strings: [
        "A computer science student who enjoys learning new technologies and building creative projects."
    ],
    typeSpeed: 40,
    backSpeed: 30,
    backDelay: 2000,
    loop: true
});
var typed2 = new Typed("#myText2", {
    strings: [
        "This is my first and current portfolio website, created to showcase my skills and projects. It represents the starting point of my web development journey, and I plan to expand it with more projects in the future.",
        "Click the image to visit the project on GitHub"
    ],
    typeSpeed: 40,
    backSpeed: 10,
    backDelay: 400,
    loop: true

});
