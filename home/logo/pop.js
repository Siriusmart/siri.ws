new Audio("/home/logo/swoosh.opus");
new Audio("/home/logo/tap.opus");

Array.from(document.querySelectorAll(".popurl")).forEach((url) => {
    if (!window.isMobile)
        url.onmouseover = (e) => {
            if (e.target != url) return;
            let hoverSound = new Audio("/home/logo/hover.opus");
            hoverSound.play();
        };
});

Array.from(document.querySelectorAll(".whooshurl")).forEach((url) => {
    url.onclick = (e) => {
        if (e.target != url) return;
        let hoverSound = new Audio("/home/logo/swoosh.opus");
        hoverSound.play();
    };
});

Array.from(document.querySelectorAll(".takurl")).forEach((url) => {
    url.onclick = (e) => {
        if (e.target != url) return;
        let hoverSound = new Audio("/home/logo/tap.opus");
        hoverSound.play();
    };
});

window.addEventListener("blur", () => {
    window.scrollTo({
        top: 0,
        behavior: "instant",
    });
});
