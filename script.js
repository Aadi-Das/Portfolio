function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    window.scrollTo({
      top: target.offsetTop - 60,
      behavior: "smooth",
    });

    document.querySelectorAll("nav a").forEach((link) => {
      link.classList.remove("active");
    });
    this.classList.add("active");
  });
});

document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Message sent! Thank you for contacting me.");
    this.reset();
  });

window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav a");

  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (window.scrollY >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

const text =
  "Here you can find a showcase of my work and skills get to know me.";
let index = 0;

function type() {
  if (index < text.length) {
    document.querySelector(".typing-text").textContent += text.charAt(index);
    index++;
    setTimeout(type, 50);
  }
}
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(type, 1000);
});

lightbox.option({
  resizeDuration: 200,
  wrapAround: true,
});
