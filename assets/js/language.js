/* =================================================
   Kai Teng Portfolio
   Multi Language System
   English / Chinese / French
   Final Version 2026
================================================= */


const translations = {


en:{


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
"Mathematical modeling and quantitative analysis.",


hero_line2:
"Statistical methods and risk modeling.",


hero_line3:
"Data-driven problem solving.",


download_resume:
"Download Resume",





about_title:
"About Me",



about_block1:
`
<p>
I am a Mathematics and Actuarial Science student at the University of Toronto, with a minor in Statistics.
</p>
`,



about_block2:
`
<p>
My academic interests include quantitative research, statistical modeling, financial mathematics, probability theory, and risk analysis.
</p>
`,



about_block3:
`
<p>
Through coursework and projects, I explore how mathematical theories and statistical methods can be applied to financial modeling, data analysis, and real-world decision making.
</p>
`,





projects_title:
"Projects",



project1_title:
"Quantitative Research",


project1_text:
"Developing quantitative models using mathematical methods, statistical techniques, and financial data analysis.",



project2_title:
"Actuarial Risk Analysis",


project2_text:
"Applying probability theory, actuarial mathematics, and statistical modeling to analyze uncertainty and risk.",



project3_title:
"Statistical Data Analysis",


project3_text:
"Using Python and statistical methods to extract insights from complex datasets and build data-driven solutions.",





gallery_title:
"Gallery",



contact_title:
"Contact",



contact_text:
"Interested in mathematics, statistics, quantitative research, or actuarial applications?",



contact_subtext:
"Feel free to connect with me.",





footer:
"© 2026 Kai Teng. All Rights Reserved."


},







zh:{


page_title:
"滕凯 | 个人主页",



nav_home:
"主页",

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
"数学建模与量化分析",



hero_line2:
"统计方法与风险建模",



hero_line3:
"利用数据解决实际问题",



download_resume:
"下载简历",





about_title:
"关于我",



about_block1:
`
<p>
我是一名就读于多伦多大学的数学与精算科学学生，同时辅修统计科学。
</p>
`,



about_block2:
`
<p>
我的研究兴趣主要集中于量化研究、统计建模、金融数学、概率理论以及风险分析。
</p>
`,



about_block3:
`
<p>
通过课程学习和项目实践，我探索如何将数学理论和统计方法应用于金融建模、数据分析以及现实世界决策问题。
</p>
`,





projects_title:
"项目经历",



project1_title:
"量化研究",



project1_text:
"利用数学方法、统计技术以及金融数据分析建立量化模型。",



project2_title:
"精算风险分析",



project2_text:
"应用概率理论、精算数学以及统计模型分析不确定性和风险。",



project3_title:
"统计数据分析",



project3_text:
"使用 Python 和统计方法分析复杂数据，并建立数据驱动解决方案。",





gallery_title:
"图库",



contact_title:
"联系我",



contact_text:
"如果你对数学、统计、量化研究或精算应用感兴趣，",



contact_subtext:
"欢迎与我交流。",





footer:
"© 2026 滕凯 版权所有"


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
"Mathématiques | Sciences actuarielles | Mineure en statistiques",



hero_line1:
"Modélisation mathématique et analyse quantitative.",



hero_line2:
"Méthodes statistiques et modélisation des risques.",



hero_line3:
"Résolution de problèmes basée sur les données.",



download_resume:
"Télécharger le CV",





about_title:
"À propos de moi",



about_block1:
`
<p>
Je suis étudiant en mathématiques et sciences actuarielles à l'Université de Toronto, avec une mineure en statistiques.
</p>
`,



about_block2:
`
<p>
Mes intérêts académiques comprennent la recherche quantitative, la modélisation statistique, les mathématiques financières, la théorie des probabilités et l'analyse des risques.
</p>
`,



about_block3:
`
<p>
À travers mes cours et mes projets, j'explore comment les théories mathématiques et les méthodes statistiques peuvent être appliquées à la modélisation financière, à l'analyse des données et à la prise de décision réelle.
</p>
`,





projects_title:
"Projets",



project1_title:
"Recherche quantitative",



project1_text:
"Développement de modèles quantitatifs utilisant des méthodes mathématiques, statistiques et des données financières.",



project2_title:
"Analyse des risques actuariels",



project2_text:
"Application des probabilités, des mathématiques actuarielles et des modèles statistiques pour analyser les risques.",



project3_title:
"Analyse statistique des données",



project3_text:
"Utilisation de Python et de méthodes statistiques pour extraire des informations à partir de données complexes.",





gallery_title:
"Galerie",



contact_title:
"Contact",



contact_text:
"Intéressé par les mathématiques, les statistiques, la recherche quantitative ou les applications actuarielles ?",



contact_subtext:
"N'hésitez pas à me contacter.",





footer:
"© 2026 Kai Teng. Tous droits réservés."


}



};









function changeLanguage(lang){



const elements =
document.querySelectorAll(
"[data-i18n]"
);



elements.forEach(element=>{


const key =
element.dataset.i18n;



if(
translations[lang] &&
translations[lang][key]
){


element.classList.add(
"language-changing"
);



setTimeout(()=>{


element.innerHTML =
translations[lang][key];



element.classList.remove(
"language-changing"
);



},200);



}



});





/* 更新 body 语言 */

document.body.classList.remove(
"lang-en",
"lang-zh",
"lang-fr"
);



document.body.classList.add(
"lang-" + lang
);





/* 更新 html lang */

document
.documentElement
.lang = lang;





localStorage.setItem(
"language",
lang
);



}









document
.querySelectorAll(
"[data-lang]"
)
.forEach(button=>{


button.addEventListener(
"click",
()=>{


const lang =
button.dataset.lang;



document
.querySelectorAll(
"[data-lang]"
)
.forEach(btn=>{


btn.classList.remove(
"active"
);


});



button.classList.add(
"active"
);



changeLanguage(lang);



});



});









const savedLanguage =
localStorage.getItem(
"language"
)
||
"en";



changeLanguage(
savedLanguage
);



document
.querySelector(
`[data-lang="${savedLanguage}"]`
)
?.classList.add(
"active"
);