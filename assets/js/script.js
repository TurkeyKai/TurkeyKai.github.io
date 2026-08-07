/* =================================================
   Kai Teng Portfolio
   Main JavaScript System
   Apple Style
================================================= */



/* =========================
   Loading
========================= */


window.addEventListener(
"load",
()=>{


    const loader =
    document.getElementById(
        "loader"
    );



    if(loader){


        loader.style.opacity="0";


        setTimeout(()=>{


            loader.style.display="none";


        },700);


    }



});









/* =========================
   Dark Mode
========================= */


const themeButton =
document.getElementById(
    "theme"
);



function enableDark(){


    document.body.classList.add(
        "dark"
    );


    if(themeButton){

        themeButton.innerHTML="☀️";

    }


    localStorage.setItem(
        "theme",
        "dark"
    );

}



function disableDark(){


    document.body.classList.remove(
        "dark"
    );


    if(themeButton){

        themeButton.innerHTML="🌙";

    }



    localStorage.setItem(
        "theme",
        "light"
    );


}






if(themeButton){



    themeButton.addEventListener(
    "click",
    (event)=>{


        createRipple(event);



        const dark =
        document.body.classList.contains(
            "dark"
        );



        if(dark){

            disableDark();

        }
        else{

            enableDark();

        }



    });


}







if(
localStorage.getItem("theme")
==="dark"
){

    enableDark();

}










/* =========================
   Theme Ripple
========================= */


function createRipple(event){



    const ripple =
    document.createElement(
        "div"
    );



    ripple.className=
    "theme-ripple";



    ripple.style.left =
    event.clientX+"px";



    ripple.style.top =
    event.clientY+"px";



    document.body.appendChild(
        ripple
    );



    setTimeout(()=>{


        ripple.remove();


    },1000);


}









/* =========================
   Hamburger Menu
========================= */


const menuButton =
document.getElementById(
    "menu-toggle"
);



const navLinks =
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


    }



}






if(menuButton){


    menuButton.addEventListener(
    "click",
    (event)=>{


        event.stopPropagation();



        const opened =
        navLinks.classList.toggle(
            "active"
        );



        menuButton.classList.toggle(
            "open",
            opened
        );



        menuButton.innerHTML =
        opened ? "✕" : "☰";



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
.forEach(
link=>{


    link.addEventListener(
    "click",
    closeMenu
    );


});









/* =========================
   Scroll Reveal
========================= */


const reveals =
document.querySelectorAll(
".reveal"
);



function reveal(){


    reveals.forEach(
    item=>{


        const top =
        item.getBoundingClientRect()
        .top;



        if(
        top <
        window.innerHeight-120
        ){


            item.classList.add(
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









/* =========================
   Cursor Glow
========================= */


const glow =
document.querySelector(
".cursor-glow"
);



if(
window.innerWidth>768
&&
glow
){



document.addEventListener(
"mousemove",
(event)=>{


    glow.style.left =
    event.clientX-150+"px";



    glow.style.top =
    event.clientY-150+"px";



});


}









/* =========================
   Gallery Lightbox
========================= */


const images =
document.querySelectorAll(
".photo-card img"
);



const lightbox =
document.getElementById(
"lightbox"
);



const lightboxImage =
document.getElementById(
"lightbox-image"
);



const closeLightbox =
document.getElementById(
"close-lightbox"
);



const nextImage =
document.getElementById(
"next-image"
);




let currentIndex=0;





function openLightbox(index){


    currentIndex=index;


    lightboxImage.src =
    images[index].src;



    lightbox.classList.add(
        "active"
    );


}







images.forEach(
(image,index)=>{


    image.addEventListener(
    "click",
    ()=>{


        openLightbox(index);


    });


});







function closeGallery(){


    lightbox.classList.remove(
        "active"
    );


}



if(closeLightbox){


    closeLightbox.addEventListener(
    "click",
    closeGallery
    );


}







if(lightbox){


    lightbox.addEventListener(
    "click",
    (event)=>{


        if(
        event.target===lightbox
        ){

            closeGallery();

        }


    });


}







if(nextImage){


    nextImage.addEventListener(
    "click",
    ()=>{


        currentIndex++;



        if(
        currentIndex>=images.length
        ){

            currentIndex=0;

        }



        lightboxImage.src =
        images[currentIndex].src;



    });


}







document.addEventListener(
"keydown",
(event)=>{


    if(
    event.key==="Escape"
    ){

        closeGallery();

    }


});









/* =========================
   Language Animation Support
========================= */


const style =
document.createElement(
"style"
);



style.innerHTML=`

.language-changing{

opacity:0;

transform:

translateY(10px);

transition:.25s ease;

}

`;



document.head.appendChild(
style
);