/* =====================================
   main.js
   Main Website Controller
   + JSON Data Loader
===================================== */



// ==============================
// Website Initialization
// ==============================


document.addEventListener(

    "DOMContentLoaded",

    function(){


        initializeWebsite();


    }

);








// ==============================
// Initialize
// ==============================


function initializeWebsite(){


    setActiveNavigation();


    addPageLoadedClass();



}









// ==============================
// Active Navigation
// ==============================


function setActiveNavigation(){



    const currentPage =

        window.location.pathname

        .split("/")

        .pop();





    const navLinks =

        document.querySelectorAll(

            ".nav-links a"

        );





    navLinks.forEach(

        link => {



            const linkPage =

            link.getAttribute(

                "href"

            );





            if(

                linkPage === currentPage

            ){


                link.classList.add(

                    "active"

                );


            }


        }


    );



}









// ==============================
// Page Loaded
// ==============================


function addPageLoadedClass(){



    document.body.classList.add(

        "loaded"

    );


}









// ==============================
// Load Projects JSON
// ==============================


async function loadProjects(){



    const projectContainer =

    document.querySelector(

        "#project-container"

    );





    if(!projectContainer){


        return;


    }








    try{



        const response =

        await fetch(

            "data/projects.json"

        );





        const projects =

        await response.json();








        const language =

        localStorage.getItem(

            "preferredLanguage"

        )

        ||

        "en";









        projects.forEach(

            project => {



                const card =

                document.createElement(

                    "div"

                );





                card.className =

                "card reveal";








                card.innerHTML = `



                <img

                src="${project.image}"

                style="width:100%;border-radius:20px;margin-bottom:20px;">






                <h3>

                ${project.title[language]}

                </h3>






                <p>

                ${project.description[language]}

                </p>







                <div class="tags">

                ${

                    project.tags

                    .map(

                        tag =>

                        `<span>${tag}</span>`

                    )

                    .join("")

                }

                </div>







                <a

                href="${project.link}"

                class="btn">


                View Project


                </a>




                `;







                projectContainer.appendChild(

                    card

                );



            }


        );



    }



    catch(error){



        console.error(

            "Project loading failed:",

            error

        );


    }



}









// ==============================
// Smooth Anchor Scroll
// ==============================


const anchors =

document.querySelectorAll(

    'a[href^="#"]'

);





anchors.forEach(

    anchor => {



        anchor.addEventListener(

            "click",

            function(event){



                event.preventDefault();





                const target =

                document.querySelector(

                    this.getAttribute(

                        "href"

                    )

                );





                if(target){



                    target.scrollIntoView({

                        behavior:"smooth"

                    });


                }



            }


        );



    }

);