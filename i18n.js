/* Impuls — mehrsprachige Inhalte (Landing + Support). Dependency-frei.
   Sprachen: de, en, it, fr, es, nl, pl. Rechtstexte bleiben bewusst DE. */
(function () {
  "use strict";

  var I18N = {
    de: {
      nav_privacy: "Datenschutz", nav_imprint: "Impressum", nav_terms: "Nutzungsbedingungen", nav_support: "Support",
      idx_title: "Impuls — Deine Stimme. Dein Werteprofil.",
      idx_desc: "Impuls ist eine politische Beteiligungs-App: Fragen beantworten, anonymes Werteprofil erhalten, mit dem eigenen Land vergleichen. Keine Wahlempfehlung. Keine Tracker.",
      idx_h1: "Deine Stimme. Dein Werteprofil.",
      idx_lead: "Impuls macht sichtbar, wo du politisch stehst — und wo dein Land steht. Beantworte Sach- und Wertefragen, erhalte ein anonymes Profil auf zehn Werteachsen und vergleiche dich mit der Community in 9 europäischen Ländern.",
      idx_card_title: "Was Impuls anders macht",
      idx_p1: "<strong>Keine Wahlempfehlung.</strong> Impuls zeigt Nähe und Mehrheiten, bewertet aber nicht, was „richtig“ ist.",
      idx_p2: "<strong>Anonym by design.</strong> Kein Konto nötig, keine Tracker, keine Werbung. Politische Antworten werden nur pseudonym verarbeitet.",
      idx_p3: "<strong>Europäisch.</strong> Eigene Inhalte für DE, AT, CH, IT, FR, ES, NL, PL und GB — in der jeweiligen Landessprache.",
      idx_p4: "<strong>Server in der EU.</strong> Alle Daten liegen in Frankfurt am Main.",
      idx_beta: "<strong>Beta:</strong> Impuls ist derzeit in der TestFlight-Phase. Der App-Store-Link erscheint hier zum Launch.",
      idx_footer: "© 2026 Impuls — ein unabhängiges, privates Projekt ohne Verbindung zu Parteien, Regierungen oder Behörden. · <a href='datenschutz.html'>Datenschutz</a> · <a href='impressum.html'>Impressum</a> · <a href='support.html'>Support</a>",
      sup_title: "Support — Impuls",
      sup_h1: "Support &amp; Kontakt",
      sup_lead: "Fragen, Feedback oder ein Problem mit der App? Schreib einfach eine E-Mail — du bekommst eine persönliche Antwort.",
      sup_c1_title: "E-Mail",
      sup_c1_help: "Hilfreich für eine schnelle Antwort: App-Version (Profil → unten), dein Gerät und eine kurze Beschreibung, was du erwartet hast und was stattdessen passiert ist.",
      sup_c2_title: "Daten löschen",
      sup_c2_body: "Lokale Daten löschst du direkt in der App: Profil → Rechtliches → „Alle meine Daten löschen“. Für die Löschung serverseitiger anonymer Stimmen schick uns deine Geräte-UUID per E-Mail (siehe <a href='datenschutz.html'>Datenschutzerklärung</a>, Abschnitt 8–9).",
      sup_c3_title: "Beta-Feedback",
      sup_c3_body: "In der TestFlight-Phase erreichst du uns auch über die Feedback-Funktion direkt in TestFlight (Screenshot → Feedback teilen).",
      sup_footer: "© 2026 Impuls · <a href='index.html'>Start</a> · <a href='datenschutz.html'>Datenschutz</a> · <a href='impressum.html'>Impressum</a>"
    },
    en: {
      nav_privacy: "Privacy", nav_imprint: "Legal notice", nav_terms: "Terms of use", nav_support: "Support",
      idx_title: "Impuls — Your voice. Your value profile.",
      idx_desc: "Impuls is a political participation app: answer questions, get an anonymous value profile, and compare yourself with your country. No voting advice. No trackers.",
      idx_h1: "Your voice. Your value profile.",
      idx_lead: "Impuls shows where you stand politically — and where your country stands. Answer policy and value questions, get an anonymous profile across ten value axes, and compare yourself with the community in 9 European countries.",
      idx_card_title: "What makes Impuls different",
      idx_p1: "<strong>No voting advice.</strong> Impuls shows proximity and majorities, but never judges what is ‘right’.",
      idx_p2: "<strong>Anonymous by design.</strong> No account needed, no trackers, no ads. Political answers are processed only pseudonymously.",
      idx_p3: "<strong>European.</strong> Dedicated content for DE, AT, CH, IT, FR, ES, NL, PL and GB — each in its local language.",
      idx_p4: "<strong>Servers in the EU.</strong> All data is stored in Frankfurt am Main.",
      idx_beta: "<strong>Beta:</strong> Impuls is currently in TestFlight. The App Store link will appear here at launch.",
      idx_footer: "© 2026 Impuls — an independent, private project with no affiliation to parties, governments or authorities. · <a href='datenschutz.html'>Privacy</a> · <a href='impressum.html'>Legal notice</a> · <a href='support.html'>Support</a>",
      sup_title: "Support — Impuls",
      sup_h1: "Support &amp; contact",
      sup_lead: "Questions, feedback or a problem with the app? Just send an email — you’ll get a personal reply.",
      sup_c1_title: "Email",
      sup_c1_help: "For a quick reply, it helps to include: app version (Profile → bottom), your device, and a short description of what you expected and what happened instead.",
      sup_c2_title: "Delete data",
      sup_c2_body: "You can delete local data directly in the app: Profile → Legal → ‘Delete all my data’. To delete server-side anonymous votes, email us your device UUID (see <a href='datenschutz.html'>privacy policy</a>, sections 8–9).",
      sup_c3_title: "Beta feedback",
      sup_c3_body: "During the TestFlight phase you can also reach us via the feedback function directly in TestFlight (screenshot → share feedback).",
      sup_footer: "© 2026 Impuls · <a href='index.html'>Home</a> · <a href='datenschutz.html'>Privacy</a> · <a href='impressum.html'>Legal notice</a>"
    },
    it: {
      nav_privacy: "Privacy", nav_imprint: "Note legali", nav_terms: "Condizioni d’uso", nav_support: "Supporto",
      idx_title: "Impuls — La tua voce. Il tuo profilo valoriale.",
      idx_desc: "Impuls è un’app di partecipazione politica: rispondi alle domande, ottieni un profilo valoriale anonimo e confrontati con il tuo Paese. Nessuna indicazione di voto. Nessun tracker.",
      idx_h1: "La tua voce. Il tuo profilo valoriale.",
      idx_lead: "Impuls mostra dove ti collochi politicamente — e dove si colloca il tuo Paese. Rispondi a domande su temi e valori, ottieni un profilo anonimo su dieci assi valoriali e confrontati con la community in 9 Paesi europei.",
      idx_card_title: "Cosa rende Impuls diverso",
      idx_p1: "<strong>Nessuna indicazione di voto.</strong> Impuls mostra vicinanza e maggioranze, ma non giudica cosa sia «giusto».",
      idx_p2: "<strong>Anonimo per design.</strong> Nessun account, nessun tracker, nessuna pubblicità. Le risposte politiche sono trattate solo in forma pseudonima.",
      idx_p3: "<strong>Europeo.</strong> Contenuti dedicati per DE, AT, CH, IT, FR, ES, NL, PL e GB — ciascuno nella propria lingua.",
      idx_p4: "<strong>Server nell’UE.</strong> Tutti i dati sono archiviati a Francoforte sul Meno.",
      idx_beta: "<strong>Beta:</strong> Impuls è attualmente in TestFlight. Il link all’App Store apparirà qui al lancio.",
      idx_footer: "© 2026 Impuls — un progetto privato e indipendente, senza alcun legame con partiti, governi o autorità. · <a href='datenschutz.html'>Privacy</a> · <a href='impressum.html'>Note legali</a> · <a href='support.html'>Supporto</a>",
      sup_title: "Supporto — Impuls",
      sup_h1: "Supporto e contatto",
      sup_lead: "Domande, feedback o un problema con l’app? Scrivici una semplice e-mail — riceverai una risposta personale.",
      sup_c1_title: "E-mail",
      sup_c1_help: "Per una risposta rapida è utile indicare: versione dell’app (Profilo → in basso), il tuo dispositivo e una breve descrizione di cosa ti aspettavi e cosa è successo invece.",
      sup_c2_title: "Eliminare i dati",
      sup_c2_body: "Puoi eliminare i dati locali direttamente nell’app: Profilo → Note legali → «Elimina tutti i miei dati». Per eliminare i voti anonimi lato server, inviaci l’UUID del tuo dispositivo via e-mail (vedi <a href='datenschutz.html'>informativa sulla privacy</a>, sezioni 8–9).",
      sup_c3_title: "Feedback beta",
      sup_c3_body: "Durante la fase TestFlight puoi contattarci anche tramite la funzione di feedback direttamente in TestFlight (screenshot → condividi feedback).",
      sup_footer: "© 2026 Impuls · <a href='index.html'>Home</a> · <a href='datenschutz.html'>Privacy</a> · <a href='impressum.html'>Note legali</a>"
    },
    fr: {
      nav_privacy: "Confidentialité", nav_imprint: "Mentions légales", nav_terms: "Conditions d’utilisation", nav_support: "Support",
      idx_title: "Impuls — Ta voix. Ton profil de valeurs.",
      idx_desc: "Impuls est une application de participation politique : réponds aux questions, obtiens un profil de valeurs anonyme et compare-toi à ton pays. Aucune consigne de vote. Aucun traceur.",
      idx_h1: "Ta voix. Ton profil de valeurs.",
      idx_lead: "Impuls montre où tu te situes politiquement — et où se situe ton pays. Réponds à des questions de fond et de valeurs, obtiens un profil anonyme sur dix axes de valeurs et compare-toi à la communauté dans 9 pays européens.",
      idx_card_title: "Ce qui rend Impuls différent",
      idx_p1: "<strong>Aucune consigne de vote.</strong> Impuls montre les proximités et les majorités, mais ne juge jamais ce qui est « juste ».",
      idx_p2: "<strong>Anonyme par conception.</strong> Aucun compte requis, aucun traceur, aucune publicité. Les réponses politiques sont traitées uniquement de façon pseudonyme.",
      idx_p3: "<strong>Européen.</strong> Des contenus dédiés pour DE, AT, CH, IT, FR, ES, NL, PL et GB — chacun dans sa langue.",
      idx_p4: "<strong>Serveurs dans l’UE.</strong> Toutes les données sont hébergées à Francfort-sur-le-Main.",
      idx_beta: "<strong>Bêta :</strong> Impuls est actuellement en TestFlight. Le lien App Store apparaîtra ici au lancement.",
      idx_footer: "© 2026 Impuls — un projet privé et indépendant, sans lien avec des partis, gouvernements ou autorités. · <a href='datenschutz.html'>Confidentialité</a> · <a href='impressum.html'>Mentions légales</a> · <a href='support.html'>Support</a>",
      sup_title: "Support — Impuls",
      sup_h1: "Support et contact",
      sup_lead: "Une question, un retour ou un problème avec l’application ? Envoie simplement un e-mail — tu recevras une réponse personnelle.",
      sup_c1_title: "E-mail",
      sup_c1_help: "Pour une réponse rapide, précise : la version de l’app (Profil → en bas), ton appareil et une brève description de ce que tu attendais et de ce qui s’est passé à la place.",
      sup_c2_title: "Supprimer les données",
      sup_c2_body: "Tu peux supprimer les données locales directement dans l’app : Profil → Mentions légales → « Supprimer toutes mes données ». Pour supprimer les votes anonymes côté serveur, envoie-nous l’UUID de ton appareil par e-mail (voir <a href='datenschutz.html'>politique de confidentialité</a>, sections 8–9).",
      sup_c3_title: "Retour bêta",
      sup_c3_body: "Pendant la phase TestFlight, tu peux aussi nous joindre via la fonction de retour directement dans TestFlight (capture d’écran → partager un retour).",
      sup_footer: "© 2026 Impuls · <a href='index.html'>Accueil</a> · <a href='datenschutz.html'>Confidentialité</a> · <a href='impressum.html'>Mentions légales</a>"
    },
    es: {
      nav_privacy: "Privacidad", nav_imprint: "Aviso legal", nav_terms: "Condiciones de uso", nav_support: "Soporte",
      idx_title: "Impuls — Tu voz. Tu perfil de valores.",
      idx_desc: "Impuls es una app de participación política: responde preguntas, obtén un perfil de valores anónimo y compárate con tu país. Sin recomendación de voto. Sin rastreadores.",
      idx_h1: "Tu voz. Tu perfil de valores.",
      idx_lead: "Impuls muestra dónde te sitúas políticamente — y dónde se sitúa tu país. Responde preguntas temáticas y de valores, obtén un perfil anónimo en diez ejes de valores y compárate con la comunidad en 9 países europeos.",
      idx_card_title: "Qué hace diferente a Impuls",
      idx_p1: "<strong>Sin recomendación de voto.</strong> Impuls muestra cercanía y mayorías, pero no juzga qué es «correcto».",
      idx_p2: "<strong>Anónimo por diseño.</strong> Sin cuenta, sin rastreadores, sin publicidad. Las respuestas políticas se procesan solo de forma seudónima.",
      idx_p3: "<strong>Europeo.</strong> Contenidos propios para DE, AT, CH, IT, FR, ES, NL, PL y GB — cada uno en su idioma.",
      idx_p4: "<strong>Servidores en la UE.</strong> Todos los datos se alojan en Fráncfort del Meno.",
      idx_beta: "<strong>Beta:</strong> Impuls está actualmente en TestFlight. El enlace a la App Store aparecerá aquí en el lanzamiento.",
      idx_footer: "© 2026 Impuls — un proyecto privado e independiente, sin vínculo con partidos, gobiernos o autoridades. · <a href='datenschutz.html'>Privacidad</a> · <a href='impressum.html'>Aviso legal</a> · <a href='support.html'>Soporte</a>",
      sup_title: "Soporte — Impuls",
      sup_h1: "Soporte y contacto",
      sup_lead: "¿Preguntas, comentarios o un problema con la app? Escríbenos un correo — recibirás una respuesta personal.",
      sup_c1_title: "Correo electrónico",
      sup_c1_help: "Para una respuesta rápida, ayuda indicar: versión de la app (Perfil → abajo), tu dispositivo y una breve descripción de qué esperabas y qué ocurrió en su lugar.",
      sup_c2_title: "Eliminar datos",
      sup_c2_body: "Puedes eliminar los datos locales directamente en la app: Perfil → Aviso legal → «Eliminar todos mis datos». Para eliminar los votos anónimos del servidor, envíanos el UUID de tu dispositivo por correo (consulta la <a href='datenschutz.html'>política de privacidad</a>, secciones 8–9).",
      sup_c3_title: "Comentarios de la beta",
      sup_c3_body: "Durante la fase de TestFlight también puedes contactarnos mediante la función de comentarios directamente en TestFlight (captura → compartir comentarios).",
      sup_footer: "© 2026 Impuls · <a href='index.html'>Inicio</a> · <a href='datenschutz.html'>Privacidad</a> · <a href='impressum.html'>Aviso legal</a>"
    },
    nl: {
      nav_privacy: "Privacy", nav_imprint: "Colofon", nav_terms: "Gebruiksvoorwaarden", nav_support: "Support",
      idx_title: "Impuls — Jouw stem. Jouw waardenprofiel.",
      idx_desc: "Impuls is een app voor politieke participatie: beantwoord vragen, krijg een anoniem waardenprofiel en vergelijk jezelf met je land. Geen stemadvies. Geen trackers.",
      idx_h1: "Jouw stem. Jouw waardenprofiel.",
      idx_lead: "Impuls laat zien waar je politiek staat — en waar je land staat. Beantwoord inhoudelijke en waardenvragen, krijg een anoniem profiel op tien waardenassen en vergelijk jezelf met de community in 9 Europese landen.",
      idx_card_title: "Wat Impuls anders maakt",
      idx_p1: "<strong>Geen stemadvies.</strong> Impuls toont nabijheid en meerderheden, maar oordeelt niet over wat ‘juist’ is.",
      idx_p2: "<strong>Anoniem by design.</strong> Geen account nodig, geen trackers, geen advertenties. Politieke antwoorden worden alleen pseudoniem verwerkt.",
      idx_p3: "<strong>Europees.</strong> Eigen content voor DE, AT, CH, IT, FR, ES, NL, PL en GB — elk in de eigen taal.",
      idx_p4: "<strong>Servers in de EU.</strong> Alle gegevens staan in Frankfurt am Main.",
      idx_beta: "<strong>Bèta:</strong> Impuls zit momenteel in de TestFlight-fase. De App Store-link verschijnt hier bij de lancering.",
      idx_footer: "© 2026 Impuls — een onafhankelijk, privéproject zonder band met partijen, overheden of autoriteiten. · <a href='datenschutz.html'>Privacy</a> · <a href='impressum.html'>Colofon</a> · <a href='support.html'>Support</a>",
      sup_title: "Support — Impuls",
      sup_h1: "Support en contact",
      sup_lead: "Vragen, feedback of een probleem met de app? Stuur gewoon een e-mail — je krijgt een persoonlijk antwoord.",
      sup_c1_title: "E-mail",
      sup_c1_help: "Voor een snel antwoord helpt het om te vermelden: app-versie (Profiel → onderaan), je apparaat en een korte beschrijving van wat je verwachtte en wat er in plaats daarvan gebeurde.",
      sup_c2_title: "Gegevens verwijderen",
      sup_c2_body: "Lokale gegevens verwijder je direct in de app: Profiel → Juridisch → ‘Al mijn gegevens verwijderen’. Voor het verwijderen van anonieme stemmen aan serverzijde stuur je ons je apparaat-UUID per e-mail (zie <a href='datenschutz.html'>privacyverklaring</a>, secties 8–9).",
      sup_c3_title: "Bèta-feedback",
      sup_c3_body: "Tijdens de TestFlight-fase kun je ons ook bereiken via de feedbackfunctie direct in TestFlight (screenshot → feedback delen).",
      sup_footer: "© 2026 Impuls · <a href='index.html'>Home</a> · <a href='datenschutz.html'>Privacy</a> · <a href='impressum.html'>Colofon</a>"
    },
    pl: {
      nav_privacy: "Prywatność", nav_imprint: "Nota prawna", nav_terms: "Warunki korzystania", nav_support: "Pomoc",
      idx_title: "Impuls — Twój głos. Twój profil wartości.",
      idx_desc: "Impuls to aplikacja do partycypacji politycznej: odpowiadaj na pytania, otrzymaj anonimowy profil wartości i porównaj się ze swoim krajem. Bez rekomendacji wyborczych. Bez trackerów.",
      idx_h1: "Twój głos. Twój profil wartości.",
      idx_lead: "Impuls pokazuje, gdzie sytuujesz się politycznie — i gdzie sytuuje się twój kraj. Odpowiadaj na pytania merytoryczne i światopoglądowe, otrzymaj anonimowy profil na dziesięciu osiach wartości i porównaj się ze społecznością w 9 krajach europejskich.",
      idx_card_title: "Co wyróżnia Impuls",
      idx_p1: "<strong>Bez rekomendacji wyborczych.</strong> Impuls pokazuje bliskość i większości, ale nie ocenia, co jest „słuszne”.",
      idx_p2: "<strong>Anonimowość z założenia.</strong> Bez konta, bez trackerów, bez reklam. Odpowiedzi polityczne są przetwarzane wyłącznie pseudonimowo.",
      idx_p3: "<strong>Europejski.</strong> Własne treści dla DE, AT, CH, IT, FR, ES, NL, PL i GB — każdy w swoim języku.",
      idx_p4: "<strong>Serwery w UE.</strong> Wszystkie dane są przechowywane we Frankfurcie nad Menem.",
      idx_beta: "<strong>Beta:</strong> Impuls jest obecnie w fazie TestFlight. Link do App Store pojawi się tutaj w momencie premiery.",
      idx_footer: "© 2026 Impuls — niezależny, prywatny projekt bez powiązań z partiami, rządami czy urzędami. · <a href='datenschutz.html'>Prywatność</a> · <a href='impressum.html'>Nota prawna</a> · <a href='support.html'>Pomoc</a>",
      sup_title: "Pomoc — Impuls",
      sup_h1: "Pomoc i kontakt",
      sup_lead: "Masz pytania, uwagi lub problem z aplikacją? Po prostu napisz e-mail — otrzymasz osobistą odpowiedź.",
      sup_c1_title: "E-mail",
      sup_c1_help: "Aby przyspieszyć odpowiedź, podaj: wersję aplikacji (Profil → na dole), swoje urządzenie oraz krótki opis tego, czego oczekiwałeś i co wydarzyło się zamiast tego.",
      sup_c2_title: "Usuwanie danych",
      sup_c2_body: "Dane lokalne usuniesz bezpośrednio w aplikacji: Profil → Informacje prawne → „Usuń wszystkie moje dane”. Aby usunąć anonimowe głosy po stronie serwera, wyślij nam UUID swojego urządzenia e-mailem (zob. <a href='datenschutz.html'>polityka prywatności</a>, sekcje 8–9).",
      sup_c3_title: "Opinie o wersji beta",
      sup_c3_body: "W fazie TestFlight możesz skontaktować się z nami także przez funkcję opinii bezpośrednio w TestFlight (zrzut ekranu → udostępnij opinię).",
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
