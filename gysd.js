const mySubmit= document.getElementById("mySubmit");
const helloH1 = document.getElementById("hello-h1");
const names = ["explorer", "traveler", "adventurer",];
const randomName = names[Math.floor(Math.random() * names.length)];
helloH1.textContent = `Hello, ${randomName}!!`;

window.addEventListener("load", () => {
    const loading = document.getElementById("loading");

    setTimeout(() => {
        loading.classList.add("fade-out");
        setTimeout(() => {
            document.body.classList.add("show-elements");
            document.body.style.overflow = "auto";
        }, 800);
    }, 1500);
});

window.addEventListener("load", playAnimation);
document.getElementById("mySubmit").addEventListener("click", playAnimation);

