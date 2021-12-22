stickyElem = document.getElementById("navbar");
     
    /* Gets the amount of height
    of the element from the
    viewport and adds the
    pageYOffset to get the height
    relative to the page */
    currStickyPos = stickyElem.getBoundingClientRect().top + window.pageYOffset;
    window.onscroll = function() {
         
        /* Check if the current Y offset
        is greater than the position of
        the element */
        if(window.pageYOffset > currStickyPos) {
            stickyElem.style.position = "fixed";
            stickyElem.style.top = "0rem";
            
        } else {
            stickyElem.style.position = "relative";
            stickyElem.style.top = "initial";
        }
    }