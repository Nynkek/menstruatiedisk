import ImgGallery from "../../components/pageItems/pageDesignElements/columns/ImgGallery";
import {discVsCup,discImages} from "../../gallerys/insertDisc";
import { renderToString } from 'react-dom/server'
import React from 'react';

export const discData = {
    title: "Menstruatiedisk",
    rows: [
        {
            title: "Wat is een menstruatiedisk?",
            content: `<p>De menstruatiedisk is een flexibele schijf en lijkt op een pessarium. Het is een herbruikbaar bakje wat je menstruatie opvangt.</p>

                <p>Je vouwt jouw menstrautiedisk tot een ovaal. Daarna doe je 'm in je vagina. 
                Dit werkt iets anders dan bij een tampon, de disk moet namelijk iets schuiner ingebracht worden. 
                    De disk komt tussen de achterwand van de vagina en het schaambeen te liggen, daar bedekt
                    het de hele baarmoedermond. Je klemt hem achter je schaambeen, om hem op z’n plek te laten
                    zitten.</p>
                <p>Eruit halen doe je door met je vinger achter de rand te klemmen. Dan trek je de menstruatiedisk
                    eruit. Je hoeft geen vacuüm te verbreken, zoals bij een menstruatiecup.</p>
                <p>Je spoelt hem af, en brengt hem weer gevouwen in.</p>

                     ${renderToString(<ImgGallery imageList={discImages}/>)}

`
        },
        {
            title: "Wat zijn de voordelen van een menstruatiedisk?",
            content: `
    <ul>
                    <li><strong>Afvalvrij:</strong> De (herbruikbare) disk geeft, in tegenstelling tot tampons en maandverband, 10 jaar lang geen afval
                        want een disk is herbruikbaar. <br/></li>
                    <li><strong>Geen chemicaliën:</strong> De disk bevat geen absorberende middelen, toevoegingen, bleekmiddelen of
                        parfum. Wel zo fijn voor je vagina!<br/></li>
                    <li><strong>Goedkoper:</strong> Het is een investering maar omdat je er 10 jaar mee kan doen is het het zeker
                        waard.<br/></li>
                    <li><strong>Inhouden tijdens seks:</strong> Je kunt de disk inhouden tijdens penetratieve seks.
                        Er wordt wel vaak aangeraden hem nog even van te voren te legen. De disk lijkt qua vorm ook op
                        een pessarium, maar het is geen anti-conceptie!<br/></li>
                    <li><strong>Autodumping</strong> (automatisch legen): Sommige gebruikers ervaren “autodumping”, oftewel: elke keer
                        als ze naar de wc gaan leegt de disk zichzelf.
                        Doordat je op een hele specifieke manier zit, schiet de disk los achter je schaambot en op die
                        manier leegt de disk zichzelf bij elk wc-bezoek.
                        Soms moet je de disk daarna wel weer even achter je bot klemmen.<br/></li>
                    <li><strong>Geurvrij:</strong> In tegenstelling tot wegwerp tampons en maandverband ruik je niks.<br/></li>

                    <li><strong>Sportief:</strong> Je kan er gewoon mee blijven sporten. Ja, zelfs zwemmen!<br/></li>

                    <li><strong>12 uur draagbaar:</strong> Je hoeft de disk maar om de 12 uur te legen. Mocht je veel bloed verliezen,
                        dan zit hij wellicht wel eerder vol en zul je hem dus eerder moeten legen.<br/></li>

                        <li><strong>Duurzaam:</strong> Een menstruatiedisk gaat tot zeker tien jaar mee!<br/></li>

                        <li><strong>Onzichtbaar:</strong> De disk heeft (meestal) geen touwtje dus je ziet er niks van!<br/></li>

                        <li><strong>Comfortabel:</strong> Veel diskgebruikers ervaren minder menstruatieklachten.<br/></li>
                </ul>
                
                `
        },
        {
            title: "Nadelen van de menstruatiedisk",
            content: `
                    <ul>
                        <li><strong>Investering</strong>: De (herbruikbare) disk is wel vrij prijzig. 
                    Maar je kan er 10 jaar mee doen! Benieuwd hoe duur verschillende menstruatieproducten per maand kosten? <a href="https://cupkiezer.nl/menstruatie-producten-overzicht/" target="_blank"  rel="noreferrer">Bekijk dit overzicht op Cupkiezer.</a><br/></li>
                        <li><strong>Bloed op je vingers:</strong> Grote kans dat er menstruatie op je vingers komt bij het eruit halen. 
                    Je wast je handen erna weer, dus het is niet erg. Maar ik kan me voorstellen dat het een nadeel is.<br/>Er zijn ook disks met lusjes of touwtjes, die dit makkelijker moeten maken.</li>
                <li><strong>Leercurve</strong>: Het kan even duren voordat je het in- en uitdoen onder de knie hebt.</li>
                <li><strong>Spiraaltje?</strong> Check even bij je huisarts of die tips heeft en het touwtje zo kort mogelijk kan knippen.</li>
                <li><strong>Verkrijgbaarheid</strong>: Helaas zijn ze nog niet goed beschikbaar in fysieke winkels. Ze zijn doorgaans vooral online verkrijgbaar. En sommige disks zijn alleen nog in Amerika te verkrijgen.</li>
                </ul>
                `
        },
        {
            title: "Voel je de disk als je hem draagt?",
            content: "<p>Nee, tijdens het dragen zou je hem niet moeten voelen! De wegwerp-exemplaren zijn een stuk harder, waardoor je die nog wel kan voelen. </p>" +
                "<p>Voel je de disk toch? Dan heb je wellicht een verkeerde maat... probeer onze <a href='/diskquiz'>Diskquiz</a> eens! </p>"
        },
        {
            title: "Ruik je iets tijdens het dragen van een disk?",
            content: "<p>Nee, bloed wat in aanraking met zuurstof komt kan geuren. Maar tijdens het dragen ruik je niks! Bij het eruig halen ruik je soms een ijzerige-geur, omdat bloed ijzer bevat. </p>" +
                "Wanneer je een disk langer dan 12 uur draagt kan het wel zijn dat je menstruatie een geur krijgt. Dit ruik je wanneer je de disk er uit haalt."
        },
        {
            title: "Kan iedereen een disk 12 uur dragen?",
            content: "<p>Nee, het ligt aan de heftigheid van je menstruatie. </p>Als de disk eerder dan 12 uur vol is, zul je hem eerder moeten legen. " +
                " <p>Maar een disk vangt veel menstruatie op, wel 30 tot 70ml! Ter vergelijking: een gemiddelde tampon heeft een absorptievermogen van 8-10 ml.</p>" +
                "<p>Wil je weten hoe lang jij je disk kan inhouden? Probeer hem dan eens wat vaker te legen, om te zien of hij al vol zit. Als hij niet vol zit, kun je de volgende keer er langer mee doen.</p>"
        },
        {
            title: "Kan ik seks hebben met een disk in?",
            content: "<p>Jup, dat is een van de voordelen van een disk. Je kan hem tijdens orale en penetratieve seks inhouden. Veel merken noemen dit 'mess-free sex', maar leeg hem voor de zekerheid even voor gebruik. </p>" +
                "<p>Het is geen voorbehoedsmiddel. Het beschermt je niet tegen zwangerschappen en soa's.</p> "
        },
        {
            title: "Kan ik gaan zwemmen met een disk in?",
            content: "Jazeker! En ze zijn ook nog eens onzichtbaar, omdat ze (meestal) geen touwtje hebben. " +
                "Soms kan het voorkomen dat er toch water in je disk komt tijdens het zwemmen, dat kan geen kwaad maar dat is het wel fijn om de disk even na het zwemmen te legen."
        },
        {
            title: "Verschil tussen tampons/maandverband en een disk?",
            content: `Tampons en maandverband absorberen je menstruatie, maar een disk vangt het alleen op. <br /><br />
                    Je kun een disk tot 12 uur lang dragen. Daarna haal je de disk eruit, door met je vinger achter de rand te haken (of met het lusje als je disk die heeft), leeg de disk en spoelt hem af. 
                    Daarna breng je hem weer terug in. Voor nog 12 uur zorgeloze menstruatie.`
        },
        {
            title: "Verschil tussen een cup en een disk?",
            content: `

                <p>Daar heb ik <a href="https://cupkiezer.nl/menstruatiecups-vergelijken/" target="_blank"  rel="noreferrer">op cupkiezer.nl al eens uitgebreid over geschreven</a>. Maar hieronder nog in het kort.</p>
                 <p>De <strong>overeenkomst</strong> tussen de menstruatiedisk en de -cup is dat ze beide je menstruatie opvangen en dat je ze 12 uur kan dragen. Dat is het ongeveer wel... Maar hoe je ze indoet en hoe hoog je ze draagt is anders.</p>
                 <p>Het verschil: </p>
                 <ul>
                 <li>Disks blijven zitten doordat ze zo breed zijn, je klemt hem vast achter je schaambeen. Cups blijven zitten door hun vacuum.</li>
                 <li>Disks kun je inhouden tijdens penetratie.</li>
                 <li>Disks hebben gemiddeld meer inhoud dan cups.</li>
                 <li>Er bestaan ook wegwerp disks, maar geen wegwerp cups.</li>
                 <li>Disks hebben in hun opvang-bakje een dunner laagje silicone, waardoor ze waarschijnlijk iets minder lang meegaan dan een cup.</li>
                </ul>
                <p>Welke beter bij jouw lichaam past, is persoonlijk. <strong>Wil je weten welke cup of disk bij jouw lichaam past? </strong></p>
                <ul>
                <li>De <a href="https://cupkiezer.nl/quiz" target="_blank"  rel="noreferrer">Cupquiz</a> vind je op cupkiezer.nl</li>
                <li>De <a href="/diskquiz" target="_blank" rel="noreferrer">Diskquiz</a> vind je hier, op menstruatiedisk.nl</li>
                </ul>
                
                     ${renderToString(<ImgGallery imageList={discVsCup}/>)}
                
                `
        }, {
            title: "Kan ik plassen of poepen met de disk in?",
            content: `Jazekers. De disk zit in je vagina-kanaal. Niet in je anus of plasbuis. <br/>Het kan zijn dat je disk automatisch zichzelf leegt op de wc en dat je hem weer even achter je schaambeen moet klemmen.`
        },
        {
            title: "Kan je een disk gebruiken als je een spiraaltje hebt?",
            content: `
            <p>Er is nog te weinig onderzoek naar gedaan om 100% zeker te zeggen dat het veilig is. <a href="https://cupkiezer.nl/hrf_faq/is-spiraaltje-probleem-menstruatiecup/" target="_blank"  rel="noreferrer">Er is wel onderzoek naar een cup + spiraaltje geweest.</a></p>
            <p>Mijn tips: Overleg met je gynaecoloog of huisarts en laat je draadjes zo kort mogelijk knippen.</p>
            <p>Je kan op eigen risico een disk gebruiken.</p>
`
        }
        ,
        {
            title: "Hoeveel ml kan er in een disk?",
            content: `
            <p>Menstruatiedisks verschillen in inhoud, van 30ml tot wel 76ml.</p>
            <p>Al is het wel zo dat ze nooit helemaal gevuld kunnen worden omdat het zachte opvang-gedeelte altijd wat wordt samen gevouwen wanneer je hem draagt.</p>
`
        }
    ]
}