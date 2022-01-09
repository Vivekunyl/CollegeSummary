stickyElem = document.getElementById("navbar");
stickyElem_1 = document.getElementById("accessBar");
ulcolor = document.getElementById("ulcolor");
acolor = document.querySelectorAll(".acolor");
blogShortcuts = document.querySelector(".blogShortcuts");

    currStickyPos = stickyElem.getBoundingClientRect().top + window.pageYOffset;
    currStickyPos1 = stickyElem.getBoundingClientRect().top + window.pageYOffset
    window.onscroll = function() {
         
        /* Check if the current Y offset
        is greater than the position of
        the element */
        if(window.pageYOffset > currStickyPos && window.pageYOffset > currStickyPos1) {
            if(window.innerWidth>800){
                stickyElem.style.position = "fixed";
                stickyElem.style.top = "0rem";
                stickyElem_1.style.position = "fixed";
                stickyElem_1.style.top = "16vh";
            }
            else if(window.innerWidth < 800 && window.innerWidth > 600){
                stickyElem.style.position = "fixed";
                stickyElem.style.top = "0rem";
                stickyElem_1.style.position = "fixed";
                stickyElem_1.style.top = "23vh";
            }
            else{
                stickyElem.style.display = "none";
                stickyElem.style.top = "0rem";
                stickyElem_1.style.position = "fixed";
                stickyElem_1.style.top = "0rem";
                stickyElem_1.style.height = "22vh";
                ulcolor.style.backgroundColor ="#404952";
                blogShortcuts.style.marginTop = "15rem";
                acolor.forEach(element => {
                    element.style.color = "#ffffff";
                });
            }
        } else {
            if(window.innerWidth < 600){
                stickyElem.style.display = "flex";
                stickyElem.style.position = "relative";
                stickyElem.style.top = "initial";
                stickyElem_1.style.position = "relative";
                stickyElem_1.style.top = "initial";
                stickyElem_1.style.height = "27vh";
                ulcolor.style.backgroundColor ="#ffffff";
                blogShortcuts.style.marginTop = "0rem";
                acolor.forEach(element => {
                    element.style.color = "#404952";
                });
            }
            else{
                stickyElem.style.display = "flex";
                stickyElem.style.position = "relative";
                stickyElem.style.top = "initial";
                stickyElem_1.style.position = "relative";
                stickyElem_1.style.top = "initial";
            }

        }
    }

// Function to load data to default blog division

loadData("script/defaultBlog.txt");

async function loadData(file) {
  let myObject = await fetch(file);
  let myText = await myObject.text();
  document.getElementById("DefaultBlog").innerHTML = myText;
}

//Default blog division

loadDefaultData("script/default.txt");

async function loadDefaultData(file) {
  let myObject = await fetch(file);
  let myText = await myObject.text();
  document.getElementById("getBlogData").innerHTML = myText;
}

//Function to load Blog content

async function loadBlogData(file) {
  let myObject = await fetch(file);
  let myText = await myObject.text();
  document.getElementById("getBlogData").innerHTML = myText;
}

//Best College
const  best_College = () =>{
    document.getElementById("getBlogData").innerHTML="";
    document.getElementById("DefaultBlog").style.display="none";
    loadBlogData("script/bestCollege.txt");
}

//About gbpiet
const gbpiet = () =>{
    document.getElementById("getBlogData").innerHTML="";
    document.getElementById("DefaultBlog").style.display="none";
    loadBlogData("script/aboutgbpiet.txt");
}


//about backend

const backend = () =>{
    document.getElementById("getBlogData").innerHTML="";
    document.getElementById("DefaultBlog").style.display="none";
    loadBlogData("script/aboutbackend.txt");
}

//about front end

const frontend = () =>{
    document.getElementById("getBlogData").innerHTML="";
    document.getElementById("DefaultBlog").style.display="none";
    loadBlogData("script/aboutfrontend.txt");
}