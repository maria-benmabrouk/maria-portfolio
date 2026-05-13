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
        "My portfolio website showcases my skills and projects in web development. Built with HTML, CSS, and JavaScript, it reflects my creativity and passion for creating modern and responsive websites, while continuously evolving with new projects and improvements.",
        "Click the image to visit the project on GitHub"
    ],
    typeSpeed: 40,
    backSpeed: 10,
    backDelay: 400,
    loop: true

});

var typed3 = new Typed("#myText3", {
    strings: [
        "The official website of Rawasii provides an overview of the application, download access, and a user guide to help users explore its features and use it effectively. Built using HTML and CSS with a modern and responsive design for a smooth user experience across devices.",
        "Click the image to visit the project on GitHub"
    ],
    typeSpeed: 40,
    backSpeed: 10,
    backDelay: 400,
    loop: true

});
