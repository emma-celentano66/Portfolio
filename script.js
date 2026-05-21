document.addEventListener("DOMContentLoaded", () => {
    const card = document.querySelector(".card");
    const cursorGlow = document.querySelector(".cursor-glow");
    const emberField = document.querySelector(".ember-field");

    if (card && cursorGlow) {
        const updateCursorGlow = (event) => {
            const cardBounds = card.getBoundingClientRect();
            const offsetX = event.clientX - cardBounds.left;
            const offsetY = event.clientY - cardBounds.top;

            cursorGlow.style.opacity = "1";
            cursorGlow.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0) translate(-50%, -50%)`;
        };

        card.addEventListener("pointermove", updateCursorGlow);
        card.addEventListener("pointerenter", updateCursorGlow);
        card.addEventListener("pointerleave", () => {
            cursorGlow.style.opacity = "0";
        });
    }

    if (!emberField || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
    }

    const emberCount = 18;

    for (let index = 0; index < emberCount; index += 1) {
        const ember = document.createElement("span");
        const size = 3 + Math.random() * 6;
        const left = Math.random() * 100;
        const delay = Math.random() * 10;
        const duration = 8 + Math.random() * 8;
        const drift = -40 + Math.random() * 80;

        ember.className = "ember-particle";
        ember.style.left = `${left}%`;
        ember.style.width = `${size}px`;
        ember.style.height = `${size}px`;
        ember.style.animationDelay = `${delay}s`;
        ember.style.animationDuration = `${duration}s`;
        ember.style.setProperty("--ember-drift", `${drift}px`);

        emberField.appendChild(ember);
    }
});
