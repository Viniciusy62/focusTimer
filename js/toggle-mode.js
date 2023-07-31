export const toggleMode = {
  btnToggleMode: document.querySelector("#toggle-mode"),
  darkMode: true,

  toggle(e) {
    document.documentElement.classList.toggle("light");

    const mode = toggleMode.darkMode ? 'light' : 'dark';
    e.currentTarget.querySelector("span").textContent = `${mode} mode activated`
    
    toggleMode.darkMode = !toggleMode.darkMode
  }
} 

toggleMode.btnToggleMode.addEventListener("click", toggleMode.toggle)