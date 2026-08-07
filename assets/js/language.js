/* =========================
   Apple Style Language System
   EN / 中文 / Français
========================= */


const translations = {


    en: {


        page_title:
        "Kai Teng | Portfolio",


        nav_home:
        "Home",

        nav_about:
        "About",

        nav_projects:
        "Projects",

        nav_gallery:
        "Gallery",

        nav_contact:
        "Contact",



        hero_greeting:
        "Hello,",


        hero_name:
        "I'm Kai Teng",


        hero_subtitle:
        "Mathematics Major | Actuarial Science Major | Statistics Science Minor",


        hero_line1:
        "Mathematical modeling.",


        hero_line2:
        "Statistical analysis.",


        hero_line3:
        "Data-driven problem solving.",



        download_resume:
        "Download Resume",


        github_button:
        "GitHub",



        about_title:
        "About Me",


        about_text:
        "I am a Mathematics Major, Actuarial Science Major, and Statistics Science Minor student interested in mathematical modeling, statistical analysis, and data-driven problem solving.",



        projects_title:
        "Projects",



        project1_title:
        "Mathematical Modeling",


        project1_text:
        "Developing mathematical models and analyzing complex datasets using statistical methods.",



        project2_title:
        "Machine Learning",


        project2_text:
        "Building predictive models with Python, statistics, and data analysis techniques.",



        project3_title:
        "Actuarial Analytics",


        project3_text:
        "Applying probability, statistics, and risk modeling methods to solve practical problems.",



        gallery_title:
        "Gallery",



        contact_title:
        "Contact",


        contact_text:
        "Feel free to connect with me.",



        footer:
        "© 2026 Kai Teng. All Rights Reserved."

    },








    zh: {


        page_title:
        "滕凯 | 个人主页",



        nav_home:
        "首页",


        nav_about:
        "关于我",


        nav_projects:
        "项目",


        nav_gallery:
        "图库",


        nav_contact:
        "联系",






        hero_greeting:
        "你好，",



        hero_name:
        "我是滕凯",



        hero_subtitle:
        "数学专业 | 精算专业 | 统计科学辅修",



        hero_line1:
        "数学建模。",



        hero_line2:
        "统计分析。",



        hero_line3:
        "数据驱动的问题解决。",




        download_resume:
        "下载简历",



        github_button:
        "GitHub",




        about_title:
        "关于我",



        about_text:
        "我是一名数学专业、精算专业以及统计科学辅修学生，专注于数学建模、统计分析以及数据驱动的问题解决。",




        projects_title:
        "项目",



        project1_title:
        "数学建模",



        project1_text:
        "利用数学模型和统计方法分析复杂数据集。",




        project2_title:
        "机器学习",



        project2_text:
        "使用 Python、统计学和数据分析方法建立预测模型。",




        project3_title:
        "精算分析",



        project3_text:
        "应用概率、统计以及风险建模方法解决实际问题。",




        gallery_title:
        "图库",



        contact_title:
        "联系我",



        contact_text:
        "欢迎通过以下方式联系我。",




        footer:
        "© 2026 滕凯 版权所有。"

    },









    fr:{


        page_title:
        "Kai Teng | Portfolio",



        nav_home:
        "Accueil",


        nav_about:
        "À propos",


        nav_projects:
        "Projets",


        nav_gallery:
        "Galerie",


        nav_contact:
        "Contact",





        hero_greeting:
        "Bonjour,",



        hero_name:
        "Je suis Kai Teng",




        hero_subtitle:
        "Étudiant en mathématiques | Sciences actuarielles | Mineure en statistiques",




        hero_line1:
        "Modélisation mathématique.",



        hero_line2:
        "Analyse statistique.",



        hero_line3:
        "Résolution de problèmes basée sur les données.",




        download_resume:
        "Télécharger le CV",



        github_button:
        "GitHub",





        about_title:
        "À propos de moi",



        about_text:
        "Je suis étudiant en mathématiques, en sciences actuarielles et en statistiques, intéressé par la modélisation mathématique, l'analyse statistique et la résolution de problèmes basée sur les données.",




        projects_title:
        "Projets",




        project1_title:
        "Modélisation mathématique",



        project1_text:
        "Développement de modèles mathématiques et analyse de données complexes avec des méthodes statistiques.",





        project2_title:
        "Apprentissage automatique",



        project2_text:
        "Création de modèles prédictifs avec Python, statistiques et techniques d'analyse de données.",





        project3_title:
        "Analyse actuarielle",



        project3_text:
        "Application des probabilités, statistiques et modèles de risque pour résoudre des problèmes pratiques.",





        gallery_title:
        "Galerie",





        contact_title:
        "Contact",




        contact_text:
        "N'hésitez pas à me contacter.",




        footer:
        "© 2026 Kai Teng. Tous droits réservés."

    }


};









/* =========================
   Change Language Function
========================= */


function changeLanguage(language){



    const elements =
    document.querySelectorAll("[data-i18n]");



    elements.forEach(element=>{


        const key =
        element.getAttribute("data-i18n");



        if(translations[language][key]){


            element.classList.add(
                "language-changing"
            );



            setTimeout(()=>{


                element.innerHTML =
                translations[language][key];



                element.classList.remove(
                    "language-changing"
                );


            },200);



        }



    });





    document.documentElement.lang =
    language;




    localStorage.setItem(
        "language",
        language
    );




    document.querySelectorAll(
        ".language-switcher button"
    )
    .forEach(button=>{


        button.classList.remove(
            "active"
        );


        if(
            button.dataset.lang === language
        ){

            button.classList.add(
                "active"
            );

        }


    });



}









/* =========================
   Initialize
========================= */


document.addEventListener(
"DOMContentLoaded",
()=>{



    const buttons =
    document.querySelectorAll(
        ".language-switcher button"
    );



    buttons.forEach(button=>{


        button.addEventListener(
        "click",
        ()=>{


            changeLanguage(
                button.dataset.lang
            );


        });


    });






    const savedLanguage =
    localStorage.getItem(
        "language"
    );



    if(savedLanguage){


        changeLanguage(
            savedLanguage
        );


    }



});