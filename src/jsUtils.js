import React from "react";

export function rainbowText(text) {
  let length = text.length;
  let DOMelements = [];

  for (let i = 0; i < length; i++) {
    DOMelements.push(
      <span key={i} style={{ color: `hsl(${(360 / 14) * i}deg, 85%, 65%)` }}>
        {text[i]}
      </span>
    );
  }

  return DOMelements;
}

export function updateLang(actualLang, langTexts) {
  let langElements = document.querySelectorAll(".lang");

  langElements.forEach((langElement) => {
    langElement.textContent =
      langTexts[langElement.dataset.langName][actualLang];
  });
}

export default { rainbowText, updateLang };
