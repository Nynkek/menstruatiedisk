import React, {useEffect} from 'react';
import pageImg from "../assets/headers/menstruatiedisk.nl-kiezen-quiz-11.jpg";
import TextContainer from "../components/pageItems/pageDesignElements/textContainer/TextContainer";
import YellowContentBox from "../components/pageItems/pageDesignElements/yellowContentBox/YellowContentBox";
import ImgGallery from "../components/pageItems/pageDesignElements/columns/ImgGallery";
import {discQuizFAQ} from "../components/faqData/discQuizFAQ";
import {discImages} from "../gallerys/insertDisc";
import nynkeWithDiscs from "../assets/img/Nynke-gooit-met-cups-en-disks.jpg";
import TwoColumnWithImg from "../components/pageItems/pageDesignElements/columns/TwoColumnWithImg";

function Donate({headerImageHandler, pageTitleHandler}) {
    useEffect(() => {
        headerImageHandler(pageImg);
        pageTitleHandler("Help mee!");
    }, []);

    return (
        <>
            <TextContainer>
                <h2>Onafhankelijke informatie over duurzaam menstrueren.</h2>
                <h3>Visueel, begrijpbaar en inclusief!</h3>
                <p>Alle informatie die je hier vindt is onafhankelijk.
                    Wat ook betekent dat ik er <strong>niet betaald voor heb gekregen</strong>.
                    Ik heb bewust gekozen om niet samen te werken met merken. Dat klinkt misschien gek,
                    maar in mijn ervaring is dat de enige manier om onafhankelijk te blijven.
                    Want elk merk claimt dat hun disk de beste is, terwijl elk lichaam anders is.
                    Er geen "one size fits all" disk is. Helaas. </p>
                <h3>Advertentie-vrij!</h3>
                <p>Ik heb deze website gemaakt omdat ik onafhankelijke informatie belangrijk vind.
                    Het is belangrijk dat iedereen een goed geïnformeerde beslissing kan maken in het menstruatieproduct,
                    passend bij jouw lijf.
                    Ik hoop de zoektocht naar jouw favo menstruatie-artikel makkelijk te maken.
                    Maar dit project kost veel tijd, en ook nog eens geld om te onderhouden.
                    Dus daar ben jij bij nodig!</p>

                  <p>
                      Ben je blij met de onafhankelijke informatie die je hier gevonden hebt? Top! Overweeg om bij te dragen.
                      Daar maak je mij niet alleen heel blij mee, maar zo kan ik ook deze website up to date en advertentie-vrij houden.
                      Het onderhouden van de website kost geld. Net zoals het up to date houden van de juiste informatie.
                  </p>
                <strong>Menstruatiedisk.nl heeft als doel om bij te dragen aan:</strong>
                <ul>
                    <li>Menstruatie-afval verminderen,</li>
                    <li>Menstruatie-armoede verminderen,</li>
                    <li>Fijnere menstruaties,</li>
                    <li>Weloverwogen keuzes in menstruatie-producten.</li>

                </ul>
            </TextContainer>
            <YellowContentBox>
                <h3>Eenmalig bijdragen om deze informatie te ondersteunen?</h3>
                <p>Graag! Elke donatie is meer dan welkom.</p>
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
                            Kies eigen bedrag</a></li>
                </ul>
            </YellowContentBox>
            <TextContainer>
                <h2>Drie voordelen van een menstruatiedisk:</h2>
                <p>Menstruatiedisks zijn (nog) een onbekend product.
                    Terwijl ze veel voordelen hebben! Iedereen moet zelf bepalen wat ze gebruiken tijdens hun
                    menstruatie,
                    maar ik help graag om een weloverwogen keuze te maken!</p>
                <h3>Lagere milieubelasting</h3>
                <p>Wegwerp menstruatie-artikelen zorgen voor 80 kilo afval per persoon en horen bij het restafval: ze
                    zijn niet te recyclen.
                    Dat zijn zo’n 10.000 producten per persoon die weggegooid worden.
                    [bron: Milieucentraal.] </p>

                <p>Een menstruatiedisk gaat vijf tot tien jaar mee, en als hij "op" is, kun je hem gewoon verbranden.
                    Als je 40 jaar menstrueert, hebben we het over vier tot acht producten!</p>


                <h3>Goedkoper, daarom een middel tegen menstruatie-armoede.</h3>
                <p>Negen procent van de meisjes en jonge menstrueerders in Nederland heeft soms te weinig geld om
                    tampons of
                    maandverband te kunnen kopen. [bron: Armoedefonds] Dit noemen we menstruatie-armoede en dit is een groot probleem.
                    </p>
                <p>Een menstruatiedisk is een investering (€22 tot €45), maar het heeft verder geen terugkerende kosten.
                    Per 10 jaar kosten goedkope tampons €144,00, en tampons van biologisch katoen €600. Waar een disk
                    alleen
                    het aanschafbedrag (€22 tot €45) heeft gekost. [bron: Cupkiezer] </p>
                <p>Dit betekent zeker niet dat de disk 'De oplossing' voor menstruatie-armoede is. Daar is veel meer
                    voor nodig, zoals gratis menstruatie-producten op scholen.
                    Maar het is een product dat je menstruatie goedkoper en gemakkelijker kan maken.</p>

                <h3>Ze vangen meer menstruatie op dan tampons</h3>
                <p>Twintig procent van de Nederlandse menstrueerders tussen de 35 tot 55 jaar kampt met extreem
                    bloedverlies
                    en bijbehorende klachten.
                    [bron: hevigbloedverlies.nl] </p>
                <p>
                Een disk vangt meer bloed op dan een tampon. Daardoor kan dit helpen om minder last van je menstruatie
                te hebben.
            </p>

            </TextContainer>
            <YellowContentBox>
            <TwoColumnWithImg img={nynkeWithDiscs} imgAlt="Nynke jongleert met menstruatiecups en -disks"
                              imgCaption="Nynke jongleert met cups en disk. Fotograaf: 'Met Francis'">
                <h2>Doneren - Waar draag je aan bij?</h2>
                <p>Ik, Nynke, bouw en onderhoud deze website en content zelf. Dat vind ik leuk om te doen, maar het kost
                    altijd
                    meer tijd dan je denkt. En het kost ook gewoon geld.</p>
                <h3>Even transparant over de kosten</h3>
                <p>Ik betaal per jaar: €82,39 voor de hosting en de domeinnaam. <br/>
                    Daarnaast gebruik ik ook veel apparatuur en software. Zoals mijn camera, laptop, microfoon en
                    Photoshop. </p>
                <p>De meeste disks heb ik gratis opgestuurd gekregen van de bedrijven.
                    Maar sommige heb ik ook zelf moeten aanschaffen. Dat is ~€40 per disk!</p>

            </TwoColumnWithImg>

                <h3>Tijd</h3>
                <p>Het ontwerpen en bouwen van de website in React heeft me een maand fulltime werken gekost.
                    Gelukkig was een gedeelte onderdeel van het eindproject van mijn studie fullstack development.
                    Maar een groot gedeelte ook niet.</p>
                <p>De teksten en de foto's maken was samen zo'n 40 uur.
                    Daarnaast ben ik ook op social media actief en wil ik nieuwe disks blijven toevoegen aan de
                    tabel.</p>
                <h2>Hoe ik een beetje geld krijg</h2>
                <p>Als je via een affiliatie-link in de quiz een product koopt, ontvang ik daar soms een klein percentage van (~5%).
                    Dit is alleen als die website een partner-programma heeft, zoals bijvoorbeeld bol.com.
                    De meeste sites hebben geen partner-programma, dus ontvang ik daar ook geen percentage over.</p>
                    <p>Deze affiliate-links zijn mooi meegenomen om de kosten te dekken. Het kost de koper niks extra's namelijk. Maar het is lang niet genoeg om deze website in de
                    lucht te houden. </p>
            </YellowContentBox>
            <TextContainer>
                <h2>Donatie-opties</h2>
                <p>Onderstaande links zijn Tikkie-links. Dus je kunt dan met iDeal betalen.</p>

                <ul>
                    <li>€40: <a href="https://tikkie.me/pay/rouidsf0f8h2sg3mlj2c" target="_blank" rel="noopener">doneer
                        een menstruatiedisk</a>. Ik heb nog een hele lijst met Amerikaanse disks die ik
                        graag wil uitproberen en reviewen voor deze website!
                    </li>
                    <li>€7: <a href="https://tikkie.me/pay/dggbff7jd9fho4qo47du" target="_blank" rel="noopener">betaal
                        eenmalig
                        1 maand de vaste lasten</a> van hosting en domeinnaam.
                    </li>
                    <li>€3: <a href="https://tikkie.me/pay/8df9cg6mgh06ia77uusr" target="_blank" rel="noopener">trakteer
                        me op een kopje koffie</a> buiten de deur.
                    </li>
                    <li>€X: <a href="https://tikkie.me/pay/7qoe4tqr36bvcv6ebi4r" target="_blank" rel="noopener"> Kies je
                        eigen bedrag.</a> Alles is welkom!
                    </li>
                </ul>
                <h3>Kun je niks missen?</h3>
                Je hebt me ook al heel erg door dit project te delen! Stuur het door. En volg <a href="https://instagram.com/cupkiezer/" target="_blank"> Cupkiezer (het zusterproject) op instagram</a>.
                <h2>Heel erg bedankt!</h2>
                <br />
                <hr className="space-50"/>

                <h4>Bronnen</h4>


                <ul>
                    <li>
                        <a href="https://www.milieucentraal.nl/bewust-winkelen/uitgelichte-producten/maandverband-en-tampons/"
                            target="_blank">bron: Milieucentraal</a>
                    </li>
                    <li> <a href="https://www.armoedefonds.nl/menstruatie-armoede" target="_blank">bron: armoedefonds</a></li>
                    <li> <a
                        href="https://cupkiezer.nl/menstruatie-producten-overzicht/" target="_blank">bron: Cupkiezer</a></li>
                    <li><a href="https://www.hevigbloedverlies.nl/bloedserieus" target="_blank">bron: hevigbloedverlies.nl</a></li>
                </ul>

            </TextContainer>
        </>
    );
}

export default Donate;