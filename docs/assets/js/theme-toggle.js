const STORAGE_KEY = 'dark-mode-toggle'

const getColorPreference = () => {
  if (localStorage.getItem(STORAGE_KEY))
    return localStorage.getItem(STORAGE_KEY);
  else
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
};

const reflectPreference = () => {
  document.firstElementChild.setAttribute("data-theme", theme.value);
};

// Immediately read color preference from localStorage or
// the system setting
const theme = {
  value: getColorPreference()
};

// Immediately set html[data-theme] so there is no flash of a
// default theme before activating the user's preference
reflectPreference();

//
document.addEventListener('DOMContentLoaded', () => {
  reflectPreference();

  const toggleEl = document.querySelector("dark-mode-toggle");

  // Handle toggle event
  toggleEl.addEventListener("colorschemechange", () => {
    theme.value = toggleEl.mode;
    reflectPreference();
  });
})

// Sync with system setting when it changes
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", ({ matches: isDark }) => {
    theme.value = isDark ? "dark" : "light";
    reflectPreference();
  });
