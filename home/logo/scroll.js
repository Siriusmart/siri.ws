{
    let previousStop = 0;
    let hasTimeOut = false;
    window.onwheel = () => {
        previousStop = Date.now();

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
            if (
                window.scrollY == document.getElementById("credit").scrollHeight
            ) {
                window.scrollTo({
                    top: window.scrollY - 10,
                    behavior: "smooth",
                });
            }
        }, 200);
    };
}
