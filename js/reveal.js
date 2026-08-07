/* =====================================
   reveal.js
   Scroll Reveal Animation
   + Dynamic Element Support
===================================== */



// ==============================
// Reveal Function
// ==============================


function revealOnScroll(){



    const revealElements =

    document.querySelectorAll(

        ".reveal"

    );





    const windowHeight =

    window.innerHeight;







    revealElements.forEach(

        element => {



            const elementTop =

            element

            .getBoundingClientRect()

            .top;





            const revealPoint =

            120;








            if(

                elementTop

                <

                windowHeight - revealPoint

            ){



                element.classList.add(

                    "active"

                );



            }





        }


    );



}









// ==============================
// Scroll Listener
// ==============================


window.addEventListener(

    "scroll",

    revealOnScroll

);









// ==============================
// Observe New Elements
// ==============================


const observer =

new MutationObserver(

    function(){



        revealOnScroll();



    }

);








observer.observe(

    document.body,

    {


        childList:true,


        subtree:true


    }

);








// ==============================
// Initial Run
// ==============================


document.addEventListener(

    "DOMContentLoaded",

    function(){



        revealOnScroll();



    }

);