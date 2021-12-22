stickyElem = document.getElementById("navbar");
stickyElem_1 = document.getElementById("accessBar");
     
    /* Gets the amount of height
    of the element from the
    viewport and adds the
    pageYOffset to get the height
    relative to the page */
    currStickyPos = stickyElem.getBoundingClientRect().top + window.pageYOffset;
    currStickyPos1 = stickyElem.getBoundingClientRect().top + window.pageYOffset
    window.onscroll = function() {
         
        /* Check if the current Y offset
        is greater than the position of
        the element */
        if(window.pageYOffset > currStickyPos && window.pageYOffset > currStickyPos1) {
            stickyElem.style.position = "fixed";
            stickyElem.style.top = "0rem";
            stickyElem_1.style.position = "fixed";
            stickyElem_1.style.top = "16vh";
        } else {
            stickyElem.style.position = "relative";
            stickyElem.style.top = "initial";
            stickyElem_1.style.position = "relative";
            stickyElem_1.style.top = "initial";

        }
    }