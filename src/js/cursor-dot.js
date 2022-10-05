document.addEventListener(
    "DOMContentLoaded",
    function () {
        var cursor = {
            delay: 12,
            _x: 0,
            _y: 0,
            endX: window.innerWidth / 2,
            endY: window.innerHeight / 2,
            cursorVisible: true,
            cursorScaled: false,
            $outline: document.querySelector(".cursor-dot"),

            init: function () {
                // Set up element sizes
                this.outlineSize = this.$outline.offsetWidth;

                this.setupEventListeners();
                this.animateDotOutline();
            },

            setupEventListeners: function () {
                var self = this;

                // Anchor hovering
                document.querySelectorAll("a[href]:not([disabled]), button:not([disabled]), summary").forEach(function (el) {
                    el.addEventListener("mouseover", function () {
                        self.cursorScaled = true;
                        self.toggleCursorSize();
                    });
                    el.addEventListener("mouseout", function () {
                        self.cursorScaled = false;
                        self.toggleCursorSize();
                    });
                });

                document.querySelectorAll("a[data-hover-text]:not([disabled])").forEach(function (el) {
                    el.addEventListener("mouseover", function () {
                        self.cursorScaled = true;
                        self.toggleCursorSizeHoverText();
                        self.$outline.dataset.hovering = 'text';
                        self.$outline.innerHTML = "<span>" + el.dataset.hoverText + "<span>";
                        self.$outline.style.opacity = 1;
                    });
                    el.addEventListener("mouseout", function () {
                        self.cursorScaled = false;
                        self.toggleCursorSizeHoverText();
                        self.$outline.dataset.hovering = '';
                        self.$outline.innerHTML = "";
                    });
                });

                // Click events
                document.addEventListener("mousedown", function () {
                    self.cursorScaled = true;
                    self.toggleCursorSize();
                });
                document.addEventListener("mouseup", function () {
                    self.cursorScaled = false;
                    self.toggleCursorSize();
                });

                document.addEventListener("mousemove", function (e) {
                    // Show the cursor
                    self.cursorVisible = true;
                    self.toggleCursorVisibility();

                    // Position the dot
                    self.endX = e.clientX || e.pageX;
                    self.endY = e.clientY || e.pageY;
                });

                // Hide/show cursor
                document.addEventListener("mouseenter", function (e) {
                    self.cursorVisible = true;
                    self.toggleCursorVisibility();
                });

                document.addEventListener("mouseleave", function (e) {
                    self.cursorVisible = true;
                    self.toggleCursorVisibility();
                });
            },

            animateDotOutline: function () {
                var self = this;

                self._x += (self.endX - self._x) / self.delay;
                self._y += (self.endY - self._y) / self.delay;
                self.$outline.style.top = ((self._y / 16) + -1) + "rem";
                self.$outline.style.left = ((self._x / 16) + 1) + "rem";

                requestAnimationFrame(this.animateDotOutline.bind(self));
            },

            toggleCursorSize: function () {
                var self = this;

                if (self.cursorScaled) {
                    self.$outline.style.transform =
                        "translate(-50%, -50%) scale(.666)";
                } else {
                    self.$outline.style.transform =
                        "translate(-50%, -50%) scale(1)";
                }
            },

            toggleCursorSizeHoverText: function () {
                var self = this;

                if (self.cursorScaled) {
                    self.$outline.style.transform =
                        "translate(5em, -5em) scale(10)";
                } else {
                    self.$outline.style.transform =
                        "translate(-50%, -50%) scale(1)";
                }
            },

            toggleCursorVisibility: function () {
                var self = this;

                if (self.cursorVisible) {
                    self.$outline.style.opacity = .75;
                } else {
                    self.$outline.style.opacity = 0;
                }
            },
        };

        cursor.init();
    },
    false
);
