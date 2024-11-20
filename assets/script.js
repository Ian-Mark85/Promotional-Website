function showSidebar(){
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = 'flex';
}
function hideSidebar(){
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = 'none';
}

document.addEventListener("DOMContentLoaded", () => {
    const featuresSection = document.getElementById("features");

    function handleScroll() {
        const rect = featuresSection.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            featuresSection.classList.add("visible");
        }
    }

    window.addEventListener("scroll", handleScroll);
    // Initial check in case it's already in view
    handleScroll();
});