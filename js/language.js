/* =====================================
   language.js
   Multi-language System
   + Dynamic JSON Refresh
===================================== */



// ==============================
// Change Language
// ==============================


function changeLanguage(language){



    const elements =

    document.querySelectorAll(

        "[data-cn]"

    );






    elements.forEach(

        element => {



            if(language === "cn"){


                element.innerHTML =

                element.dataset.cn;


            }





            else if(language === "en"){


                element.innerHTML =

                element.dataset.en;


            }





            else if(language === "fr"){


                element.innerHTML =

                element.dataset.fr;


            }




        }


    );







    localStorage.setItem(

        "preferredLanguage",

        language

    );







    // Reload dynamic projects


    if(

        typeof loadProjects === "function"

    ){



        const container =

        document.querySelector(

            "#project-container"

        );



        if(container){



            container.innerHTML = "";



            loadProjects();



        }



    }



}









// ==============================
// Load Saved Language
// ==============================


function loadLanguage(){



    const savedLanguage =

    localStorage.getItem(

        "preferredLanguage"

    );






    if(savedLanguage){



        changeLanguage(

            savedLanguage

        );



    }



    else{



        changeLanguage(

            "en"

        );


    }



}








// ==============================
// Initialize
// ==============================


document.addEventListener(

    "DOMContentLoaded",

    loadLanguage

);