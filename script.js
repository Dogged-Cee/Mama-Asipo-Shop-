/* =========================
   MAMA ASIPO SHOP JS
   FINAL VERSION
========================= */

console.log("Mama Asipo Shop JS loaded successfully 🚀");

/* =========================
   SMOOTH NAVIGATION
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
function showSectionsOnScroll() {
    const sections = document.querySelectorAll("section");

    sections.forEach(section => {
        const position = section.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (position < screenHeight - 80) {
            section.classList.add("show");
        }
    });
}

window.addEventListener("scroll", showSectionsOnScroll);
window.addEventListener("load", showSectionsOnScroll);

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
        "Product/Service: " + product + "%0A" +
        "Message: " + message;

    window.open(url, "_blank");
}