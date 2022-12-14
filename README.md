![Menstruatiedisk homepage](https://github.com/Nynkek/menstruatieDisk-frontend/blob/main/src/assets/menstruatiedisk-screenshot-project.png?raw=true)

Voorbeeld: https://menstruatiedisk.netlify.app

# Menstruatiedisk app

Ik heb de oorspronkelijke app als onderdeel van mijn studie gemaakt. 

Maar om hem online te zetten heb ik de SpringBoot-backend eruit gesloopt en een nieuwe firebase backend gemaakt.
Aangezien mijn data vrij simpel is (ik wil cups-data ophalen), hoef ik geen uitgebreide eigen backend te bouwen.

## **Probleemstelling**

Er is weinig bekend over duurzame menstruatieproducten terwijl wegwerpproducten veel plastic afval veroorzaken. Ook
kunnen er in tampons en maandverband irriterende materialen zitten zonder dat dat op de verpakking staat. Want het is
in Nederland niet verplicht om de ingrediënten op de verpakking te zetten. Toch draag je dit in een van je meest
absorberende plekken. Best gek toch? Dat je niet eens weet wat er dan precies in zit.

Een duurzaam product — die 10 jaar mee gaat en afval bespaart — is de menstruatiedisk. Hier is weinig onafhankelijke
Nederlandse informatie over beschikbaar, terwijl kennis macht is. Je moet helemaal zelf weten wat je gebruikt, maar dan
moet je wel de opties weten!

### Oplossing
Tijd voor een onafhankelijke website met de voor- en nadelen van de menstruatiedisk. De website bevat een tabel, waarbij
je de verschillende disks kan vergelijken op eigenschappen.

Een Disk-producent kan via een formulier een eigen disk toevoegen aan de tabel. Maar voordat die data gelijk
gepubliceerd wordt, moet de Admin die eerst nog even controleren en goedkeuren.

![Menstruatiedisk logo](https://github.com/Nynkek/menstruatieDisk-frontend/blob/main/src/assets/menstruatiedisk-logo-rood.png?raw=true)

## Bestanden
Dit project bevat de volgende mappen:

- assets, bevat alle afbeeldingen.
- components.
    - forms, alle formulieren.
    - pageItems, alle vaste pagina items (zoals header, footer, nav en alle pagina-opbouw-componenten.)
    - tabel, alle tabellen.
- context, bevat alle context data providers.
- helpers, bevat functies die door de hele applicatie gebruikt kunnen worden.
- pages, bevat alle pagina's.


# Installatie-handleiding
De eerste stap is het _clonen_ van de repository. Gebruik de GitHub clone feature.

Of gebruik de onderstaande informatie om de code manueel te clonen.
- SSH: `git@github.com:Nynkek/menstruatieDisk-frontend.git`
- HTTPS: `https://github.com/Nynkek/menstruatieDisk-frontend.git`

### Code runnen
#### Dit project is opgezet met behulp van React

Om de applicatie vervolgens draaiende te krijgen is het als tweede stap belangrijk om [Node.js](https://nodejs.org/en/) en [NPM](https://www.npmjs.com/) te installeren. Daarna installeer je de NPM packages om de app te kunnen runnen. Dit doe je met de volgende commando’s:

`npm install`

Met dit commando installeer je alle vereiste NPM packages.

`npm run start`

Met dit commando start je de app in development mode. Open http://localhost:3000 om de app in de browser te bekijken.
De pagina zal automatisch herladen bij het maken van aanpassingen. Ook zie je lint errors in de console.

`npm run build`

Bundelt de applicatie voor productie naar de `/build` folder. Dit optimaliseert React voor de beste prestatie. 

# screenshots

## Disks vergelijken in tabel met filteropties
![Menstruatiedisk screenshot tabel](https://github.com/Nynkek/menstruatieDisk-frontend/blob/main/src/assets/menstruatiedisk-screenshot-tabel.png?raw=true)

## Disk toevoegen
![Menstruatiedisk screenshot disk toevoegen](https://github.com/Nynkek/menstruatieDisk-frontend/blob/main/src/assets/menstruatiedisk-screenshot-disc-toevoegen.png?raw=true)
![Menstruatiedisk screenshot disk toevoegen](https://github.com/Nynkek/menstruatieDisk-frontend/blob/main/src/assets/menstruatiedisk-screenshot-disc-toevoegen2.png?raw=true)

## homepage

![Menstruatiedisk homepage](https://github.com/Nynkek/menstruatieDisk-frontend/blob/main/src/assets/menstruatiedisk-screenshot-project.png?raw=true)
