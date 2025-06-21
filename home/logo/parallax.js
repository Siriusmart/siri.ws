if (!window.isMobile) {
    let mainspace = document.getElementById("mainspace");
    let topurls = document.getElementById("topurls");
    let socials = document.getElementById("socials");
    let emailbelow = document.getElementById("emailbelow");

    let up = 0;
    let left = 0;
    document.getElementById("mainspacecontainerouter").onmousemove = function (
        e,
    ) {
        up = window.innerHeight / 2 - e.clientY;
        left = window.innerWidth / 2 - e.clientX;

        mainspace.style.top = `${up * 0.02}px`;
        mainspace.style.left = `${left * 0.02}px`;

        topurls.style.top = `${up * 0.01}px`;
        topurls.style.left = `${left * 0.01}px`;

        emailbelow.style.transform = `translate(${left * 0.01}px,${up * 0.01}px)`;
        socials.style.transform = `translate(${left * 0.01}px,${up * 0.01}px)`;
    };
}
