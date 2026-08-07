/* =====================================
   language.js
   JSON Based Multi Language System
===================================== */


let currentLanguage = "en";



// ==============================
// Load Language File
// ==============================


async function loadLanguage(language){


    try{


        const response = await fetch(
            `lang/${language}.json`
        );


        const translations = await response.json();



        applyLanguage(translations);



        currentLanguage = language;



        localStorage.setItem(
            "preferredLanguage",
            language
        );



    }


    catch(error){


        console.error(
            "Language loading error:",
            error
        );


    }


}







// ==============================
// Apply Translation
// ==============================


function applyLanguage(translations){



    const elements = document.querySelectorAll(

        "[data-i18n]"

    );




    elements.forEach(element => {



        const key =

        element.getAttribute(
            "data-i18n"
        );



        if(translations[key]){


            element.innerHTML =

            translations[key];


        }



    });





    // Update page title


    const title = document.querySelector(

        "title[data-i18n]"

    );



    if(title){


        const key = title.dataset.i18n;


        if(translations[key]){


            document.title =

            translations[key];


        }


    }



}








// ==============================
// Change Language Button
// ==============================


function changeLanguage(language){


    loadLanguage(language);


}








// ==============================
// Load Saved Language
// ==============================


function initLanguage(){



    const saved =

    localStorage.getItem(

        "preferredLanguage"

    );




    if(saved){


        loadLanguage(saved);


    }

    else{


        loadLanguage(
            "en"
        );


    }



}








// ==============================
// Initialize
// ==============================


document.addEventListener(

    "DOMContentLoaded",

    initLanguage

);