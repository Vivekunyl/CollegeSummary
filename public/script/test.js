const get_display_none = () => {
    if (window.innerWidth < 601) {
        document.getElementById('navbar').style.display = 'none';
        document.getElementById('biology').style.display = 'none';
        document.getElementById('physics').style.display = 'none';
        document.getElementById('chemistry').style.display = 'none';
        document.getElementById('computer').style.display = 'none';
        document.getElementById('mathematics').style.display = 'none';
        document.getElementById('reasoning').style.display = 'none';
        document.getElementById('quant').style.display = 'none';
        document.getElementById('mcqLoadingSection').style.display = 'flex';
        document.getElementById('mcqFilters').style.display = 'none';
        document.getElementById('footer_section').style.display = 'none';
    }
    else {
        document.getElementById('biology').style.display = 'none';
        document.getElementById('physics').style.display = 'none';
        document.getElementById('chemistry').style.display = 'none';
        document.getElementById('computer').style.display = 'none';
        document.getElementById('mathematics').style.display = 'none';
        document.getElementById('reasoning').style.display = 'none';
        document.getElementById('quant').style.display = 'none';
        document.getElementById('mcqLoadingSection').style.display = 'flex';
        document.getElementById('mcqFilters').style.display = 'none';
        document.getElementById('footer_section').style.display = 'none';
    }


}

//Functions for Biology test Section


function biology_1() {
    get_display_none();
    document.getElementById("mcqLoadingSection").innerHTML = '<object id="biotestobj1" type="text/html" data="/MCQpages/biology_1.html" ></object>';
}


function biology_2() {
    get_display_none();
    document.getElementById("mcqLoadingSection").innerHTML = '<object id="biotestobj1" type="text/html" data="/MCQpages/biology_2.html" ></object>';
}

//Functions for Chemistpry test

function chemistrytest_1() {
    get_display_none();
    document.getElementById("mcqLoadingSection").innerHTML = '<object id="biotestobj1" type="text/html" data="/MCQpages/chemistry_1.html" ></object>';
}

function chemistrytest_2() {
    get_display_none();
    document.getElementById("mcqLoadingSection").innerHTML = '<object id="biotestobj1" type="text/html" data="/MCQpages/chemistry_2.html" ></object>';
}

function chemistrytest_3() {
    get_display_none();
    document.getElementById("mcqLoadingSection").innerHTML = '<object id="biotestobj1" type="text/html" data="/MCQpages/chemistry_3.html" ></object>';
}

function chemistrytest_4() {
    get_display_none();
    document.getElementById("mcqLoadingSection").innerHTML = '<object id="biotestobj1" type="text/html" data="/MCQpages/chemistry_4.html" ></object>';
}

//Functions for Physics section

function physics_1(){
    get_display_none();
    document.getElementById("mcqLoadingSection").innerHTML = '<object id="biotestobj1" type="text/html" data="/MCQpages/physics_1.html" ></object>';
}

function physics_2(){
    get_display_none();
    document.getElementById("mcqLoadingSection").innerHTML = '<object id="biotestobj1" type="text/html" data="/MCQpages/physics_2.html" ></object>';
}

function physics_3(){
    get_display_none();
    document.getElementById("mcqLoadingSection").innerHTML = '<object id="biotestobj1" type="text/html" data="/MCQpages/physics_3.html" ></object>';
}

function physics_4(){
    get_display_none();
    document.getElementById("mcqLoadingSection").innerHTML = '<object id="biotestobj1" type="text/html" data="/MCQpages/physics_4.html" ></object>';
}

//Functions for Computer Section

function computer_1(){
    get_display_none();
    document.getElementById("mcqLoadingSection").innerHTML = '<object id="biotestobj1" type="text/html" data="/MCQpages/computer_1.html" ></object>';
}

function computer_2(){
    get_display_none();
    document.getElementById("mcqLoadingSection").innerHTML = '<object id="biotestobj1" type="text/html" data="/MCQpages/computer_2.html" ></object>';
}

//Functions for Mathematics test

function mathematicstest_1(){
    get_display_none();
    document.getElementById("mcqLoadingSection").innerHTML = '<object id="biotestobj1" type="text/html" data="/MCQpages/math_1.html" ></object>';
}

function mathematicstest_2() {
    get_display_none();
    document.getElementById("mcqLoadingSection").innerHTML = '<object id="biotestobj1" type="text/html" data="/MCQpages/math_2.html" ></object>';
}

function mathematicstest_3() {
    get_display_none();
    document.getElementById("mcqLoadingSection").innerHTML = '<object id="biotestobj1" type="text/html" data="/MCQpages/math_3.html" ></object>';
}






stickyElem = document.getElementById("navbar");
stickyElem_1 = document.getElementById("accessBar");
ulcolor = document.getElementById("ulcolor");
acolor = document.querySelectorAll(".acolor");
biology=document.getElementById("biology");

currStickyPos = stickyElem.getBoundingClientRect().top + window.pageYOffset;
currStickyPos1 = stickyElem.getBoundingClientRect().top + window.pageYOffset
window.onscroll = function () {

    /* Check if the current Y offset
    is greater than the position of
    the element */
    if (window.pageYOffset > currStickyPos && window.pageYOffset > currStickyPos1) {
        if (window.innerWidth > 800) {
            stickyElem.style.position = "fixed";
            stickyElem.style.top = "0rem";
            stickyElem_1.style.position = "fixed";
            stickyElem_1.style.top = "16vh";
        }
        else if (window.innerWidth < 800 && window.innerWidth > 600) {
            stickyElem.style.position = "fixed";
            stickyElem.style.top = "0rem";
            stickyElem_1.style.position = "fixed";
            stickyElem_1.style.top = "23vh";
        }
        else {
            stickyElem.style.display = "none";
            stickyElem.style.top = "0rem";
            stickyElem_1.style.position = "fixed";
            stickyElem_1.style.top = "0rem";
            stickyElem_1.style.height = "22vh";
            ulcolor.style.backgroundColor = "#404952";
            biology.style.marginTop = "12rem";
            acolor.forEach(element => {
                element.style.color = "#ffffff";
            });
        }
    } else {
        if (window.innerWidth < 600) {
            stickyElem.style.display = "none";
            stickyElem.style.position = "relative";
            stickyElem.style.top = "initial";
            stickyElem_1.style.position = "relative";
            stickyElem_1.style.top = "initial";
            stickyElem_1.style.height = "27vh";
            ulcolor.style.backgroundColor = "#ffffff";
            biology.style.marginTop = "0rem";
            acolor.forEach(element => {
                element.style.color = "#404952";
            });
        }
        else {
            stickyElem.style.display = "flex";
            stickyElem.style.position = "relative";
            stickyElem.style.top = "initial";
            stickyElem_1.style.position = "relative";
            stickyElem_1.style.top = "initial";
        }

    }
}