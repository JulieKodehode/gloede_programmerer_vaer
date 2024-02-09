# Opprette en ny fil

Den første HTML-filen i alle prosjekt skal hete index.html for når du kobler prosjektet ditt til andre programværer vil de lete etter en fil som heter index.html for å starte.

# Emmet Abbreviation

Når vi først har laget en nytt HTML-fil, kan vi bruke noe som heter emmet abbreviation for å få ferdig skrevet noe av koden.

Skriv ! (Shift 1) og trykk enter for å få en "mal" å kode fra.

Vi bruker emmet abbreviation når vi skriver kode, istedenfor å manuelt skrive < h1>< /h1> kan vi kun skrive h1 og få hjelp av emmet abbreviation til å legge til element strukturen til element navnet.

# Element strukturer

Alle element har en struktur, enten det er med opening-tag og closing-tag eller om det er en selfclosing-tag.

Opening tag: < h1>

Closing tag: < /h1>

Selfclosing tag: < img />


OBS: Det er ikke mellomrom mellom i taggen, men for å demonstreres her må jeg legge til mellomrom.

# Legge til bilder

Bruk et bilde du allerede har lagret eller finn et bilde på en nettside som har gratis bilder som unsplash. Lokaliser bildet i file explorer. Dra og dropp bildet inn i visual studio code i menyen til venstre så den legger seg i menyen som viser hva mappen inneholder.

Bruk HTML-elementet img og legg bildenavnet til i src og skriv en beskrivende tekst i alt. Eksempel:
<img scr="mittbilde.jpg" alt="Beskrivelse av mitt bilde />

# Legge til CSS

Vi ønsker jo gjerne å style opp nettsiden våres litt, og det gjør vi ved hjelp av CSS. Vi hadde kun en kort introduksjon i dag, men det vi gjør er at vi lager en ny fil som heter style.css. Det kan hete det du vil så lenge den blir markert med .css for å vise hvilken filtype det er.

Vi bruker det som heter external CSS som betyr at vi må linke sammen de to filene vi har med <link rel="stylesheet" href="style.css">. Mer om dette tar vi neste uke.

Vi kan da ta HTML-elementer som vi ønsker å modifisere å skrive de i vår nye style.css fil. Eksempel:
body {
background-color: yellow;
}

# Resurser

[MDN](https://developer.mozilla.org/en-US/)
[W3S](https://www.w3schools.com/)
[Unsplash](https://unsplash.com/)
