/* =================================================
   Kai Teng Portfolio
   Main Interaction System
   Apple Style
================================================= */


/* =================================================
   Loading Animation
================================================= */


window.addEventListener("load",()=>{


    const loader=document.getElementById("loader");


    if(loader){


        loader.classList.add("hide");


        setTimeout(()=>{

            loader.style.display="none";

        },700);


    }


});





/* =================================================
   Dark Mode System
================================================= */


const themeButton=document.getElementById("theme");



function enableDarkMode(){


    document.body.classList.add("dark");


    if(themeButton){

        themeButton.innerHTML="☀️";

    }


    localStorage.setItem(
        "theme",
        "dark"
    );


}






function disableDarkMode(){


    document.body.classList.remove("dark");


    if(themeButton){

        themeButton.innerHTML="🌙";

    }


    localStorage.setItem(
        "theme",
        "light"
    );


}






function toggleDarkMode(event){


    const isDark =
    document.body.classList.contains("dark");



    createThemeRipple(event);



    if(isDark){

        disableDarkMode();

    }
    else{

        enableDarkMode();

    }


}






if(themeButton){


    themeButton.addEventListener(
        "click",
        toggleDarkMode
    );


}







const savedTheme =
localStorage.getItem("theme");



if(savedTheme==="dark"){


    enableDarkMode();


}










/* =================================================
   Apple Theme Ripple Animation
================================================= */


function createThemeRipple(event){


    const ripple=document.createElement("div");


    ripple.className="theme-ripple";


    ripple.style.left=
    event.clientX+"px";


    ripple.style.top=
    event.clientY+"px";



    document.body.appendChild(ripple);



    setTimeout(()=>{


        ripple.remove();


    },1000);


}









/* =================================================
   Hamburger Menu
================================================= */


const menuButton=
document.getElementById(
"menu-toggle"
);



const navLinks=
document.getElementById(
"nav-links"
);






function closeMenu(){


    if(navLinks){


        navLinks.classList.remove(
            "active"
        );


    }



    if(menuButton){


        menuButton.classList.remove(
            "open"
        );


        menuButton.innerHTML="☰";


        menuButton.setAttribute(
            "aria-expanded",
            "false"
        );


    }


}






if(menuButton && navLinks){



    menuButton.setAttribute(
        "aria-expanded",
        "false"
    );



    menuButton.addEventListener(
    "click",
    (event)=>{


        event.stopPropagation();



        const open =
        navLinks.classList.toggle(
            "active"
        );



        menuButton.classList.toggle(
            "open",
            open
        );



        menuButton.innerHTML =
        open ? "✕" : "☰";



        menuButton.setAttribute(
            "aria-expanded",
            open
        );


    });


}








document.addEventListener(
"click",
(event)=>{


    if(
        navLinks &&
        navLinks.classList.contains(
            "active"
        )
    ){


        if(
            !navLinks.contains(event.target)
            &&
            !menuButton.contains(event.target)
        ){


            closeMenu();


        }


    }


});








document.querySelectorAll(
".nav-links a"
)
.forEach(link=>{


    link.addEventListener(
    "click",
    ()=>{


        closeMenu();


    });


});









/* =================================================
   Scroll Reveal
================================================= */


const revealElements=
document.querySelectorAll(
".reveal"
);



function reveal(){


    revealElements.forEach(
    element=>{


        const position =
        element.getBoundingClientRect()
        .top;



        if(
            position <
            window.innerHeight-120
        ){


            element.classList.add(
                "active"
            );


        }


    });


}




window.addEventListener(
"scroll",
reveal
);



reveal();









/* =================================================
   Mouse Glow
================================================= */


let glow;



if(window.innerWidth>768){



    glow=document.createElement(
        "div"
    );



    glow.className=
    "cursor-glow";



    document.body.appendChild(
        glow
    );





    document.addEventListener(
    "mousemove",
    (event)=>{


        if(glow){


            glow.style.left =
            event.clientX-160+"px";


            glow.style.top =
            event.clientY-160+"px";


        }


    });


}









/* =================================================
   Language Animation Support
================================================= */


const languageStyle=
document.createElement(
"style"
);



languageStyle.innerHTML=`

.language-changing{

opacity:0;

transform:
translateY(10px);

transition:
all .25s cubic-bezier(.22,1,.36,1);

}


#loader.hide{

opacity:0;

transition:
opacity .6s ease;

}



.theme-ripple{


position:fixed;

width:500px;

height:500px;

border-radius:50%;


background:

radial-gradient(
circle,
rgba(255,255,255,.35),
transparent 70%
);


transform:
translate(-50%,-50%)
scale(0);


animation:

themeExpand 1s ease forwards;


pointer-events:none;

z-index:9999;

}




@keyframes themeExpand{


from{

transform:
translate(-50%,-50%)
scale(0);

opacity:1;

}


to{

transform:
translate(-50%,-50%)
scale(2);

opacity:0;

}


}


`;



document.head.appendChild(
languageStyle
);