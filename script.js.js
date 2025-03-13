document.addEventListener("DOMContentLoaded", function() {
    // Load the chapters dynamically
    const chapters = [
        { title: "Chapter 1", link: "#chapter1" },
        { title: "Chapter 2", link: "#chapter2" },
        { title: "Chapter 3", link: "#chapter3" }
    ];

    const chapterList = document.getElementById("chapter-list");

    chapters.forEach(chapter => {
        let chapterElement = document.createElement("div");
        chapterElement.classList.add("chapter");
        chapterElement.innerHTML = <h3><a href="${chapter.link}">${chapter.title}</a></h3>;
        chapterList.appendChild(chapterElement);
    });

    // Handle login form
    document.getElementById("login-form").addEventListener("submit", function(event) {
        event.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Dummy login check
        if (email === "test@example.com" && password === "password") {
            alert("Login successful");
        } else {
            alert("Invalid credentials");
        }
    });
});