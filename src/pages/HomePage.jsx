import React, {useEffect} from 'react';
import pageImg
    from "../assets/headers/menstruatiedisk.nl-kiezen-quiz-9.jpg";
import TextContainer from "../components/pageItems/pageDesignElements/textContainer/TextContainer";
import TwoColumn from "../components/pageItems/pageDesignElements/columns/TwoColumn";
import Column from "../components/pageItems/pageDesignElements/columns/Column";
import BookmarkBox from "../components/pageItems/pageDesignElements/bookmarkBox/BookmarkBox";
import TwoColumnWithImg from "../components/pageItems/pageDesignElements/columns/TwoColumnWithImg";
import imgDisks
    from "../assets/img/menstruatiedisk-verschillende-disks-naast-elkaar-gevouwen.jpg";
import {Link} from "react-router-dom";
import ImgGallery from "../components/pageItems/pageDesignElements/columns/ImgGallery";
import {insertDisc, removeDisc} from "../gallerys/insertDisc";


function HomePage({headerImageHandler, pageTitleHandler}) {

    useEffect(() => {
        headerImageHandler(pageImg);
        pageTitleHandler("Menstruatiedisk informatie");
    }, [headerImageHandler, pageTitleHandler]);


    return (
        <>
            <TextContainer>
                <h2>Wat is een menstruatiedisk?</h2>
            </TextContainer>

            <TwoColumn>
                <Column>
                    <p>Een menstruatiedisk is een menstruatieproduct. Het is <strong>een platte disk, die je menstruatie
                        opvangt. </strong>
                        Disks zijn (meestal) van medisch goedgekeurd siliconen gemaakt en gaan tot 10 jaar mee!</p>

                    <h3>Verschil tussen tampons/maandverband en een disk</h3>
                    <p>Tampons en maandverband <strong>absorberen</strong> je menstruatie, maar een disk vangt het
                        alleen
                        op. </p>
                    <p>Je kun een disk tot <strong>12 uur lang dragen</strong>. Daarna haal je de disk eruit, door met
                        je vinger achter de
                        rand te haken (of met het lusje als je disk die heeft), leeg de disk en spoel hem af. Daarna
                        breng je hem weer terug
                        in, tot je hem weer leegt. Dat is maximaal 12 uur later. </p>
                    <p>Er zijn ook wegwerp-exemplaren, die gooi je na gebruik weg.</p>
                </Column>
                <Column>
                    <h3>Kan iedereen een disk 12 uur dragen?</h3>
                    <p>Nee, het ligt aan de heftigheid van je menstruatie. Als de disk eerder dan 12 uur vol is, zul je
                        hem
                        eerder moeten legen. Maar een disk vangt veel menstruatie op! 30 tot 70ml! Ter vergelijking: een
                        gemiddelde tampon heeft een opvangvermogen van 8-10 ml.</p>
                    <p>Bij sommige disk-gebruikers leegt de disk zichzelf bij elk toiletbezoek. Dit wordt auto-dumping
                        genoemd.
                        Op die manier kun je de disk wel 12 uur dragen als je veel menstrueert.</p>

                    <h3>Disk uitkoken</h3>
                    <p>Aangeraden wordt om minimaal één keer per cyclus (ervoor of erna) je disk vijf minuten uit te
                        koken. Dit kan in
                        een steelpannetje met water op het fornuis. Maar ook in een mok/bakje met wat water in de
                        magnetron.</p>
                </Column>
            </TwoColumn>
            <TextContainer><p><strong>Wil je een weten welke disk bij jouw lichaam past?</strong> <br/>
                Maak dan de <Link to="/diskquiz" className="highlighter">diskquiz!</Link></p>
            </TextContainer>
            <BookmarkBox verticalText="gebruik">
                <h2>Hoe gebruik je een disk?</h2>
                <ul>
                    <li><strong>Kook je disk</strong> 5 minuten uit voor gebruik.</li>
                </ul>

                <h3>Disk inbrengen</h3>
                <ul>
                    <li><strong>Vouw de disk</strong> tot een platte ovaal door hem aan de zijkanten in te drukken.</li>
                    <li>Spreid je benen. <strong>Schuif de disk, licht gekanteld, voorzichtig in je vagina</strong>,
                        terwijl je de
                        zijkanten samengeknepen
                        houdt.
                        De disk moet je niet, zoals bij een tampon, recht omhoog, inbregen.
                        Maar juist een beetje schuin. Richt tijdens het inbregen met de disk naar je middenrug.
                        Dit zorgt ervoor dat de disk onder je baarmoedermond gaat zitten, in plaats van er tegenaan.
                        Je kan glijmiddel op waterbasis gebruiken om het soepeler te laten gaan.
                    </li>
                    <li>Duw de disk-rand omhoog, en <strong>klem zo de disk vast achter je schaambeen.</strong> Dit bot
                        zit aan het
                        begin van je vagina bij je buik. Elk lichaam is anders, dus hoe ver dit precies zit, ligt aan
                        jouw bouw.
                        Duw de disk zo ver dat hij niet meer verder naar achter kan. Nu kun je
                        hem <strong>loslaten!</strong>
                    </li>
                    <li>Als de disk goed is ingebracht voel je hem niet zitten. Voel je hem toch? Dan heb je hem
                        waarschijnlijk niet
                        ver genoeg ingebracht. Probeer het dan opnieuw.
                    </li>
                    <li>Zit hij goed? Dan kun je <strong>tot 12 uur lang chillen!</strong> Het ligt aan hoeveel je
                        menstrueert hoe snel hij vol zit.
                    </li>

                </ul>

                <ImgGallery imageList={insertDisc}/>


                <h3>Disk eruit halen</h3>

                <ul>

                    <li>Om de disk eruit te halen spreid je weer je benen en breng je een schone vinger in je vagina. Haak
                        een vinger achter de rand van de disk of pak de rand met twee vingers vast, en <strong>haal de
                            disk eruit</strong>.
                        Heeft je disk een speciaal haakje of steeltje, dan kun je die gebruiken om de disk eruit te
                        halen.
                    </li>
                    <li>Zorg er wel voor dat
                        je de disk horizontaal houdt, zodat je niet morst. Dit kan in het begin nog even lastig zijn,
                        dus neem er rustig de tijd voor en doe dit in een vertrouwde omgeving.
                        Er is een grote kans dat er menstruatie op je vingers komt. Daarom raad ik aan dit de eerste
                        keer onder de douche te doen.
                    </li>

                </ul>
                <ImgGallery imageList={removeDisc}/>


                <h3>Disk eruit?</h3>

                <ul>
                    <li>Heb je de disk eruit? Leeg hem dan in de wc en <strong>spoel hem met water af</strong>.</li>
                    <li>Nog ongesteld? Begin weer bij stap 2, en blijf dit <strong>herhalen</strong> tot je menstruatie
                        voorbij is. :)
                    </li>
                    <li>Menstruatie voorbij? <strong>Kook je disk even uit</strong> en bewaar hem in de tussentijd in
                        een ademend tasje op een droge locatie. Dus liever niet in de
                        badkamer en zeker niet in een luchtdichte container.
                    </li>
                </ul>
            </BookmarkBox>
            <TwoColumnWithImg img={imgDisks}
                              imgAlt="Verschillende menstruatiedisks naast elkaar."
                              imgCaption="Verschillende menstruatiedisks naast elkaar.">
                <h2>Hoe vouw je een disk?</h2>
                <p>Een disk kun je maar op een manier vouwen, erg simpel (zeker als je cups gewend bent, die hebben veel
                    vouwen!). Je menstruatiedisk vouw je door de zijkanten in te drukken. Op die manier heb je een
                    platte
                    ovaal.</p>
                <h2>Automatisch legen van de disk? (Automdumping)</h2>
                <p>Een voordeel die disk-gebruikers ervaren is dat de disk automatisch losschiet als je op de wc zit,
                    waardoor die zich leegt in de wc.
                    Vaak moet je hem erna weer even terugklemmen achter je schaambeen. Ideaal als je veel menstrueert,
                    want dan kan je er echt 12 uur mee doen!</p>
                <p>Als de disk losschiet op andere momenten, is dit een lekkage en geen auto-dump. Probeer de disk iets
                    hoger vast te klemmen.</p>
            </TwoColumnWithImg>
            <TextContainer><p>Heb je nog meer vragen? <Link to="/faq">Check de faq</Link></p>
            </TextContainer>
        </>
    );
}

export default HomePage;