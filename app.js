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















import { db, collection, addDoc, serverTimestamp } from "./firebase-config.js";

// إظهار وإخفاء نموذج التعليق
function toggleCommentForm() {
    let form = document.getElementById("commentFormContainer");
    form.style.display = (form.style.display === "none") ? "block" : "none";
}

// إرسال التعليق إلى Firestore
async function submitComment() {
    let textarea = document.getElementById("commentInput");
    let commentText = textarea.value.trim();

    if (commentText === "") {
        alert("يرجى كتابة تعليق قبل الإرسال!");
        return;
    }

    try {
        await addDoc(collection(db, "comments"), {
            text: commentText,
            timestamp: serverTimestamp() // حفظ التوقيت تلقائيًا
        });

        alert("تم إرسال تعليقك!");
        textarea.value = ""; // إعادة تعيين الحقل بعد الإرسال
        loadComments(); // تحديث التعليقات بعد الإضافة
    } catch (error) {
        console.error("خطأ في إرسال التعليق:", error);
    }
}

// تحميل التعليقات من Firestore وعرضها في الصفحة
async function loadComments() {
    const commentList = document.getElementById("commentList");
    commentList.innerHTML = ""; // مسح التعليقات السابقة وإعادة تحميلها

    const querySnapshot = await getDocs(collection(db, "comments"));
    querySnapshot.forEach((doc) => {
        let commentData = doc.data();
        let commentElement = document.createElement("div");
        commentElement.classList.add("comment");
        commentElement.textContent = ${commentData.text} - ${new Date(commentData.timestamp?.toDate()).toLocaleString()};

        commentList.appendChild(commentElement);
    });
}

// تحميل التعليقات عند فتح الصفحة
document.addEventListener("DOMContentLoaded", loadComments);

