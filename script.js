/* =========================
   MAMA ASIPO SHOP JS
   STABLE VERSION
========================= */

console.log("Mama Asipo Shop JS loaded successfully 🚀");

/* =========================
   SMOOTH NAVIGATION
========================= */
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

/* =========================
   SCROLL REVEAL ANIMATION
========================= */
function revealSections() {
    const sections = document.querySelectorAll("section");

    sections.forEach(section => {
        const windowHeight = window.innerHeight;
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < windowHeight - 80) {
            section.classList.add("show");
        }
    });
}

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);

/* =========================
   WHATSAPP ORDER SYSTEM
========================= */
function sendToWhatsApp() {
    const name = document.getElementById("name").value;
    const product = document.getElementById("product").value;
    const message = document.getElementById("message").value;

    const phone = "254706199963";

    const url =
        "https://wa.me/" + phone +
        "?text=Hello Mama Asipo Shop%0A%0A" +
        "Name: " + name + "%0A" +
        "Request: " + product + "%0A" +
        "Message: " + message;

    window.open(url, "_blank");
}