/* =====================================
   language.js
   Advanced JSON-Based i18n System
===================================== */

let currentLanguage = "en";
// 添加内存缓存池：避免重复 Fetch 浪费网络资源
const translationCache = {}; 

// ==============================
// 1. 异步加载与缓存语言包
// ==============================
async function loadLanguage(language) {
    // 如果内存中已有该语言包，直接命中缓存并应用，实现 0 延迟切换
    if (translationCache[language]) {
        applyLanguage(translationCache[language], language);
        return;
    }

    try {
        const response = await fetch(`lang/${language}.json`);
        
        // 异常拦截：如果文件不存在或网络错误，抛出异常
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const translations = await response.json();
        
        // 写入缓存池
        translationCache[language] = translations;
        
        applyLanguage(translations, language);

    } catch (error) {
        console.error(`[TK Quant] Language loading error for '${language}':`, error);
        // 灾备机制：如果特定语言包加载失败，安全回退到英文
        if (language !== 'en') {
            console.warn("Falling back to default language: 'en'");
            loadLanguage('en');
        }
    }
}

// ==============================
// 2. 应用翻译与全局属性更新
// ==============================
function applyLanguage(translations, language) {
    // 更新带有 data-i18n 属性的标准 DOM 元素
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach(element => {
        const key = element.getAttribute("data-i18n");
        if (translations[key]) {
            element.innerHTML = translations[key];
        }
    });

    // 独立更新网页标题 (Title) 以支持浏览器标签页显示
    const title = document.querySelector("title[data-i18n]");
    if (title) {
        const key = title.getAttribute("data-i18n");
        if (translations[key]) {
            document.title = translations[key];
        }
    }

    // 更新 HTML 根节点的 lang 属性，提升全局 SEO 权重
    const htmlLangMap = { 'cn': 'zh-CN', 'en': 'en-US', 'fr': 'fr-FR' };
    document.documentElement.lang = htmlLangMap[language] || 'en-US';

    // 持久化用户选择
    currentLanguage = language;
    localStorage.setItem("preferredLanguage", language);

    // 联动触发 UI 按钮高亮更新
    updateActiveButton(language);
}

// ==============================
// 3. UI：更新导航栏按钮的高亮状态
// ==============================
function updateActiveButton(language) {
    const buttons = document.querySelectorAll(".language-switch button");
    if (!buttons.length) return;

    buttons.forEach(btn => {
        // 检测按钮绑定的 onclick 事件中是否包含当前语言代码
        if (btn.getAttribute("onclick").includes(`'${language}'`)) {
            // 激活态：暖橙色背景与轻微悬浮感
            btn.style.background = "#fed7aa";
            btn.style.color = "#9a3412";
            btn.style.fontWeight = "bold";
            btn.style.transform = "translateY(-2px)";
            btn.style.boxShadow = "0 4px 6px rgba(234, 88, 12, 0.15)";
        } else {
            // 未激活态：玻璃拟态透明感
            btn.style.background = "rgba(255, 255, 255, 0.75)";
            btn.style.color = "#7c2d12";
            btn.style.fontWeight = "normal";
            btn.style.transform = "translateY(0)";
            btn.style.boxShadow = "none";
        }
    });
}

// ==============================
// 4. 外部调用接口 (供按钮点击使用)
// ==============================
function changeLanguage(language) {
    // 拦截重复点击当前语言的冗余操作
    if (language === currentLanguage) return; 
    loadLanguage(language);
}

// ==============================
// 5. 初始化与环境智能嗅探
// ==============================
function initLanguage() {
    const saved = localStorage.getItem("preferredLanguage");

    if (saved) {
        // 优先尊重用户的历史选择
        loadLanguage(saved);
    } else {
        // 首次访问：智能读取操作系统的浏览器语言偏好
        const browserLang = navigator.language || navigator.userLanguage;
        
        if (browserLang.toLowerCase().includes('zh')) {
            loadLanguage('cn');
        } else if (browserLang.toLowerCase().includes('fr')) {
            loadLanguage('fr');
        } else {
            loadLanguage('en'); // 默认防线
        }
    }
}

// 确保 DOM 树完全挂载后再执行初始化
document.addEventListener("DOMContentLoaded", initLanguage);