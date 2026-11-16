/* Impuls — mehrsprachige Inhalte (Landing + Support). Dependency-frei.
   Sprachen: de, en, it, fr, es, nl, pl. Rechtstexte bleiben bewusst DE. */
(function () {
  "use strict";

  var I18N = {
    de: {
      nav_method: "Methodik", nav_privacy: "Datenschutz", nav_imprint: "Impressum", nav_terms: "Nutzungsbedingungen", nav_support: "Support",
      idx_title: "Impuls — Deine Stimme. Dein Werteprofil.",
      idx_desc: "Politische Fragen beantworten, ein persönliches Werteprofil erhalten und mit teilnehmenden Profilen vergleichen. Keine Wahlempfehlung.",
      idx_h1: "Deine Stimme. Dein Werteprofil.",
      idx_lead: "Beantworte Sach- und Wertefragen, entdecke dein persönliches Profil auf 11 Werteachsen und vergleiche dich mit teilnehmenden Profilen. Impuls bietet Inhalte für 10 Länder; die Ergebnisse sind nicht repräsentativ für die Bevölkerung.",
      idx_card_title: "Was Impuls anders macht",
      idx_p1: "<strong>Keine Wahlempfehlung.</strong> Impuls zeigt Nähe und Mehrheiten, bewertet aber nicht, was „richtig“ ist.",
      idx_p2: "<strong>Ohne Konto antworten.</strong> Politische Antworten werden nach ausdrücklicher Einwilligung pseudonym verarbeitet. Nutzungsanalyse ist freiwillig; technische Fehlerberichte können auch ohne Analysezustimmung anfallen. Keine Werbung.",
      idx_p3: "<strong>10 Länder.</strong> Eigene Inhalte für DE, AT, CH, IT, FR, ES, NL, PL, GB und TR. Umfang und Quellen unterscheiden sich je nach Land.",
      idx_p4: "<strong>Datenschutz nachvollziehbar.</strong> Welche Daten die App verarbeitet und welche Dienstleister beteiligt sind, erklärt die Datenschutzerklärung.",
      idx_beta: "<strong>In Entwicklung und Erprobung:</strong> Store-Links erscheinen hier nach Veröffentlichung.",
      idx_footer: "© 2026 Impuls — ein unabhängiges Projekt ohne Verbindung zu Parteien, Regierungen oder Behörden. · <a href='datenschutz.html'>Datenschutz</a> · <a href='impressum.html'>Impressum</a> · <a href='support.html'>Support &amp; Daten löschen</a>",
      sup_title: "Support — Impuls",
      sup_h1: "Support &amp; Kontakt",
      sup_lead: "Fragen, Feedback oder ein Problem mit der App? Schreib einfach eine E-Mail — du bekommst eine persönliche Antwort.",
      sup_c1_title: "E-Mail",
      sup_c1_help: "Hilfreich für eine schnelle Antwort: App-Version (Profil → unten), dein Gerät und eine kurze Beschreibung, was du erwartet hast und was stattdessen passiert ist.",
      sup_c2_title: "Daten löschen",
      sup_c2_body: "Dein Konto und zuordenbare Daten kannst du in der App löschen: Profil → Rechtliches &amp; Vertrauen → Konto löschen. Bewahre bei einem ausstehenden Löschvorgang die App-Daten bis zum bestätigten Abschluss. Für Datenschutz- und Löschanfragen ohne App schreibe an <a href=\"mailto:privacy@impulsapp.eu\">privacy@impulsapp.eu</a>. Sende keine Passwörter, Anmeldecodes oder politischen Antworten.",
      sup_c3_title: "Feedback",
      sup_c3_body: "Feedback zur Android- oder iOS-App kannst du an support@impulsapp.eu senden. Gib bitte App-Version und Gerät an; sende keine Passwörter, Anmeldecodes oder politischen Antworten.",
      sup_footer: "© 2026 Impuls · <a href='index.html'>Start</a> · <a href='datenschutz.html'>Datenschutz</a> · <a href='impressum.html'>Impressum</a>"
    },
    en: {
      nav_method: "Methodology", nav_privacy: "Privacy", nav_imprint: "Legal notice", nav_terms: "Terms of use", nav_support: "Support",
      idx_title: "Impuls — Your voice. Your value profile.",
      idx_desc: "Answer political questions, discover a personal values profile and compare with participating profiles. No voting advice.",
      idx_h1: "Your voice. Your value profile.",
      idx_lead: "Answer policy and values questions, discover your personal profile across 11 value axes and compare with participating profiles. Impuls provides content for 10 countries; results are not representative of the population.",
      idx_card_title: "What makes Impuls different",
      idx_p1: "<strong>No voting advice.</strong> Impuls shows proximity and majorities, but never judges what is ‘right’.",
      idx_p2: "<strong>Answer without an account.</strong> Political answers are processed pseudonymously after explicit consent. Usage analytics is optional; technical error reports may be active without analytics consent. No ads.",
      idx_p3: "<strong>10 countries.</strong> Dedicated content for DE, AT, CH, IT, FR, ES, NL, PL, GB and TR. Coverage and sources vary by country.",
      idx_p4: "<strong>Understand the data processing.</strong> The privacy policy explains which data the app processes and which service providers are involved.",
      idx_beta: "<strong>In development and testing:</strong> Store links will appear here after publication.",
      idx_footer: "© 2026 Impuls — an independent project with no affiliation to parties, governments or authorities. · <a href='datenschutz.html'>Privacy</a> · <a href='impressum.html'>Legal notice</a> · <a href='support.html'>Support &amp; data deletion</a>",
      sup_title: "Support — Impuls",
      sup_h1: "Support &amp; contact",
      sup_lead: "Questions, feedback or a problem with the app? Just send an email — you’ll get a personal reply.",
      sup_c1_title: "Email",
      sup_c1_help: "For a quick reply, it helps to include: app version (Profile → bottom), your device, and a short description of what you expected and what happened instead.",
      sup_c2_title: "Delete data",
      sup_c2_body: "You can delete your account and attributable data in the app: Profile → Legal &amp; Trust → Delete account. If deletion is pending, keep the app data until completion is confirmed. For privacy or deletion requests without the app, email <a href=\"mailto:privacy@impulsapp.eu\">privacy@impulsapp.eu</a>. Do not send passwords, sign-in codes or political answers.",
      sup_c3_title: "Feedback",
      sup_c3_body: "Send feedback about the Android or iOS app to support@impulsapp.eu. Include the app version and device; do not send passwords, sign-in codes or political answers.",
      sup_footer: "© 2026 Impuls · <a href='index.html'>Home</a> · <a href='datenschutz.html'>Privacy</a> · <a href='impressum.html'>Legal notice</a>"
    },
    it: {
      nav_method: "Metodologia", nav_privacy: "Privacy", nav_imprint: "Note legali", nav_terms: "Condizioni d’uso", nav_support: "Supporto",
      idx_title: "Impuls — La tua voce. Il tuo profilo valoriale.",
      idx_desc: "Rispondi a domande politiche, scopri un profilo valoriale personale e confrontalo con i profili partecipanti. Nessuna indicazione di voto.",
      idx_h1: "La tua voce. Il tuo profilo valoriale.",
      idx_lead: "Rispondi a domande su temi e valori, scopri il tuo profilo personale su 11 assi valoriali e confrontati con i profili partecipanti. Impuls offre contenuti per 10 Paesi; i risultati non sono rappresentativi della popolazione.",
      idx_card_title: "Cosa rende Impuls diverso",
      idx_p1: "<strong>Nessuna indicazione di voto.</strong> Impuls mostra vicinanza e maggioranze, ma non giudica cosa sia «giusto».",
      idx_p2: "<strong>Rispondi senza account.</strong> Le risposte politiche sono trattate in forma pseudonima dopo il consenso esplicito. Le statistiche d’uso sono facoltative; i rapporti tecnici sugli errori possono essere attivi anche senza consenso alle statistiche. Nessuna pubblicità.",
      idx_p3: "<strong>10 Paesi.</strong> Contenuti dedicati per DE, AT, CH, IT, FR, ES, NL, PL, GB e TR. Copertura e fonti variano da Paese a Paese.",
      idx_p4: "<strong>Un trattamento dei dati comprensibile.</strong> L’informativa sulla privacy spiega quali dati tratta l’app e quali fornitori di servizi sono coinvolti.",
      idx_beta: "<strong>In sviluppo e test:</strong> i link agli store appariranno qui dopo la pubblicazione.",
      idx_footer: "© 2026 Impuls — un progetto indipendente, senza legami con partiti, governi o autorità. · <a href='datenschutz.html'>Privacy</a> · <a href='impressum.html'>Note legali</a> · <a href='support.html'>Supporto ed eliminazione dei dati</a>",
      sup_title: "Supporto — Impuls",
      sup_h1: "Supporto e contatto",
      sup_lead: "Domande, feedback o un problema con l’app? Scrivici una semplice e-mail — riceverai una risposta personale.",
      sup_c1_title: "E-mail",
      sup_c1_help: "Per una risposta rapida è utile indicare: versione dell’app (Profilo → in basso), il tuo dispositivo e una breve descrizione di cosa ti aspettavi e cosa è successo invece.",
      sup_c2_title: "Eliminare i dati",
      sup_c2_body: "Puoi eliminare il tuo account e i dati associati direttamente nell’app. Se l’eliminazione è in sospeso, conserva i dati dell’app fino alla conferma del completamento. Per richieste sulla privacy o di eliminazione senza app, scrivi a <a href=\"mailto:privacy@impulsapp.eu\">privacy@impulsapp.eu</a>. Non inviare password, codici di accesso o risposte politiche.",
      sup_c3_title: "Feedback",
      sup_c3_body: "Invia i tuoi commenti sull’app Android o iOS a support@impulsapp.eu. Indica versione dell’app e dispositivo; non inviare password, codici di accesso o risposte politiche.",
      sup_footer: "© 2026 Impuls · <a href='index.html'>Home</a> · <a href='datenschutz.html'>Privacy</a> · <a href='impressum.html'>Note legali</a>"
    },
    fr: {
      nav_method: "Méthodologie", nav_privacy: "Confidentialité", nav_imprint: "Mentions légales", nav_terms: "Conditions d’utilisation", nav_support: "Support",
      idx_title: "Impuls — Ta voix. Ton profil de valeurs.",
      idx_desc: "Réponds aux questions politiques, découvre un profil de valeurs personnel et compare-le aux profils participants. Aucune consigne de vote.",
      idx_h1: "Ta voix. Ton profil de valeurs.",
      idx_lead: "Réponds aux questions de fond et de valeurs, découvre ton profil personnel sur 11 axes et compare-toi aux profils participants. Impuls propose des contenus pour 10 pays ; les résultats ne sont pas représentatifs de la population.",
      idx_card_title: "Ce qui rend Impuls différent",
      idx_p1: "<strong>Aucune consigne de vote.</strong> Impuls montre les proximités et les majorités, mais ne juge jamais ce qui est « juste ».",
      idx_p2: "<strong>Répondre sans compte.</strong> Les réponses politiques sont traitées sous pseudonyme après consentement explicite. Les statistiques d’usage sont facultatives ; les rapports d’erreurs techniques peuvent être actifs sans consentement aux statistiques. Aucune publicité.",
      idx_p3: "<strong>10 pays.</strong> Des contenus dédiés pour DE, AT, CH, IT, FR, ES, NL, PL, GB et TR. L’étendue des contenus et les sources varient selon le pays.",
      idx_p4: "<strong>Comprendre le traitement des données.</strong> La politique de confidentialité explique quelles données l’app traite et quels prestataires interviennent.",
      idx_beta: "<strong>En développement et en test :</strong> les liens vers les boutiques apparaîtront ici après publication.",
      idx_footer: "© 2026 Impuls — un projet indépendant, sans lien avec des partis, gouvernements ou autorités. · <a href='datenschutz.html'>Confidentialité</a> · <a href='impressum.html'>Mentions légales</a> · <a href='support.html'>Support et suppression des données</a>",
      sup_title: "Support — Impuls",
      sup_h1: "Support et contact",
      sup_lead: "Une question, un retour ou un problème avec l’application ? Envoie simplement un e-mail — tu recevras une réponse personnelle.",
      sup_c1_title: "E-mail",
      sup_c1_help: "Pour une réponse rapide, précise : la version de l’app (Profil → en bas), ton appareil et une brève description de ce que tu attendais et de ce qui s’est passé à la place.",
      sup_c2_title: "Supprimer les données",
      sup_c2_body: "Tu peux supprimer ton compte et les données associées dans l’app. Si la suppression est en attente, conserve les données de l’app jusqu’à la confirmation de sa fin. Pour toute demande concernant la confidentialité ou la suppression sans l’app, écris à <a href=\"mailto:privacy@impulsapp.eu\">privacy@impulsapp.eu</a>. N’envoie pas de mots de passe, de codes de connexion ou de réponses politiques.",
      sup_c3_title: "Vos retours",
      sup_c3_body: "Envoie tes retours sur l’app Android ou iOS à support@impulsapp.eu. Indique la version de l’app et ton appareil ; n’envoie ni mots de passe, ni codes de connexion, ni réponses politiques.",
      sup_footer: "© 2026 Impuls · <a href='index.html'>Accueil</a> · <a href='datenschutz.html'>Confidentialité</a> · <a href='impressum.html'>Mentions légales</a>"
    },
    es: {
      nav_method: "Metodología", nav_privacy: "Privacidad", nav_imprint: "Aviso legal", nav_terms: "Condiciones de uso", nav_support: "Soporte",
      idx_title: "Impuls — Tu voz. Tu perfil de valores.",
      idx_desc: "Responde preguntas políticas, descubre un perfil de valores personal y compáralo con los perfiles participantes. Sin recomendación de voto.",
      idx_h1: "Tu voz. Tu perfil de valores.",
      idx_lead: "Responde preguntas temáticas y de valores, descubre tu perfil personal en 11 ejes y compárate con los perfiles participantes. Impuls ofrece contenidos para 10 países; los resultados no son representativos de la población.",
      idx_card_title: "Qué hace diferente a Impuls",
      idx_p1: "<strong>Sin recomendación de voto.</strong> Impuls muestra cercanía y mayorías, pero no juzga qué es «correcto».",
      idx_p2: "<strong>Responde sin cuenta.</strong> Las respuestas políticas se tratan de forma seudónima tras el consentimiento expreso. Las estadísticas de uso son opcionales; los informes de errores técnicos pueden estar activos sin ese consentimiento. Sin publicidad.",
      idx_p3: "<strong>10 países.</strong> Contenidos propios para DE, AT, CH, IT, FR, ES, NL, PL, GB y TR. El alcance y las fuentes varían según el país.",
      idx_p4: "<strong>Comprende el tratamiento de datos.</strong> La política de privacidad explica qué datos trata la app y qué proveedores de servicios intervienen.",
      idx_beta: "<strong>En desarrollo y pruebas:</strong> los enlaces a las tiendas aparecerán aquí después de la publicación.",
      idx_footer: "© 2026 Impuls — un proyecto independiente, sin vínculo con partidos, gobiernos o autoridades. · <a href='datenschutz.html'>Privacidad</a> · <a href='impressum.html'>Aviso legal</a> · <a href='support.html'>Soporte y eliminación de datos</a>",
      sup_title: "Soporte — Impuls",
      sup_h1: "Soporte y contacto",
      sup_lead: "¿Preguntas, comentarios o un problema con la app? Escríbenos un correo — recibirás una respuesta personal.",
      sup_c1_title: "Correo electrónico",
      sup_c1_help: "Para una respuesta rápida, ayuda indicar: versión de la app (Perfil → abajo), tu dispositivo y una breve descripción de qué esperabas y qué ocurrió en su lugar.",
      sup_c2_title: "Eliminar datos",
      sup_c2_body: "Puedes eliminar tu cuenta y los datos asociados desde la app. Si la eliminación está pendiente, conserva los datos de la app hasta recibir la confirmación de que ha finalizado. Para consultas sobre privacidad o solicitudes de eliminación sin la app, escribe a <a href=\"mailto:privacy@impulsapp.eu\">privacy@impulsapp.eu</a>. No envíes contraseñas, códigos de acceso ni respuestas políticas.",
      sup_c3_title: "Comentarios",
      sup_c3_body: "Envía tus comentarios sobre la app Android o iOS a support@impulsapp.eu. Indica la versión de la app y el dispositivo; no envíes contraseñas, códigos de acceso ni respuestas políticas.",
      sup_footer: "© 2026 Impuls · <a href='index.html'>Inicio</a> · <a href='datenschutz.html'>Privacidad</a> · <a href='impressum.html'>Aviso legal</a>"
    },
    nl: {
      nav_method: "Methodologie", nav_privacy: "Privacy", nav_imprint: "Colofon", nav_terms: "Gebruiksvoorwaarden", nav_support: "Support",
      idx_title: "Impuls — Jouw stem. Jouw waardenprofiel.",
      idx_desc: "Beantwoord politieke vragen, ontdek een persoonlijk waardenprofiel en vergelijk het met deelnemende profielen. Geen stemadvies.",
      idx_h1: "Jouw stem. Jouw waardenprofiel.",
      idx_lead: "Beantwoord inhoudelijke en waardenvragen, ontdek je persoonlijke profiel op 11 waardenassen en vergelijk je met deelnemende profielen. Impuls biedt inhoud voor 10 landen; de resultaten zijn niet representatief voor de bevolking.",
      idx_card_title: "Wat Impuls anders maakt",
      idx_p1: "<strong>Geen stemadvies.</strong> Impuls toont nabijheid en meerderheden, maar oordeelt niet over wat ‘juist’ is.",
      idx_p2: "<strong>Antwoorden zonder account.</strong> Politieke antwoorden worden na uitdrukkelijke toestemming pseudoniem verwerkt. Gebruiksstatistieken zijn optioneel; technische foutrapporten kunnen zonder toestemming voor statistieken actief zijn. Geen advertenties.",
      idx_p3: "<strong>10 landen.</strong> Eigen inhoud voor DE, AT, CH, IT, FR, ES, NL, PL, GB en TR. Omvang en bronnen verschillen per land.",
      idx_p4: "<strong>Inzicht in gegevensverwerking.</strong> Het privacybeleid legt uit welke gegevens de app verwerkt en welke dienstverleners erbij betrokken zijn.",
      idx_beta: "<strong>In ontwikkeling en test:</strong> links naar de appwinkels verschijnen hier na publicatie.",
      idx_footer: "© 2026 Impuls — een onafhankelijk project zonder banden met partijen, overheden of autoriteiten. · <a href='datenschutz.html'>Privacy</a> · <a href='impressum.html'>Colofon</a> · <a href='support.html'>Support en gegevens verwijderen</a>",
      sup_title: "Support — Impuls",
      sup_h1: "Support en contact",
      sup_lead: "Vragen, feedback of een probleem met de app? Stuur gewoon een e-mail — je krijgt een persoonlijk antwoord.",
      sup_c1_title: "E-mail",
      sup_c1_help: "Voor een snel antwoord helpt het om te vermelden: app-versie (Profiel → onderaan), je apparaat en een korte beschrijving van wat je verwachtte en wat er in plaats daarvan gebeurde.",
      sup_c2_title: "Gegevens verwijderen",
      sup_c2_body: "Je kunt je account en bijbehorende gegevens in de app verwijderen. Bewaar de appgegevens zolang de verwijdering nog niet is bevestigd. Voor privacyvragen of verwijderingsverzoeken zonder de app kun je mailen naar <a href=\"mailto:privacy@impulsapp.eu\">privacy@impulsapp.eu</a>. Stuur geen wachtwoorden, inlogcodes of politieke antwoorden.",
      sup_c3_title: "Feedback",
      sup_c3_body: "Stuur feedback over de Android- of iOS-app naar support@impulsapp.eu. Vermeld de appversie en je apparaat; stuur geen wachtwoorden, inlogcodes of politieke antwoorden.",
      sup_footer: "© 2026 Impuls · <a href='index.html'>Home</a> · <a href='datenschutz.html'>Privacy</a> · <a href='impressum.html'>Colofon</a>"
    },
    pl: {
      nav_method: "Metodologia", nav_privacy: "Prywatność", nav_imprint: "Nota prawna", nav_terms: "Warunki korzystania", nav_support: "Pomoc",
      idx_title: "Impuls — Twój głos. Twój profil wartości.",
      idx_desc: "Odpowiadaj na pytania polityczne, odkryj osobisty profil wartości i porównaj go z profilami uczestników. Bez rekomendacji wyborczych.",
      idx_h1: "Twój głos. Twój profil wartości.",
      idx_lead: "Odpowiadaj na pytania merytoryczne i światopoglądowe, odkryj swój osobisty profil na 11 osiach wartości i porównuj go z profilami uczestników. Impuls oferuje treści dla 10 krajów; wyniki nie są reprezentatywne dla populacji.",
      idx_card_title: "Co wyróżnia Impuls",
      idx_p1: "<strong>Bez rekomendacji wyborczych.</strong> Impuls pokazuje bliskość i większości, ale nie ocenia, co jest „słuszne”.",
      idx_p2: "<strong>Odpowiadaj bez konta.</strong> Odpowiedzi polityczne są przetwarzane pod pseudonimem po wyraźnej zgodzie. Statystyki użytkowania są opcjonalne; techniczne raporty błędów mogą działać bez zgody na statystyki. Bez reklam.",
      idx_p3: "<strong>10 krajów.</strong> Własne treści dla DE, AT, CH, IT, FR, ES, NL, PL, GB i TR. Zakres i źródła różnią się w zależności od kraju.",
      idx_p4: "<strong>Zrozumiałe przetwarzanie danych.</strong> Polityka prywatności wyjaśnia, jakie dane przetwarza aplikacja i jacy usługodawcy w tym uczestniczą.",
      idx_beta: "<strong>W fazie rozwoju i testów:</strong> linki do sklepów pojawią się tutaj po publikacji.",
      idx_footer: "© 2026 Impuls — niezależny projekt bez powiązań z partiami, rządami czy urzędami. · <a href='datenschutz.html'>Prywatność</a> · <a href='impressum.html'>Nota prawna</a> · <a href='support.html'>Pomoc i usuwanie danych</a>",
      sup_title: "Pomoc — Impuls",
      sup_h1: "Pomoc i kontakt",
      sup_lead: "Masz pytania, uwagi lub problem z aplikacją? Po prostu napisz e-mail — otrzymasz osobistą odpowiedź.",
      sup_c1_title: "E-mail",
      sup_c1_help: "Aby przyspieszyć odpowiedź, podaj: wersję aplikacji (Profil → na dole), swoje urządzenie oraz krótki opis tego, czego oczekiwałeś i co wydarzyło się zamiast tego.",
      sup_c2_title: "Usuwanie danych",
      sup_c2_body: "Możesz usunąć konto i powiązane dane w aplikacji. Jeśli usuwanie jest w toku, zachowaj dane aplikacji do potwierdzenia zakończenia. Pytania dotyczące prywatności lub wnioski o usunięcie danych bez aplikacji kieruj na <a href=\"mailto:privacy@impulsapp.eu\">privacy@impulsapp.eu</a>. Nie przesyłaj haseł, kodów logowania ani odpowiedzi politycznych.",
      sup_c3_title: "Opinie",
      sup_c3_body: "Prześlij uwagi o aplikacji Android lub iOS na support@impulsapp.eu. Podaj wersję aplikacji i urządzenie; nie przesyłaj haseł, kodów logowania ani odpowiedzi politycznych.",
      sup_footer: "© 2026 Impuls · <a href='index.html'>Start</a> · <a href='datenschutz.html'>Prywatność</a> · <a href='impressum.html'>Nota prawna</a>"
    }
  };

  function pickLang() {
    try { var s = localStorage.getItem("impuls_lang"); if (s && I18N[s]) return s; } catch (e) {}
    var navs = navigator.languages || [navigator.language || "de"];
    for (var i = 0; i < navs.length; i++) {
      var c = (navs[i] || "").slice(0, 2).toLowerCase();
      if (I18N[c]) return c;
    }
    return "de";
  }

  function applyLang(lang) {
    var t = I18N[lang] || I18N.de;
    document.documentElement.lang = lang;
    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i], v = t[el.getAttribute("data-i18n")];
      if (v == null) continue;
      if (el.tagName === "TITLE") el.textContent = v; else el.innerHTML = v;
    }
    var metas = document.querySelectorAll("[data-i18n-attr]");
    for (var j = 0; j < metas.length; j++) {
      var m = metas[j], mv = t[m.getAttribute("data-i18n-attr")];
      if (mv != null) m.setAttribute("content", mv);
    }
    var legalLinks = document.querySelectorAll("header.site nav a, footer a");
    for (var p = 0; p < legalLinks.length; p++) {
      var lm = (legalLinks[p].getAttribute("href") || "").match(/^(datenschutz|impressum|nutzungsbedingungen)(_en)?\.html$/);
      if (lm) legalLinks[p].setAttribute("href", lm[1] + (lang === "de" ? "" : "_en") + ".html");
    }
    var sel = document.getElementById("lang-switch");
    if (sel) sel.value = lang;
    try { localStorage.setItem("impuls_lang", lang); } catch (e) {}
  }

  function init() {
    var sel = document.getElementById("lang-switch");
    if (sel) sel.addEventListener("change", function (e) { applyLang(e.target.value); });
    applyLang(pickLang());
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
