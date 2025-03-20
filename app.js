console.log("script.js loaded!"); 

document.addEventListener("DOMContentLoaded", function () {
    // Load the chapters dynamically
    const chapters = [
        { title: "Chapter 1", link: "chapters/chapter1.html" },
        { title: "Chapter 2", link: "chapters/chapter2.html" },
        { title: "Chapter 3", link: "chapters/chapter3.html" },
        { title: "Chapter 4", link: "chapters/chapter4.html" },
        { title: "Chapter 5", link: "chapters/chapter5.html" }
    ];

    const chapterList = document.getElementById("chapter-list");
    if (chapterList) {
        chapters.forEach(chapter => {
            let chapterElement = document.createElement("div");
            chapterElement.classList.add("chapter");
            chapterElement.innerHTML = <h3><a href="${chapter.link}">${chapter.title}</a></h3>;
            chapterList.appendChild(chapterElement);
        });
    }

    // Load particles.js if the element exists
    if (document.getElementById("particles-js")) {
        particlesJS("particles-js", {
            particles: {
                number: { value: 80 },
                color: { value: "#00ffea" },
                shape: { type: "circle" },
                opacity: { value: 0.5, random: true },
                size: { value: 3, random: true },
                move: { speed: 3, direction: "none", out_mode: "out" }
            },
            interactivity: {
                events: {
                    onhover: { enable: true, mode: "repulse" },
                    onclick: { enable: true, mode: "push" }
                },
                modes: {
                    repulse: { distance: 100 },
                    push: { particles_nb: 4 }
                }
            }
        });
    }
});

// Star animation
const canvas = document.getElementById("stars");

if (canvas) {
    const ctx = canvas.getContext("2d");

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const stars = [];
    for (let i = 0; i < 150; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 1.5,
            alpha: Math.random(),
        });
    }

    function drawStars() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "white";
        stars.forEach(star => {
            ctx.globalAlpha = star.alpha;
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
            ctx.fill();
        });
        requestAnimationFrame(drawStars);
    }

    drawStars();
}
