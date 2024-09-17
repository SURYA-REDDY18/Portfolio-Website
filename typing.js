const typingText = document.getElementById("typing-effect");
const roles = [
    { role: "Full Stack Development", article: "into" },
    { role: "ML Enthusiast", article: "an" }
];
let index = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 120; // Typing speed for smoother animation
let pauseBetweenWords = 2000; // Pause before starting deletion
let currentText = ''; // Holds the current text being typed

function type() {
    // Only type the article and role, "I am" remains static
    const fullText = `${roles[index].article} ${roles[index].role}`;

    if (!isDeleting) {
        // Typing effect: increase charIndex to show more of the text
        currentText = fullText.substring(0, charIndex);
        charIndex++;
        typingText.textContent = currentText;

        // Once the whole sentence is typed, pause before deleting
        if (charIndex === fullText.length) {
            setTimeout(() => isDeleting = true, pauseBetweenWords);
        }
    } else {
        // Deleting effect: decrease charIndex to remove text
        currentText = fullText.substring(0, charIndex);
        charIndex--;
        typingText.textContent = currentText;

        // Once everything is deleted, switch to the next role and reset
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
