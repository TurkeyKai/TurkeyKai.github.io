/* =====================================
   language.js
   Advanced Multi-Language System
===================================== */

function changeLanguage(language) {
    // 1. 批量替换文本 (利用对象的动态键值访问，告别冗长的 if-else)
    const elements = document.querySelectorAll("[data-cn]");

    elements.forEach(element => {
        const translation = element.dataset[language];
        if (translation) {
            // 针对 title 标签专门处理，确保跨浏览器兼容性
            if (element.tagName.toLowerCase() === "title") {
                document.title = translation;
            } else {
                element.innerHTML = translation;
            }
        }
    });

    // 2. 动态修改页面的 lang 属性，提升全球化 SEO 抓取权重
    let htmlLang = language === 'cn' ? 'zh-CN' : (language === 'fr' ? 'fr-FR' : 'en-US');
    document.documentElement.lang = htmlLang;

    // 3. 将用户的偏好存入浏览器本地存储
    localStorage.setItem("preferredLanguage", language);

    // 4. 更新顶部语言按钮的高亮状态 (UI 增强)
    updateActiveButton(language);
}

function updateActiveButton(language) {
    const buttons = document.querySelectorAll(".language-switch button");
    if (!buttons.length) return;

    buttons.forEach(btn => {
        // 检测按钮的 onclick 属性中是否包含当前选中的语言代码
        if (btn.getAttribute("onclick").includes(`'${language}'`)) {
            // 激活状态：应用与 hover 类似的高亮暖橙色样式
            btn.style.background = "#fed7aa";
            btn.style.color = "#9a3412";
            btn.style.fontWeight = "bold";
            btn.style.transform = "translateY(-2px)";
            btn.style.boxShadow = "0 4px 6px rgba(234, 88, 12, 0.15)";
        } else {
            // 未激活状态：恢复默认玻璃拟态
            btn.style.background = "rgba(255, 255, 255, 0.75)";
            btn.style.color = "#7c2d12";
            btn.style.fontWeight = "normal";
            btn.style.transform = "translateY(0)";
            btn.style.boxShadow = "none";
        }
    });
}

function loadLanguage() {
    const savedLanguage = localStorage.getItem("preferredLanguage");

    if (savedLanguage) {
        // 如果有历史偏好，直接加载
        changeLanguage(savedLanguage);
    } else {
        // 智能环境探测：读取用户操作系统的默认语言
        const browserLang = navigator.language || navigator.userLanguage;
        
        if (browserLang.toLowerCase().includes('zh')) {
            changeLanguage('cn');
        } else if (browserLang.toLowerCase().includes('fr')) {
            changeLanguage('fr');
        } else {
            changeLanguage('en'); // 默认回退到英文
        }
    }
}

// 确保 DOM 树完全构建后再执行语言加载
document.addEventListener("DOMContentLoaded", loadLanguage);