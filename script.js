// BUTTON RIPPLE & CLICK EFFECT (FIXED)
document.querySelectorAll('.movierulz-btn').forEach(btn => {
    btn.addEventListener('click', function (e) {

        // Create ripple effect
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.cssText = `
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.7);
            transform: scale(0);
            animation: ripple-animation 0.6s linear;
            width: ${size}px;
            height: ${size}px;
            top: ${y}px;
            left: ${x}px;
            pointer-events: none;
        `;

        this.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);

        // 🚀 OPEN LINK AFTER RIPPLE
        const url = this.getAttribute('href');
        if (url) {
            setTimeout(() => {
                window.open(url, this.getAttribute('target') || '_self');
            }, 120);
        }
    });
});
