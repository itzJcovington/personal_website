document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("main > div");
    const navLinks = document.querySelectorAll(".nav-link");
    const header = document.querySelector(".text-bg-dark");

    // Sets the active navigation link based on the current scroll position
    function setActiveLink() {
        let index = sections.length;

        // Find the section that is currently in view
        while (--index && window.scrollY + 200 < sections[index].offsetTop) {}

        navLinks.forEach((link, i) => {
            link.classList.toggle("active-orange", i === index);
            link.classList.toggle("nav-orange", i !== index);
        });
    }

    // Handles scroll events to update the active link and header transparency
    function handleScroll() {
        setActiveLink();
        header.classList.toggle("transparent-header", window.scrollY > 90);
    }

    setActiveLink();
    window.addEventListener("scroll", handleScroll);
});
