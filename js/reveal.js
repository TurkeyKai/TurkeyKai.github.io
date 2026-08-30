/* =====================================
   reveal.js
   High-Performance Scroll Reveal
   Powered by IntersectionObserver
===================================== */

document.addEventListener("DOMContentLoaded", function () {

    // ==============================
    // 1. 初始化 IntersectionObserver
    // ==============================
    // 配置观察器参数：当元素有 15% 进入视口时触发
    const revealOptions = {
        root: null,
        rootMargin: "0px 0px -50px 0px",
        threshold: 0.15 
    };

    // 观察器回调函数
    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 元素进入视口，添加动画类名
                entry.target.classList.add("active");
                
                // 性能优化：动画触发后立即停止观察该元素，释放内存
                observer.unobserve(entry.target);
            }
        });
    };

    const revealObserver = new IntersectionObserver(revealCallback, revealOptions);

    // ==============================
    // 2. 观察现有的 Reveal 元素
    // ==============================
    document.querySelectorAll(".reveal").forEach(element => {
        revealObserver.observe(element);
    });

    // ==============================
    // 3. 动态元素支持 (MutationObserver)
    // ==============================
    // 仅针对后期通过 JS 动态插入 DOM 的新元素进行精准绑定
    const domObserver = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            mutation.addedNodes.forEach(node => {
                // 确保是一个 Element 节点
                if (node.nodeType === 1) { 
                    // 如果自身是 reveal 元素
                    if (node.classList.contains("reveal")) {
                        revealObserver.observe(node);
                    }
                    // 或者新插入的节点内部包含 reveal 元素
                    node.querySelectorAll(".reveal").forEach(child => {
                        revealObserver.observe(child);
                    });
                }
            });
        });
    });

    domObserver.observe(document.body, { 
        childList: true, 
        subtree: true 
    });

});