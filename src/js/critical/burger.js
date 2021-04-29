document.addEventListener(
    "DOMContentLoaded",
    function () {
        const menuBrgr = document.getElementById("js-brgr");

        /**
         * Get’s the current setting > reverses it > sets it
         */
        const toggleBrgr = () => {
            let currentSetting = menuBrgr.getAttribute("aria-expanded");

            switch (currentSetting) {
                case "false":
                    currentSetting = "true";
                    break;
                case "true":
                    currentSetting = "false";
                    break;
            }

            menuBrgr.setAttribute("aria-expanded", currentSetting);
            document.documentElement.setAttribute("data-menu-open", currentSetting);
        };

        const smallDevice = window.matchMedia("(min-width: 36rem)");

        smallDevice.addEventListener("change", () => {
            closeBrgr();
        });

        function closeBrgr(e) {
            menuBrgr.setAttribute("aria-expanded", "false");
            document.documentElement.setAttribute("data-menu-open", "false");
        }

        /**
         * Clicking the button runs the apply setting method which grabs its parameter
         * from the toggle setting method.
         */
        menuBrgr.addEventListener("click", (evt) => {
            evt.preventDefault();

            toggleBrgr();
        });
    },
    false
);
