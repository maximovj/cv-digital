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

  /* Botones PDF */
  const titles = {
    cv: "CV - Víctor Jesús Máximo Abundio",
    port: "Portafolio - Víctor Jesús Máximo Abundio",
    carta: "Carta - Víctor Jesús Máximo Abundio",
  };
  const originalTitle = document.title;

  document.querySelectorAll(".dl-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const mode = btn.dataset.print;
      html.classList.remove(
        "print-mode-cv",
        "print-mode-port",
        "print-mode-carta",
      );
      html.classList.add("print-mode-" + mode);
      document.title = titles[mode];
      showToast(`🖨️ Preparando PDF…`);
      setTimeout(() => window.print(), 200);
    });
  });

  window.addEventListener("afterprint", () => {
    setTimeout(() => {
      html.classList.remove(
        "print-mode-cv",
        "print-mode-port",
        "print-mode-carta",
      );
      document.title = originalTitle;
    }, 200);
  });
})();
