(function () {
  const html = document.documentElement;
  const btnTheme = document.getElementById("themeToggle");
  const toast = document.getElementById("toast");
  const KEY = "cv-theme";

  /* Tema */
  const saved = localStorage.getItem(KEY);
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initial = saved || (prefersDark ? "light" : "dark");
  html.setAttribute("data-theme", initial);

  btnTheme.addEventListener("click", () => {
    const next = html.getAttribute("data-theme") === "dark" ? "light" : "dark";
    html.setAttribute("data-theme", next);
    localStorage.setItem(KEY, next);
  });

  /* Toast */
  let toastTimer;
  function showToast(msg) {
    toast.textContent = msg;
    toast.style.opacity = "1";
    toast.style.transform = "translateX(-50%) translateY(0)";
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateX(-50%) translateY(20px)";
    }, 2000);
  }
})();
