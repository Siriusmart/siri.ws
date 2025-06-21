new Audio("/home/logo/swoosh.opus");
new Audio("/home/logo/tap.opus");

Array.from(document.querySelectorAll("#topurls a"))
    .concat(Array.from(document.querySelectorAll("#socials a")).slice(1))
    .concat(Array.from(document.querySelectorAll("#credit a")))
    .forEach((url) => {
        if (url.id == "emailbelowsocials") return;
        if (!window.isMobile)
            url.onmouseover = () => {
                let hoverSound = new Audio("/home/logo/hover.opus");
                hoverSound.play();
            };

        url.onclick = () => {
            let hoverSound = new Audio("/home/logo/swoosh.opus");
            hoverSound.play();
        };
    });

[
    document.querySelector("#socials a"),
    document.querySelector("#emailbelow a"),
    document.getElementById("emailbelowsocials"),
].forEach((email) => {
    if (!window.isMobile)
        email.onmouseover = () => {
            let hoverSound = new Audio("/home/logo/hover.opus");
            hoverSound.play();
        };

    email.onclick = () => {
        let hoverSound = new Audio("/home/logo/tap.opus");
        hoverSound.play();

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
});

window.addEventListener("blur", () => {
    window.scrollTo({
        top: 0,
        behavior: "instant",
    });
});
