const KEY = "theme";
const isDark = () => document.documentElement.classList.contains("dark");
const apply = dark => {
  document.documentElement.classList.toggle("dark", dark);
};

const saved = localStorage.getItem(KEY);
if (saved) {
  apply(saved === "dark");
}

const btn = document.getElementById("theme-toggle");
if (btn) {
  btn.addEventListener("click", () => {
    const next = !isDark();
    apply(next);
    localStorage.setItem(KEY, next ? "dark" : "light");
  });
}
