import React, {useEffect} from 'react';
import pageImg from "../assets/headers/menstruatiedisk.nl-kiezen-quiz-11.jpg";
import TextContainer from "../components/pageItems/pageDesignElements/textContainer/TextContainer";
import YellowContentBox from "../components/pageItems/pageDesignElements/yellowContentBox/YellowContentBox";
import ImgGallery from "../components/pageItems/pageDesignElements/columns/ImgGallery";
import {discQuizFAQ} from "../components/faqData/discQuizFAQ";
import {discImages} from "../gallerys/insertDisc";

function Donate({headerImageHandler, pageTitleHandler}) {
    useEffect(() => {
        headerImageHandler(pageImg);
        pageTitleHandler("Help mee!");
    }, []);

    return (
        <>
            <TextContainer>
                <h3>Onafhankelijke informatie over duurzaam menstrueren: visueel, begrijpbaar, en inclusief.</h3>
                <p>Menstruatiedisk.nl heeft als doel:</p>
                <ul>
                    <li>Minder afval,</li>
                    <li>Menstruatie-armoede verminderen,</li>
                    <li>Fijnere menstruaties,</li>
                    <li>Weloverwogen keuzes in menstruatie-producten.</li>

                </ul>
            </TextContainer>
            <YellowContentBox>
                <h4>Wil je eenmalig bijdragen om deze informatie beschikbaar te houden?</h4>
                <p>Graag! Elke donatie is welkom.</p>
                <ul className="button-container">
                    <li className="button">

                        <a href="https://tikkie.me/pay/dggbff7jd9fho4qo47du" target="_blank" rel="noopener">
                            <span className="donate-btn-txt">€7</span> <br/>
                            1 maand vaste lasten</a></li>
                    <li className="button">

                        <a href="https://tikkie.me/pay/8df9cg6mgh06ia77uusr" target="_blank" rel="noopener">
                            <span className="donate-btn-txt">€3</span> <br/>
                            trakteer een kopje koffie</a></li>
                    <li className="button">

                        <a href="https://tikkie.me/pay/7qoe4tqr36bvcv6ebi4r" target="_blank" rel="noopener">
                            <span className="donate-btn-txt">€X</span> <br/>
                            Kies eigen bedrag.</a></li>
                </ul>
            </YellowContentBox>
            <TextContainer>
                <h2>Drie voordelen van een menstruatiedisk:</h2>
                <p>Menstruatiedisks zijn een onbekend product.
                    Terwijl ze veel voordelen hebben! Iedereen moet zelf bepalen wat ze gebruiken tijdens hun
                    menstruatie,
                    maar we helpen graag om een weloverwogen keuze te maken!</p>
                <h3>Lagere milieubelasting</h3>
                <p>Wegwerp menstruatie-artikelen zorgen voor 80 kilo afval per persoon en horen bij het restafval: ze
                    zijn
                    niet te
                    recyclen. Dat is zo’n 10.000 producten per persoon.
                    [<a href="https://www.milieucentraal.nl/bewust-winkelen/uitgelichte-producten/maandverband-en-tampons/"
                        target="_blank">bron</a>] </p>

                <p>Een menstruatiedisk gaat 5 - 10 jaar mee, en als hij "op" is, kun je hem gewoon verbranden.</p>


                <h3>Goedkoper, daarom een middel tegen menstruatie-armoede.</h3>
                <p>Negen procent van de meisjes en jonge menstrueerders in Nederland heeft soms te weinig geld om
                    tampons of
                    maandverband te kunnen kopen.
                    [<a href="https://www.armoedefonds.nl/menstruatie-armoede" target="_blank">bron</a>].</p>
                <p>Een menstruatiedisk is een investering (€22 tot €45), maar het heeft verder geen terugkerende kosten.
                    Per 10 jaar kosten goedkope tampons €144,00, en tampons van biologisch katoen €600. Waar een disk
                    alleen
                    het aanschafbedrag (€22 tot €45) heeft gekost. [<a
                        href="https://cupkiezer.nl/menstruatie-producten-overzicht/" target="_blank">bron</a>] </p>
                <p>Dit betekent zeker niet dat de disk 'De oplossing' voor menstruatie-armoede is, daar is veel meer
                    voor nodig. Zoals gratis menstruatie-producten op scholen.
                    Maar het is een product wat je menstruatie goedkoper en gemakkelijker kan maken.</p>

                <h3>Ze vangen meer menstruatie op dan tampons</h3>
                <p>Twintig procent van de Nederlandse menstrueerders tussen de 35 tot 55 jaar kampt met extreem
                    bloedverlies
                    en bijbehorende klachten.
                    [<a href="https://www.hevigbloedverlies.nl/bloedserieus" target="_blank">bron</a>] </p><p>
                Een disk vangt meer bloed op dan een tampon. Daardoor kan dit helpen om minder last van je menstruatie
                te hebben.
            </p>

                <h2>Doneren - Waar draag je aan bij?</h2>
                <p>Ik, Nynke, bouw en onderhoud deze website en content zelf. Dat vind ik leuk om te doen, maar het kost altijd
                    meer tijd dan je denkt. En het kost ook gewoon geld.</p>
                <h3>Kosten</h3>
                <p>Ik betaal per jaar: €82,39 voor de hosting en de domeinnaam. <br/>
                    Daarnaast gebruik ik ook veel apparatuur en software. Zoals mijn camera, laptop, microfoon en
                    Photoshop. </p>
                <p>De meeste disks heb ik gratis opgestuurd gekregen van de bedrijven.
                    Maar sommige heb ik ook zelf moeten aanschaffen. Dat is ~€40 per disk!</p>
                <h3>Tijd</h3>
                <p>Het ontwerpen en bouwen van de website in React heeft me een maand fulltime werken gekost.
                    Gelukkig was een gedeelte onderdeel van het eindproject van mijn studie fullstack development.
                    Maar een groot gedeelte ook niet.</p>
                <p>De teksten en de foto's maken was samen zo'n 40 uur.
                    Daarnaast ben ik ook op social media actief en wil ik nieuwe disks blijven toevoegen aan de
                    tabel.</p>
                <p>Als je via een affiliatie-link een product koopt, ontvang ik daar een klein percentage van (~5%).
                    Dat is mooi meegenomen om de kosten te dekken. Maar het is lang niet genoeg om deze website in de
                    lucht te houden, of om mezelf af en toe op een koffie te trakteren.</p>

                <h2>Donatie-opties</h2>
                <ul>
                    <li>€40: <a href="https://tikkie.me/pay/rouidsf0f8h2sg3mlj2c" target="_blank" rel="noopener">betaal
                        een nieuwe menstruatiedisk</a> voor me. Ik heb nog een hele lijst met Amerikaanse disks die ik graag wil uitproberen en reviewen voor deze website!
                    </li>
                    <li>€7: <a href="https://tikkie.me/pay/dggbff7jd9fho4qo47du" target="_blank" rel="noopener">betaal
                        eenmalig
                        1 maand de vaste lasten</a> van hosting en domeinnaam.
                    </li>
                    <li>€3: <a href="https://tikkie.me/pay/8df9cg6mgh06ia77uusr" target="_blank" rel="noopener">trakteer
                        me
                        eenmalig
                        op een kopje koffie</a> buiten de deur.
                    </li>
                    <li>€X: <a href="https://tikkie.me/pay/7qoe4tqr36bvcv6ebi4r" target="_blank" rel="noopener"> Kies je
                        eigen bedrag.</a> Alles is welkom!
                    </li>
                </ul>

                <h2>Heel erg bedankt!</h2>

                <ImgGallery imageList={discImages}></ImgGallery>

            </TextContainer>
        </>
    )
        ;
}

export default Donate;