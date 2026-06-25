/* Impuls — Sprachumschalter für Rechtsseiten (DE/EN). Navigiert zwischen den
   Sprachversionen und korrigiert die Rechts-Links auf die Sprache der Seite.
   Rechtstexte gibt es bewusst nur in DE (maßgeblich) + EN (Übersetzung). */
(function () {
  "use strict";
  var path = location.pathname.split("/").pop() || "index.html";
  var isEn = /_en\.html$/.test(path);
  var cur = isEn ? "en" : "de";

  // Rechts-Links (Header-Nav + Footer) auf die Sprache dieser Seite setzen
  var links = document.querySelectorAll("header.site nav a, footer a");
  for (var i = 0; i < links.length; i++) {
    var m = (links[i].getAttribute("href") || "").match(/^(datenschutz|impressum|nutzungsbedingungen)(_en)?\.html$/);
    if (m) links[i].setAttribute("href", m[1] + (cur === "en" ? "_en" : "") + ".html");
  }

  // DE/EN-Umschalter in den Header einsetzen
  var header = document.querySelector("header.site");
  if (header) {
    var deFile = isEn ? path.replace("_en.html", ".html") : path;
    var enFile = isEn ? path : path.replace(".html", "_en.html");
    var sel = document.createElement("select");
    sel.id = "legal-lang";
    sel.className = "lang-switch";
    sel.setAttribute("aria-label", "Sprache / Language");
    sel.innerHTML = '<option value="de">Deutsch</option><option value="en">English</option>';
    sel.value = cur;
    sel.addEventListener("change", function (e) {
      var lang = e.target.value;
      try { localStorage.setItem("impuls_lang", lang); } catch (err) {}
      var target = lang === "de" ? deFile : enFile;
      if (target && target !== path) location.href = target;
    });
    header.appendChild(sel);
  }
})();
