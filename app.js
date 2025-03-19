console.log("app.js loaded!");

document.addEventListener("DOMContentLoaded", function() {
    // Load the chapters dynamically
    const chapters = [
        { title: "Chapter 1", link: "#chapter1" },
        { title: "Chapter 2", link: "#chapter2" },
        { title: "Chapter 3", link: "#chapter3" }
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

    // Handle login form
    const loginForm = document.getElementById("login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            if (email === "test@example.com" && password === "password") {
                alert("Login successful");
            } else {
                alert("Invalid credentials");
            }
        });
    }

    // Load particles.js only if the element exists
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

// Toggle Menu Function
function toggleMenu() {
         console.log("تم النقر على زر القائمة"); // للتحقق من تنفيذ الوظيفة
         let navLinks = document.querySelector(".nav-links");
         if (navLinks) {
             navLinks.classList.toggle("nav-open");
             console.log("تم تبديل القائمة الجانبية");
         } else {
             console.error("العنصر .nav-links غير موجود!");
         }
     }




function toggleMenu(event) {
         event.stopPropagation(); // يمنع انتشار الحدث إلى العناصر الأخرى
         console.log("تم النقر على زر القائمة");
         let navLinks = document.querySelector(".nav-links");
         if (navLinks) {
             navLinks.classList.toggle("nav-open");
             console.log("تم تبديل القائمة الجانبية");
         } else {
             console.error("العنصر .nav-links غير موجود!");
         }
     }















document.addEventListener("DOMContentLoaded", function () {
    // أنشئ عنصر الـ div الذي يحتوي على نموذج التعليقات
    let commentContainer = document.createElement("div");
    commentContainer.innerHTML = 
        <button onclick="toggleCommentForm()" class="add-comment-btn">أضف تعليقًا</button>
        <div id="commentFormContainer" style="display: none;">
            <textarea placeholder="اكتب تعليقك هنا..."></textarea>
            <button onclick="submitComment()">إرسال</button>
        </div>
    ;

    // أضف التعليقات أسفل كل فصل تلقائيًا
    document.body.appendChild(commentContainer);
});

function toggleCommentForm() {
    let form = document.getElementById("commentFormContainer");
    form.style.display = (form.style.display === "none") ? "block" : "none";
}

function submitComment() {
    alert("تم إرسال تعليقك!");
}

