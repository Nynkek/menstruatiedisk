import ImgGallery from "../../components/pageItems/pageDesignElements/columns/ImgGallery";
import {insertDisc, removeDisc, troubleWithDisc} from "../../gallerys/insertDisc";
import { renderToString } from 'react-dom/server'
import React from 'react';


export const discProblemsFAQData = {
    title: "Problemen met je disk?",
    rows: [
        {
            title: "Ik lek door!",
            content: `
               <p>Dat is vervelend. Hieronder vind je een aantal scenario's met oplossing:</p>
             <ul>             
                <li>Zit je menstruatiebloed aan de ónderkant van je disk? Dan zit de disk niet onder je baarmoedermond, maar er tegenaan. 
                Probeer de disk schuiner in te brengen. Mik tijdens het inbrengen meer op je middenrug. En duw hem goed ver naar achter.</li>
                <li>Vangt de disk wel menstruatie op? Misschien zit hij dan sneller vol dan je dacht. Probeer hem eens vaker te legen.</li>
                <li>Schiet de disk los? Probeer hem dan hoger achter je schaambot te klemmen.</li>
                <li>Misschien is deze maat niet goed voor je... probeer onze <a href='/diskquiz'>Diskquiz</a> eens!</li>
             </ul>
                               ${renderToString(<ImgGallery imageList={troubleWithDisc}/>)}

                `
        },
        {
            title: "De disk schiet los tijdens het dragen, zonder dat ik iets bijzonders doe.",
            content: `
             <ul>             
                <li>Lees de <a href="/faq/#gebruik">tips hoe je een disk in doet</a> nog eens goed door.</li>
                <li>Dan heb je wellicht een verkeerde maat... probeer onze <a href='/diskquiz'>Diskquiz</a> eens!</li>
             </ul>
                
                `
        },
        {
            title: "De disk schiet los tijdens sporten of niezen.",
            content: `
             <p>Klinkt alsof je disk te breed of te smal is. Waarschijnlijk te breed!</p>
                <p>Waarschijnlijk is de disk te groot voor je... probeer onze <a href='/diskquiz'>Diskquiz</a> eens! </p>
                
                `
        },
        {
            title: "Het eruithalen is erg bloederig.",
            content: `
             <ul>             
                <li>Dit is iets gebruikelijker bij disks dan bij bijvoorbeeld cups.</li>
                <li>Er zijn disks met een uitneem-hulp, zoals een steeltje, die dit moeten voorkomen. Of in ieder geval, minder zouden moeten maken. Kijk <a href="/vergelijk-meerdere-menstruatiedisks">op de vergelijken-pagina</a> om disks te vergelijken.</li>
             </ul>
               ${renderToString(<ImgGallery imageList={removeDisc}/>)}

                `
        },
        {
            title: "Ik krijg hem er (bijna) niet uit!",
            content: `
             <ul>             
                <li>Ontspan je! Hoe meer je je spieren aanspant, hoe lastiger het is.</li>
                <li>De disk kan niet kwijtraken! Je vagina is een gesloten kanaal.</li>
                <li>Misschien is een disk met een extra uitneemhulp beter voor je geschikt. Kijk <a href="/vergelijk-meerdere-menstruatiedisks">op de vergelijken-pagina</a> welke dat zijn.</li>
                <li>Als je niet goed bij de disk kunt, druk dan met je bekkenspieren alsof je probeert te poepen. Dan zou de disk wat lager moeten gaan zitten.</li>
                <li>Probeer je het toevallig net als je wakker wordt of nadat je opgewonden bent geweest? Probeer het dan over 10 minuten pas weer. Loop eerst even rond, en laat de zwaartekracht zijn werk doen en je vagina weer krimpen.</li>
             </ul>
                
                `
        },
        {
            title: "Ik voel de disk tijdens het dragen",
            content: `
             <ul>             
                <li>Dat hoort niet. Zit hij wel goed? Klinkt alsof die te breed of hard is.</li>
             </ul>
                
                `
        },
        {
            title: "Mijn disk is verkleurd.",
            content: `
             <ul>             
                <li>Maakt niet uit! Het kan geen kwaad en is zelfs normaal dat bloed je disk verkleurd.</li>
             </ul>
                
                `
        },
        {
            title: "De disk leegt zichzelf als ik naar de wc ga.",
            content: `
             <ul>             
                <li>Ideaal toch?</li>
                <li>Een voordeel die disk-gebruikers ervaren is dat de disk automatisch losschiet als je op de wc zit, waardoor die zich leegt in de wc. Vaak moet je hem erna weer even terugklemmen achter je schaambeen. Ideaal als je veel menstrueert, want dan kan je er echt 12 uur mee doen!

Als de disk losschiet op andere momenten, is dit een lekkage en geen auto-dump. Probeer de disk iets hoger vast te klemmen.</li>
             </ul>
                
                `
        },

    ]
}