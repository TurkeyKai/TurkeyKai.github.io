/* =====================================
   effects.js
   Advanced Visual Effects
===================================== */



// ==============================
// Mouse Moving Light Effect
// ==============================


document.addEventListener(

    "mousemove",

    function(event){



        const x =

        event.clientX;



        const y =

        event.clientY;






        document.documentElement.style

        .setProperty(

            "--mouse-x",

            x + "px"

        );





        document.documentElement.style

        .setProperty(

            "--mouse-y",

            y + "px"

        );



    }

);








// ==============================
// Card 3D Hover Effect
// ==============================


const cards =

document.querySelectorAll(

    ".card"

);





cards.forEach(

    card => {



        card.addEventListener(

            "mousemove",

            function(event){





                const rect =

                card.getBoundingClientRect();





                const x =

                event.clientX -

                rect.left;





                const y =

                event.clientY -

                rect.top;






                const centerX =

                rect.width / 2;





                const centerY =

                rect.height / 2;







                const rotateX =

                (

                    y - centerY

                )

                /

                20;







                const rotateY =

                (

                    centerX - x

                )

                /

                20;







                card.style.transform =


                `

                perspective(800px)

                rotateX(${rotateX}deg)

                rotateY(${rotateY}deg)

                translateY(-10px)

                `;



            }

        );







        card.addEventListener(

            "mouseleave",

            function(){



                card.style.transform =

                "";



            }

        );



    }

);









// ==============================
// Dynamic Cursor Glow
// ==============================


const glow =

document.createElement(

    "div"

);





glow.className =

"cursor-glow";





document.body.appendChild(

    glow

);








document.addEventListener(

    "mousemove",

    function(event){



        glow.style.left =

        event.clientX + "px";





        glow.style.top =

        event.clientY + "px";



    }

);