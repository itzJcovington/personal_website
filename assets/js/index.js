document.addEventListener("DOMContentLoaded", function () {
    
    const sections = document.querySelectorAll("main > div");
    const navLinks = document.querySelectorAll(".nav-link");
    const header = document.querySelector(".text-bg-dark");
    
    function setActiveLink() {

        let index = sections.length;
        
        while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

        navLinks.forEach((link) => {
            link.classList.remove("active-orange");
            link.classList.add("nav-orange");
        });

        navLinks[index].classList.add("active-orange");
        navLinks[index].classList.remove("nav-orange");
    }

    setActiveLink();

    window.addEventListener("scroll", setActiveLink);

    window.addEventListener("scroll", function() {
        if (window.scrollY > 90) {
            header.classList.add("transparent-header");
        } else {
            header.classList.remove("transparent-header");
        }
    });
});