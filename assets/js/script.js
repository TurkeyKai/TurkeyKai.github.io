document.addEventListener(
    "DOMContentLoaded",
    () => {


/* ======================
Page Loading Animation
====================== */


const loader =
document.getElementById("loader");


if(loader){


    window.addEventListener(
        "load",
        ()=>{


            setTimeout(
                ()=>{


                    loader.style.opacity="0";


                    loader.style.transition=
                    "opacity .6s ease";


                    setTimeout(
                        ()=>{


                            loader.style.display="none";


                        },
                        600
                    );


                },
                300
            );


        }
    );


}





/* ======================
Mouse Follow Glow
====================== */


const glow =
document.createElement("div");


glow.className=
"cursor-glow";


document.body.appendChild(glow);



document.addEventListener(
"mousemove",
(e)=>{


    glow.animate(
        {


            left:
            `${e.clientX-160}px`,


            top:
            `${e.clientY-160}px`


        },


        {


            duration:700,

            fill:"forwards"


        }

    );


});







/* ======================
Scroll Reveal
====================== */


const revealElements =
document.querySelectorAll(
".reveal"
);



function reveal(){


    revealElements.forEach(
        element=>{


            const position =
            element.getBoundingClientRect()
            .top;



            const windowHeight =
            window.innerHeight;



            if(
                position <
                windowHeight - 120
            ){


                element.classList.add(
                    "active"
                );


            }



        }
    );


}



window.addEventListener(
"scroll",
reveal
);



reveal();






/* ======================
Smooth Navigation
====================== */


const links =
document.querySelectorAll(
"nav a"
);



links.forEach(
link=>{


    link.addEventListener(
        "click",
        (e)=>{


            const target =
            document.querySelector(
                link.getAttribute("href")
            );



            if(target){


                e.preventDefault();



                target.scrollIntoView(
                    {


                        behavior:"smooth"


                    }
                );


            }



        }
    );


});







/* ======================
Dark Mode
====================== */


const themeButton =
document.getElementById(
"theme"
);



if(themeButton){


themeButton.addEventListener(
"click",
()=>{


    document.body
    .classList.toggle(
        "dark"
    );



    const dark =
    document.body
    .classList.contains(
        "dark"
    );



    localStorage.setItem(
        "darkMode",
        dark
    );



    themeButton.innerHTML =
    dark
    ?
    "☀️"
    :
    "🌙";



});


}






/* Load saved theme */


const savedTheme =
localStorage.getItem(
"darkMode"
);



if(savedTheme==="true"){


    document.body
    .classList.add(
        "dark"
    );


    if(themeButton){

        themeButton.innerHTML="☀️";

    }

}








/* ======================
Card 3D Tilt Effect
====================== */


const cards =
document.querySelectorAll(
".card"
);



cards.forEach(
card=>{


card.addEventListener(
"mousemove",
(e)=>{


const rect =
card.getBoundingClientRect();



const x =
e.clientX -
rect.left;



const y =
e.clientY -
rect.top;



const rotateX =
(
y -
rect.height/2
)
/
15;



const rotateY =
(
rect.width/2 -
x
)
/
15;



card.style.transform =
`
perspective(800px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-10px)
`;



});




card.addEventListener(
"mouseleave",
()=>{


card.style.transform="";


});



});







/* ======================
Image Lazy Animation
====================== */


const images =
document.querySelectorAll(
".photo-card img"
);



images.forEach(
img=>{


img.style.opacity="0";


img.style.transform=
"scale(.95)";


img.style.transition=
"all .8s ease";



img.onload=
()=>{


img.style.opacity="1";


img.style.transform=
"scale(1)";


};



});





});