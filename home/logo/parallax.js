let mainspace = document.getElementById("mainspace");
let topurls = document.getElementById("topurls");

let up = 0;
let left = 0;
document.getElementById("mainspacecontainer").onmousemove = function (e) {
    up = window.innerHeight / 2 - e.clientY;
    left = window.innerWidth / 2 - e.clientX;

    mainspace.style.top = `${up * 0.02}px`;
    mainspace.style.left = `${left * 0.02}px`;

    topurls.style.top = `${up * 0.01}px`;
    topurls.style.left = `${left * 0.01}px`;
};
