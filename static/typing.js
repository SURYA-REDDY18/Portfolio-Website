const articleSpan = document.getElementById("article-effect");
const roleSpan = document.getElementById("role-effect");

const roles = [
    { role: "Full Stack Development", article: "into" },
    { role: "ML Enthusiast", article: "an" }
];

let index = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 120;
let pauseBetweenWords = 1000;
let currentText = '';

function type() {
    // Get current role and article
    const currentRole = roles[index].role;
    const currentArticle = roles[index].article;

    // Set the article (static, not animated)
    articleSpan.textContent = `${currentArticle}`;

    if (!isDeleting) {
        // Typing effect for the role
        currentText = currentRole.substring(0, charIndex);
        roleSpan.textContent = currentText;
        charIndex++;

        // Pause after the role is fully typed
        if (charIndex === currentRole.length) {
            setTimeout(() => isDeleting = true, pauseBetweenWords);
        }
    } else {
        // Deleting effect for the role
        currentText = currentRole.substring(0, charIndex);
        roleSpan.textContent = currentText;
        charIndex--;

        // Once the role is fully deleted, switch to the next role
        if (charIndex === 0) {
            isDeleting = false;
            index = (index + 1) % roles.length; // Move to the next role
        }
    }

    // Control speed: slow typing, faster deletion
    setTimeout(type, isDeleting ? typingSpeed - 40 : typingSpeed);
}

// Start the typing effect
type();
