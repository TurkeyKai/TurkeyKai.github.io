/* =====================================
   effects.js
   High-Performance Visual Effects
   Optimized with requestAnimationFrame
===================================== */

document.addEventListener("DOMContentLoaded", () => {
    
    // ==============================
    // 0. 触屏设备性能保护
    // ==============================
    // 仅在支持鼠标悬停的高精度指针设备上开启特效，手机端自动屏蔽以节省性能
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!isFinePointer) return;

    // ==============================
    // 1. 全局状态与动态光标初始化
    // ==============================
    let mouseX = 0;
    let mouseY = 0;
    let isTicking = false;

    const glow = document.createElement("div");
    glow.className = "cursor-glow";
    // 使用 fixed 定位并禁用鼠标事件拦截
    glow.style.position = "fixed";
    glow.style.top = "0";
    glow.style.left = "0";
    glow.style.pointerEvents = "none";
    glow.style.willChange = "transform"; // 提示浏览器开启硬件加速
    document.body.appendChild(glow);

    // ==============================
    // 2. 统一收集与节流渲染 (rAF)
    // ==============================
    // 将所有坐标收集统一到一个事件中，避免重复绑定
    document.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        // 使用 requestAnimationFrame 对齐显示器刷新率 (例如 60Hz/120Hz)
        if (!isTicking) {
            requestAnimationFrame(updateGlobalEffects);
            isTicking = true;
        }
    });

    function updateGlobalEffects() {
        // 更新背景环境光 CSS 变量
        document.documentElement.style.setProperty("--mouse-x", `${mouseX}px`);
        document.documentElement.style.setProperty("--mouse-y", `${mouseY}px`);

        // 【核心优化】使用 translate3d 触发 GPU 加速，彻底替代高损耗的 left/top 重绘
        glow.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;

        isTicking = false;
    }

    // ==============================
    // 3. 3D 卡片悬浮视差计算
    // ==============================
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        let cardTicking = false;

        card.addEventListener("mousemove", (e) => {
            if (!cardTicking) {
                requestAnimationFrame(() => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;

                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;

                    // 增大阻尼系数 (由20改为30)，让 3D 偏转更柔和、更具高级感
                    // 同时反转 rotateX 的符号，使得卡片倾斜方向符合真实的物理直觉
                    const rotateX = (centerY - y) / 30; 
                    const rotateY = (x - centerX) / 30;

                    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
                    cardTicking = false;
                });
                cardTicking = true;
            }
        });

        card.addEventListener("mouseleave", () => {
            // 平滑重置回初始状态
            card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)";
        });
    });

});