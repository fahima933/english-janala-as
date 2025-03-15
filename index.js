
window.addEventListener("scroll", function () {
    let navbar = document.getElementById("navbar");

    if (window.scrollY > 00) {
        navbar.classList.add("fixed");
    } else {
        navbar.classList.remove("fixed");
    }
});

document.querySelectorAll('.relative').forEach(div => {
    const incrementBtn = div.querySelector('.incrementBtn');
    const decrementBtn = div.querySelector('.decrementBtn');
    const secondPara = div.querySelector('.secondPara');

    incrementBtn.addEventListener("click", () => {
        secondPara.classList.remove("hidden");
        incrementBtn.classList.add("hidden");
        decrementBtn.classList.remove("hidden");
    });

    decrementBtn.addEventListener("click", () => {
        secondPara.classList.add("hidden");
        incrementBtn.classList.remove("hidden");
        decrementBtn.classList.add("hidden");
    });
});


