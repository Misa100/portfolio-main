import en from "../../locales/en.json";
import fr from "../../locales/fr.json";

const translations = { en, fr };

export function translatePage(language) {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[language] && translations[language][key]) {
      el.innerText = translations[language][key];
    }
  });
}
