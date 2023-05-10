
document.addEventListener("DOMContentLoaded", function () {
  const $botonSecondary = $(".secondary-action").find("a");
  let language = $botonSecondary.text() === "Spanish" ? "EN" : "ES";
  const $selectorLanguage = document.getElementById("block-dropdownlanguage");

  $selectorLanguage.style.setProperty("--content-pseudo", "\'" + language +"\'");
});
