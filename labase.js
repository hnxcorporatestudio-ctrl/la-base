// =========================
// HEADER SCROLL
// =========================

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("active");

    } else {

        header.classList.remove("active");

    }

});

// =========================
// MENU MOBILE
// =========================

const menuToggle = document.querySelector(".menu-toggle");

const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    const icon = menuToggle.querySelector("i");

    if (navLinks.classList.contains("active")) {

        icon.classList.remove("fa-bars");

        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    }

});

// =========================
// FERMER MENU APRÈS CLIC
// =========================

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    });

});

// =========================
// ANIMATION APPARITION
// =========================

const revealElements = document.querySelectorAll(
    ".menu-card, .contact-card, .section-title, .menu-title"
);

const revealOnScroll = () => {

    const windowHeight = window.innerHeight;

    revealElements.forEach(element => {

        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {

            element.style.opacity = "1";

            element.style.transform = "translateY(0)";

        }

    });

};

revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform = "translateY(40px)";

    element.style.transition = "all 0.8s ease";

});

window.addEventListener("scroll", revealOnScroll);

window.addEventListener("load", revealOnScroll);

// =========================
// EFFET TEXTE HERO
// =========================

const heroTitle = document.querySelector(".hero-content h1");

const heroText = heroTitle.innerText;

heroTitle.innerHTML = "";

let index = 0;

function writeText() {

    if (index < heroText.length) {

        heroTitle.innerHTML += heroText.charAt(index);

        index++;

        setTimeout(writeText, 40);

    }

}

window.addEventListener("load", () => {

    setTimeout(writeText, 300);

});

// =========================
// BOUTON WHATSAPP ANIMATION
// =========================

const whatsappBtn = document.querySelector(".whatsapp-float");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        whatsappBtn.style.opacity = "1";

        whatsappBtn.style.visibility = "visible";

    } else {

        whatsappBtn.style.opacity = "0.9";

        whatsappBtn.style.visibility = "visible";

    }

});

// =========================
// EFFET PARALLAX HERO
// =========================

const heroImage = document.querySelector(".hero-image img");

window.addEventListener("mousemove", (e) => {

    const x = (window.innerWidth / 2 - e.pageX) / 40;

    const y = (window.innerHeight / 2 - e.pageY) / 40;

    heroImage.style.transform = `translate(${x}px, ${y}px)`;

});

// =========================
// ACTIVE LINK AU SCROLL
// =========================

const sections = document.querySelectorAll("section");

const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active-link");

        if (link.getAttribute("href").includes(current)) {

            link.classList.add("active-link");

        }

    });

});

// =========================
// STYLE ACTIVE LINK
// =========================

const style = document.createElement("style");

style.innerHTML = `

.active-link{
    color: #ffd000 !important;
}

.active-link::after{
    width: 100% !important;
}

`;

document.head.appendChild(style);

// =========================
// SCROLL DOUX AUTOMATIQUE
// =========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});

// =========================
// EFFET ZOOM IMAGE MENU
// =========================

const menuImages = document.querySelectorAll(".menu-card img");

menuImages.forEach(image => {

    image.addEventListener("mouseenter", () => {

        image.style.transform = "scale(1.08)";

        image.style.transition = "0.5s ease";

    });

    image.addEventListener("mouseleave", () => {

        image.style.transform = "scale(1)";

    });

});

// =========================
// ANIMATION HERO IMAGE
// =========================

window.addEventListener("load", () => {

    heroImage.style.opacity = "0";

    heroImage.style.transform = "translateY(50px)";

    heroImage.style.transition = "1s ease";

    setTimeout(() => {

        heroImage.style.opacity = "1";

        heroImage.style.transform = "translateY(0)";

    }, 300);

});

// =========================
// PREVENTION BUG MENU
// =========================

window.addEventListener("resize", () => {

    if(window.innerWidth > 991){

        navLinks.classList.remove("active");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    }

});