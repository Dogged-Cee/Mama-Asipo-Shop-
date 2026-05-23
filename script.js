/* =========================
   MAMA ASIPO SHOP - JS
========================= */

console.log("Mama Asipo Shop JS loaded successfully 🚀");

/* =========================
   SMOOTH SCROLL NAVIGATION
========================= */
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

/* =========================
   SCROLL ANIMATION (SHOW SECTIONS)
========================= */
window.addEventListener("scroll", function () {
    const sections = document.querySelectorAll("section");

    sections.forEach(section => {
        const position = section.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (position < screenHeight - 100) {
            section.classList.add("show");
        }
    });
});

/* =========================
   WHATSAPP ORDER FORM
========================= */
function sendToWhatsApp() {
    let name = document.getElementById("name").value;
    let product = document.getElementById("product").value;
    let message = document.getElementById("message").value;

    let phone = "254706199963";

    let url =
        "https://wa.me/" + phone +
        "?text=Hello Mama Asipo Shop%0A%0A" +
        "Name: " + name + "%0A" +
        "Request: " + product + "%0A" +
        "Message: " + message;

    window.open(url, "_blank");
}