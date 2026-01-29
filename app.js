function toggleTheme() {
  document.body.classList.toggle("light");

  const btn = document.querySelector(".toggle");

  if (document.body.classList.contains("light")) {
    btn.textContent = "☀️ Mode";
  } else {
    btn.textContent = "🌙 Mode";
  }
}
