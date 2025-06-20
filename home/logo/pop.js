new Audio("/home/logo/swoosh.opus");

document.querySelectorAll("#topurls a").forEach((url) => {
    url.onmouseover = () => {
        let hoverSound = new Audio("/home/logo/hover.opus");
        hoverSound.play();
    };

    url.onclick = () => {
        let hoverSound = new Audio("/home/logo/swoosh.opus");
        hoverSound.play();
    };
});
