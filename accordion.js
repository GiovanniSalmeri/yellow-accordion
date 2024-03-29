// Accordion extension, https://github.com/GiovanniSalmeri/yellow-accordion

"use strict";
document.addEventListener("DOMContentLoaded", function() {
    if (accordionType!="none") {
        function resetAll(dts, init) {
            dts.forEach(function(dt, i) {
                var dd = dt.nextElementSibling;
                if (dd.tagName=="DD") {
                    if (init) {
                        var button = document.createElement("button");
                        var id = "accordion-panel-"+i;                        
                        button.innerHTML = dt.innerHTML;
                        button.setAttribute("aria-controls", id);
                        button.addEventListener("click", toggle);
                        dt.textContent = "";
                        dt.appendChild(button);
                        dt.classList.add("accordion");
                        dd.id = id;
                    }
                    dt.firstChild.setAttribute("aria-expanded", "false");
                    dd.setAttribute("aria-hidden", "true");
                    dd.style.maxHeight = 0;
                }
            });
        }

        function toggle() {
            var dd = this.parentElement.nextElementSibling;
            if (dd.tagName=="DD") {
                var close = this.getAttribute("aria-expanded")=="true";
                if (!close && accordionType!="manual") {
                    resetAll(this.parentElement.parentElement.querySelectorAll("dt"), false);
                }
                this.setAttribute("aria-expanded", !close);
                dd.setAttribute("aria-hidden", close); 
                dd.style.maxHeight = close ? 0 : dd.scrollHeight+"px";
            }
        }
        resetAll(document.querySelectorAll("dt"), true);
    }
});
