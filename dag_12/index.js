const themeSwitch = document.querySelector("#themeSwitch");
let darkMode = true;

function themeSwitcher() {
  if (darkMode == true) {
    themeSwitch.classList = "lightMode";
    darkMode = !darkMode;
    console.log(darkMode);
  } else {
    themeSwitch.backgroundColor = "darkMode";
    darkMode = !darkMode;
    console.log(darkMode);
  }
}
