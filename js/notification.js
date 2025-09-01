function showMessage(type, iconClass, text) {
    const el = document.getElementById(type);
    if (!el) return;
    const icon = el.querySelector("i");
    const span = el.querySelector("span");

    if (iconClass) icon.className = iconClass;
    span.innerText = "\u00A0\u00A0\u00A0" + text;
    // показати
    el.classList.add("show");
    // сховати через 3с
    setTimeout(() => el.classList.remove("show"), 3000);
}