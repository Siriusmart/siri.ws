new Audio().play().catch(() => {
    document.body.onauxclick =
        document.body.oncontextmenu =
        document.body.onclick =
        document.body.onkeydown=
            () => {
                let mutecontainer = document.getElementById("mutecontainer");
                mutecontainer.style.transition = "200ms";
                mutecontainer.style.opacity = 0;
                setTimeout(() => {
                    mutecontainer.style.display = "none";
                }, 200);
            };
});
