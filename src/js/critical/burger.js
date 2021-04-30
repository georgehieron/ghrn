document.addEventListener(
    "DOMContentLoaded",
    function () {
        const menuBrgr = document.getElementById("js-brgr");
        const brgrLabel = document.getElementById("js-brgr-label");
        const brgrTxtOpen = brgrLabel.querySelector(".open");
        const brgrTxtClose = brgrLabel.querySelector(".close");
        const brgrTxtMenu = brgrLabel.querySelector(".menu");

        console.log(brgrTxtOpen);

        /**
         * Get’s the current setting > reverses it > sets it
         */
        const toggleBrgr = () => {
            let currentSetting = menuBrgr.getAttribute("aria-expanded");
            let oppositeSetting;

            switch (currentSetting) {
                case "false":
                    currentSetting = "true";
                    oppositeSetting = "false";
                    break;
                case "true":
                    currentSetting = "false";
                    oppositeSetting = "true";
                    break;
            }

            menuBrgr.setAttribute("aria-expanded", currentSetting);
            brgrTxtOpen.setAttribute("aria-hidden", currentSetting);
            brgrTxtClose.setAttribute("data-hide", oppositeSetting);
            brgrTxtClose.setAttribute("aria-hidden", oppositeSetting);
            brgrTxtMenu.setAttribute("data-hide", currentSetting);
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
