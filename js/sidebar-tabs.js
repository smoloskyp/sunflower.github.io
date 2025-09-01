document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tab");
    const buttons = document.querySelectorAll(".nav-btn");

    function openTab(tabName) {
        // remove active from everything
        tabs.forEach(tab => tab.classList.remove("active"));
        buttons.forEach(btn => btn.classList.remove("active"));

        // add active
        const activeTab = document.getElementById(tabName);
        const activeBtn = document.querySelector(`.nav-btn[data-tab="${tabName}"]`);

        if (activeTab) activeTab.classList.add("active");
        if (activeBtn) activeBtn.classList.add("active");

        // update URL (witout reloading page)
        const url = new URL(window.location);
        url.searchParams.set("tab", tabName);
        window.history.replaceState({}, "", url);
    }

    // listener on click
    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            const tabName = btn.getAttribute("data-tab");
            openTab(tabName);
        });
    });

    // determines which tab will open during loading
    const urlParams = new URLSearchParams(window.location.search);
    const initialTab = urlParams.get("tab") || "json"; // default: json
    openTab(initialTab);
});
