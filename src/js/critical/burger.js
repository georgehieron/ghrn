document.addEventListener(
    "DOMContentLoaded",
    function () {
        const brgrBtn = document.getElementById("js-brgr");
        const brgrLabel = document.getElementById("js-brgr-label");
        const brgrTxtOpen = brgrLabel.querySelector(".open");
        const brgrTxtClose = brgrLabel.querySelector(".close");
        const brgrTxtMenu = brgrLabel.querySelector(".menu");
        const skipLink = document.getElementById("js-skip-link");
        const siteHead = document.getElementById("site-head");
        const htmlEl = document.querySelector( 'html' );

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
            document.documentElement.setAttribute(
                "data-menu-open",
                currentSetting
            );
            trapFocus(siteHead);
            setTimeout(function () {
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
            brgrBtn.focus();
        }

        function trapFocus(el) {
            var focusableEls = el.querySelectorAll('a[href]:not([disabled]), button');
            var firstFocusableEl = focusableEls[0];
            var lastFocusableEl = focusableEls[focusableEls.length - 1];
            var KEYCODE_TAB = 9;

            el.addEventListener('keydown', function (e) {
                var isTabPressed = (e.key === 'Tab' || e.keyCode === KEYCODE_TAB);

                if (!isTabPressed) {
                    return;
                }

                if (e.shiftKey) /* shift + tab */ {
                    if (document.activeElement === firstFocusableEl) {
                        lastFocusableEl.focus();
                        e.preventDefault();
                    }
                } else /* tab */ {
                    if (document.activeElement === lastFocusableEl) {
                        firstFocusableEl.focus();
                        e.preventDefault();
                    }
                }
            });
        }

        /**
         * Clicking the button runs the apply setting method which grabs its parameter
         * from the toggle setting method.
         */
        brgrBtn.addEventListener("click", (evt) => {
            evt.preventDefault();

            toggleBrgr();
        });

        document.addEventListener("keyup", (evt) => {
            evt.preventDefault();

            if (evt.key === 'Escape' && htmlEl.dataset.menuOpen === 'true') {
                closeBrgr();
            }
        });

        skipLink.addEventListener("click", () => {
            closeBrgr();
        });
    },
    false
);
