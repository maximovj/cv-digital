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

})();
