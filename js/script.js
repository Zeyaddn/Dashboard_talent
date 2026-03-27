
function toggleMode() {
    document.body.classList.toggle("dark");
    const text = document.getElementById("modeText");
    const icon = document.getElementById("icon");
    // Update text & icon based on mode
    if (document.body.classList.contains("dark")) {
        text.innerText = "Light Mode";
        icon.innerText = "☀️";
    } else {
        text.innerText = "Dark Mode";
        icon.innerText = "🌙";
    }
}


window.addEventListener("load", () => {
    setTimeout(() => {
        const loader = document.getElementById("loader");
        loader.classList.add("hide");
    }, 2000);

});