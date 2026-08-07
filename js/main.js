/* =====================================
   language.js
   Simple Multi Language System
===================================== */


function changeLanguage(language){


    const elements =
    document.querySelectorAll(
        "[data-cn]"
    );



    elements.forEach(element=>{


        if(language==="cn"){


            element.innerHTML =
            element.dataset.cn;


        }


        else if(language==="en"){


            element.innerHTML =
            element.dataset.en;


        }


        else if(language==="fr"){


            element.innerHTML =
            element.dataset.fr;


        }


    });



    localStorage.setItem(
        "preferredLanguage",
        language
    );


}





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



document.addEventListener(
    "DOMContentLoaded",
    loadLanguage
);