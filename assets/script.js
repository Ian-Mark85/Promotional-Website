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
    handleScroll();
});

function navigateToPage(pageId){
    hideSidebar();
    switchPage(pageId);
    history.pushState({page: pageId}, "", `#$(pageId)`);
}


function switchPage(pageId) {
    
    const pages = document.querySelectorAll(".page");
    pages.forEach(page => page.classList.remove("visible"));

    
    const page = document.getElementById(pageId);
    if (page) {
        page.classList.add("visible");
    }
}


window.addEventListener("popstate", (event) => {
    const pageId = event.state ? event.state.page : "home";
    switchPage(pageId);
});

document.addEventListener("DOMContentLoaded", () => {
    const pageId = window.location.hash.replace("#", "") || "home";
    switchPage(pageId);
});