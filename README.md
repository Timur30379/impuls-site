# Impuls — statische Website (Landing + Legal)

Dependency-freie statische HTML-Seiten. Kein Build-Schritt — was hier
liegt, wird 1:1 ausgeliefert.

| Datei | Zweck |
|---|---|
| `index.html` | Landing Page (Beta-Hinweis, App-Store-Link folgt) |
| `datenschutz.html` | Datenschutzerklärung → **Privacy Policy URL für App Store Connect** |
| `impressum.html` | Impressum (Anschrift = MANUAL TODO) |
| `nutzungsbedingungen.html` | Kurz-Terms + Apple-Standard-EULA (Entwurf) |
| `support.html` | Support/Kontakt → **Support URL für App Store Connect** |
| `style.css` | Gemeinsames Styling (Trust-Navy, dependency-frei) |

Inhaltliche Quelle der Datenschutzerklärung: `docs/privacy/datenschutz.md`.
Änderungen IMMER zuerst dort pflegen, dann hier nachziehen — und in der App
(`src/data/legal/legalContent.ts`) konsistent halten.

Deploy: siehe `docs/SITE_DEPLOY_RUNBOOK.md` (GitHub Pages, ~10 Minuten).
