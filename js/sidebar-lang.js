const translations = {
  uk: {
    "indevelopment": "Ця функція зараз перебуває в процесі розробки.",
    "notification.copied": "скопійовано",
    
    "sidebar.json": "JSON парсер",
    "sidebar.about": "Про нас",
    "sidebar.text": "Текст",
    "sidebar.qrcode": "Генерувати QR-код",
    "sidebar.barcode": "Генерувти баркод",
    

    "content.json.text-panel.title": "JSON парсер",
    "content.json.status-panel.title": "Інструменти",
    "content.json.status-panel.compress": "| Стиснути",
    "content.json.status-panel.prettify": "| Прикрасити",
    "content.json.status-panel.copy": "| Скопіювати",
    "content.json.status-panel.validate": "| Перевірити JSON",

    "content.text.text-panel.title": "Аналіз тексту",
    "content.text.toolbar.title": "Інструменти",
    "content.text.toolbar.chars": "Кількість символів: ",
    "content.text.toolbar.lines": "Кількість рядків: ",
    "content.text.toolbar.letters": "Кількість літер:",
    "content.text.toolbar.words":"Кількість слів:",

    "content.qr.toolbar.title": "Генерувати QR-код",
    "content.qr.tools.copy": "| Копіювати",
    "content.qr.tools.download": "| Зберегти",

    "sidebar.text-compare": "Порівняння коду",
    "": "",
    
  },
  en: {
    "indevelopment": "This function is currently in development.",
    "notification.copied": "copied",

    "sidebar.json": "JSON parser",
    "sidebar.about": "About",
    "sidebar.text": "Text",
    "sidebar.qrcode": "Generate QR code",
    "sidebar.barcode": "Generate barcode",
    
    "content.json.text-panel.title": "JSON parser",
    "content.json.status-panel.title": "Tools",
    "content.json.status-panel.compress": "| Compress",
    "content.json.status-panel.prettify": "| Prettify",
    "content.json.status-panel.copy": "| Copy",
    "content.json.status-panel.validate": "| Validate JSON",
    
    "content.text.text-panel.title": "Text analysis",
    "content.text.toolbar.title": "Tools",
    "content.text.toolbar.chars": "Number of characters: ",
    "content.text.toolbar.lines": "Number of lines: ",
    "content.text.toolbar.letters": "Number of letters:",
    "content.text.toolbar.words":"Number of words:",

    "content.qr.toolbar.title": "QR-code generation",
    "content.qr.tools.copy": "| Copy",
    "content.qr.tools.download": "| Save",

    "sidebar.text-compare": "Code comparison",
  },
  de: {
    "indevelopment": "Diese Funktion ist derzeit in Entwicklung.",
    "notification.copied": "kopiert",

    "sidebar.json": "JSON parser",
    "sidebar.about": "Über uns",
    "sidebar.text": "Text",
    "sidebar.qrcode": "QR-Code generieren",
    "sidebar.barcode": "Barcode generieren",
    
    "content.json.text-panel.title": "JSON parser",
    "content.json.status-panel.title": "Werkzeuge",
    "content.json.status-panel.compress": "| Quetschen",
    "content.json.status-panel.prettify": "| Verschönern",
    "content.json.status-panel.copy": "| Kopie",
    "content.json.status-panel.validate": "| Validieren JSON",

    "content.text.text-panel.title": "Textanalyse",
    "content.text.toolbar.title": "Werkzeuge",
    "content.text.toolbar.chars": "Anzahl der Zeichen: ",
    "content.text.toolbar.lines": "Anzahl der Zeilen: ",
    "content.text.toolbar.letters": "Anzahl der Buchstaben:",
    "content.text.toolbar.words":"Anzahl der Wörter:",

    "content.qr.toolbar.title": "QR-Code-Generierung",
    "content.qr.tools.copy": "| Kopie",
    "content.qr.tools.download": "| Speichern",

    "sidebar.text-compare": "Codevergleich",
  }
};

function applyTranslations(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  // lang Selector
  const langSelect = document.getElementById("langSelect");
  langSelect.addEventListener("change", e => {
    const lang = e.target.value;
    localStorage.setItem("lang", lang);
    applyTranslations(lang);
  });

  // On Load
  const savedLang = localStorage.getItem("lang") || "uk";
  langSelect.value = savedLang;
  applyTranslations(savedLang);
});
