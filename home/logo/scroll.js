{
    let previousStop = 0;
    let hasTimeOut = false;
    let credit = document.getElementById("credit");

    function bumpPrevious() {
        previousStop = Date.now();
    }

    window.addEventListener("touchstart", bumpPrevious);
    window.addEventListener("touchmove", bumpPrevious);
    window.addEventListener("keydown", bumpPrevious);
    window.addEventListener("mousemove", bumpPrevious);

    window.addEventListener("scroll", () => {
        if (window.scrollY != credit.scrollHeight) previousStop = Date.now();
        else return;

        function scrollToTop() {
            if (Date.now() - previousStop > 1500) {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                });
                hasTimeOut = false;
                return;
            }
            setTimeout(scrollToTop, previousStop + 1500 - Date.now());
        }

        if (!hasTimeOut) {
            hasTimeOut = true;
            scrollToTop();
        }

        setTimeout(() => {
            if (window.scrollY == credit.scrollHeight) {
                window.scrollTo({
                    top: window.scrollY - 10,
                    behavior: "smooth",
                });
            }
        }, 200);
    });
}
