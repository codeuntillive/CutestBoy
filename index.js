window.addEventListener("scroll", (event) => {
    let nav = document.getElementsByTagName("nav")[0];
    
    if (window.scrollY > 0) {
        nav.style.backgroundColor = "rgba(0, 0, 0, 0.858)";
    } else {
        nav.style.backgroundColor = "transparent";
        
    }
});
