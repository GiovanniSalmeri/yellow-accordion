"use strict";
var accordionType = accordionType || "auto";
if (accordionType != "none") {
    document.addEventListener("DOMContentLoaded", function() {
        function resetAll(dts, init) {
            for (var i = 0; i < dts.length; i++) {
                if (init) {
                    dts[i].setAttribute("role", "button");
                    dts[i].setAttribute("tabindex", "0");
                    dts[i].addEventListener("click", function(e) { change(e.currentTarget); }, false);
                    dts[i].addEventListener("keydown", function(e) { if (e.which === 13) this.click(); }, false);
                }
                dts[i].setAttribute("aria-expanded", "false");
                var dd = dts[i].nextElementSibling;
                dd.setAttribute("aria-hidden", "true");
                dd.style.maxHeight = 0;
            }
        }
        function change(el) {
            var dd = el.nextElementSibling;
            if (el.getAttribute("aria-expanded") == "true") {
                el.setAttribute("aria-expanded", "false");
                dd.setAttribute("aria-hidden", "true"); 
                dd.style.maxHeight = 0;
            } else {
                if (accordionType != "manual") {
                    resetAll(el.parentElement.getElementsByTagName("dt"), false);
                }
                el.setAttribute("aria-expanded", "true");
                dd.setAttribute("aria-hidden", "false"); 
                dd.style.maxHeight = dd.scrollHeight + "px";
            }
        }
        resetAll(document.getElementsByTagName("dt"), true);
    });
}
