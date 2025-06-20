let logo = document.getElementById("logo");
let circles = logo.getElementsByTagName("circle");

new Audio("/home/logo/hover.opus");

for (let circle of Array.from(circles)) {
    circle.style.opacity = 0;

    let copiedCircle = circle.cloneNode(true);
    logo.appendChild(copiedCircle);

    setTimeout(
        () => {
            copiedCircle.style.transition = "500ms";
            copiedCircle.style.opacity = 1;

            setTimeout(
                () => {
                    circle.style.transition = "3000ms ease-in-out";
                    circle.style.opacity = 1;
                    circle.style.filter = "url(#glow)";
                },
                Math.pow(30, Math.random()) - 1 + 500,
            ) * 240;
        },
        (Math.pow(15, Math.random()) - 1) * 240,
    );

    let lastHover = 0;
    let r = circle.getAttribute("r");
    let isOn = false;
    copiedCircle.onmouseover = function () {
        isOn = true;
        lastHover = Date.now();
        logo.appendChild(circle);
        logo.appendChild(copiedCircle);
        setTimeout(() => {
            if (!isOn) return;
            let hoverSound = new Audio("/home/logo/hover.opus");
            hoverSound.play();
            circle.setAttribute("r", r * 4);
            copiedCircle.setAttribute("r", r * 4);
        }, 20);
    };

    copiedCircle.onmouseout = function () {
        isOn = false;
        let wait = lastHover + 500 - Date.now();
        if (wait < 0) {
            circle.setAttribute("r", r);
            copiedCircle.setAttribute("r", r);
        } else {
            setTimeout(copiedCircle.onmouseout, wait);
        }
    };
}

logo.removeAttribute("hidden");
