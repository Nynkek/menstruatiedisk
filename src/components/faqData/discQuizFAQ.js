import ImgGallery from "../../components/pageItems/pageDesignElements/columns/ImgGallery";
import { renderToString } from 'react-dom/server'
import React from 'react';
import {cervix, reusableDisc} from "../../gallerys/diskQuizGallery";

export const discQuizFAQ = {
    title: "Uitleg bij de menstruatiediskquiz vragen",
    rows: [
        {
            title: "Baarmoedermondhoogte",
            content: `
                        <p>Dit bepaalt de breedte van de disk. Als je nog niet weet hoe hoog je baarmoedermond zit, 
                        raad ik je wel aan dit eerst op te meten.</p>
                          ${renderToString(<ImgGallery imageList={cervix}/>)}
        `},
        {
            title: "Je baarmoedermondhoogte opmeten",
            content: `
                        <p><strong>Je baarmoedermond opmeten</strong> doe je met een schone vinger in je vagina te voelen.
                    De hoogte kan veranderen tijdens je cyclus, daarom is het belangrijk dat je het echt tijdens je
                    menstruatie doet. Aangezien je dan de disk gaat dragen. </p>
                <p>
                    Je baarmoedermond voelt als een kleine, beetje harde donutvormige bobbel die terugveert bij
                    aanraking.
                    Het zal wat harder aanvoelen dan de rest van je vaginawand.
                    Wanneer je hem voelt houd dan met een andere vinger bij hoe diep je zit.
                    Meet daarna op hoeveel mm dat ongeveer was.</p>
                <p>
                    De baarmoederhals vormt de verbinding van de baarmoeder met de vagina.
                </p>
        `},
        {
            title: "Herbruikbaar",
            content: `
                            <p>Dit bepaalt of je een siliconen herbruikbare disk te zien krijgt, of wegwerp exemplaren van
                    polymeer.</p>
                     ${renderToString(<ImgGallery imageList={reusableDisc}/>)}
                    
        `},
        {
            title: "Steeltje",
            content: `
                       <p>De eerste menstruatiedisks waren een ronde schijf zonder poespas.
                    Een aantal nieuwere modellen hebben een touwtje of lusje aan de disk zitten. Dit helpt je met de
                    disk eruit halen.</p><p>
                Wat jij fijner vindt, moet je natuurlijk nog uitvinden.
                Maar weet wel dat je het touwtje er altijd weer af kan knippen als het toch niet bevalt. Het nadeel is
                dan weer dat de disks met touwtje/lusje minder goed in NL te verkrijgen zijn.</p>
                    
        `},
        {
            title: "Nederlandse webshop?",
            content: `
                        <p>Helaas zijn nog veel disks met steeltje en andere uitneem-hulp niet te verkrijgen in Nederland. Daarom heb je de keuze om te kijken welke dat wel zijn.</p>
                    
        `},

        {
            title: "Hardheid disk?",
            content: `
                        <p>Voor nu, omdat er nog niet echt veel verschil tussen disks zit qua hardheid, 
                      heb ik ervoor gekozen om dit niet mee te nemen als criteria. Wellicht later, als er wel meer disks zijn wel.
                      </p><p>De hardheid van een disk kan invloed hebben of je hem voelt drukken op je blaas.</p>
                    
        `},
        {
            title: "Waarop moet je letten bij het kiezen van een disk?",
            content: `
                 <ul>
                    <li>Breedte van de disk: wordt bepaald door je baarmoedermondhoogte.</li>
                    <li>Hardheid van de disk: ligt aan hoe gevoelig je vagina en blaas zijn.</li>
                    <li>Vorm van de disk: Persoonlijke voorkeur.</li>
                    <li>Makkelijk eruit halen: Persoonlijke voorkeur. Wil je een steeltje of extra lusje? </li>
                    <li>Wegwerp op herbruikbaar: persoonlijke voorkeur.</li>
                    <li>Makkelijk te verkrijgen: Helaas zijn de meeste disks nog niet zo makkelijk in NL te verkrijgen.</li>
                    <li>Inhoud van de disk: verschilt per disk.</li>
                </ul>

<p>Speciaal om dit proces makkelijk te maken hebben we de <a href="/diskquiz">diskquiz</a> gemaakt.</p>`
        }
    ]
}