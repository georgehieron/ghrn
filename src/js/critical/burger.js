document.addEventListener(
    "DOMContentLoaded",
    function () {
        const brgrBtn = document.getElementById("js-brgr");
        const brgrLabel = document.getElementById("js-brgr-label");
        const brgrTxtOpen = brgrLabel.querySelector(".open");
        const brgrTxtClose = brgrLabel.querySelector(".close");
        const brgrTxtMenu = brgrLabel.querySelector(".menu");
        const skipLink = document.getElementById("js-skip-link");

        /**
         * Get’s the current setting > reverses it > sets it
         */
        const toggleBrgr = () => {
            let currentSetting = brgrBtn.getAttribute("aria-expanded");
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

            brgrBtn.setAttribute("disabled", true);
            brgrBtn.setAttribute("aria-expanded", currentSetting);
            brgrTxtOpen.setAttribute("aria-hidden", currentSetting);
            brgrTxtClose.setAttribute("data-hide", oppositeSetting);
            brgrTxtClose.setAttribute("aria-hidden", oppositeSetting);
            brgrTxtMenu.setAttribute("data-hide", currentSetting);
            document.documentElement.setAttribute("data-menu-open", currentSetting);
            setTimeout(function() {
                brgrBtn.removeAttribute("disabled");
            }, 333);
        };

        const smallDevice = window.matchMedia("(min-width: 36rem)");

        smallDevice.addEventListener("change", () => {
            closeBrgr();
        });

        function closeBrgr(e) {
            brgrBtn.setAttribute("aria-expanded", "false");
            brgrTxtOpen.setAttribute("aria-hidden", false);
            brgrTxtClose.setAttribute("data-hide", true);
            brgrTxtClose.setAttribute("aria-hidden", true);
            brgrTxtMenu.setAttribute("data-hide", false);
            document.documentElement.setAttribute("data-menu-open", "false");
        }

        /**
         * Clicking the button runs the apply setting method which grabs its parameter
         * from the toggle setting method.
         */
        brgrBtn.addEventListener("click", (evt) => {
            evt.preventDefault();

            toggleBrgr();
        });

        skipLink.addEventListener("click", () => {
            closeBrgr();
        });
    },
    false
);
